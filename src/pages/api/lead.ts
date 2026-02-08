import type { APIRoute } from "astro";
import { z } from "zod";
import { appendLeadJsonl } from "@/lib/leads";
import { join } from "node:path";

const LeadSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().min(2).max(160),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(30),
  location: z.string().min(2).max(120),
  industry: z.string().min(2).max(120),
  servicesNeeded: z.array(z.string()).default([]),
  urgency: z.enum(["today", "this-week", "this-month", "planning"]),
  preferredContact: z.enum(["email", "phone"]).optional().default("email"),
  message: z.string().max(2000).optional().default(""),
  website: z.string().optional().default(""),
});

function wantsJson(request: Request) {
  const accept = request.headers.get("accept") || "";
  return accept.includes("application/json");
}

async function parseLead(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = await request.json().catch(() => ({}));
    return {
      ...body,
      servicesNeeded: Array.isArray(body?.servicesNeeded)
        ? body.servicesNeeded
        : body?.servicesNeeded
          ? [String(body.servicesNeeded)]
          : [],
    };
  }

  const fd = await request.formData();
  return {
    name: String(fd.get("name") || ""),
    company: String(fd.get("company") || ""),
    email: String(fd.get("email") || ""),
    phone: String(fd.get("phone") || ""),
    location: String(fd.get("location") || ""),
    industry: String(fd.get("industry") || ""),
    servicesNeeded: fd.getAll("servicesNeeded").map(String),
    urgency: String(fd.get("urgency") || ""),
    preferredContact: String(fd.get("preferredContact") || ""),
    message: String(fd.get("message") || ""),
    website: String(fd.get("website") || ""),
  };
}

async function forwardToFormSubmit(lead: z.infer<typeof LeadSchema>) {
  const endpoint = process.env.FORMSUBMIT_ENDPOINT;
  if (!endpoint) return;

  const params = new URLSearchParams();
  params.set("name", lead.name);
  params.set("company", lead.company);
  params.set("email", lead.email);
  params.set("phone", lead.phone);
  params.set("location", lead.location);
  params.set("industry", lead.industry);
  params.set("servicesNeeded", lead.servicesNeeded.join(", "));
  params.set("urgency", lead.urgency);
  params.set("preferredContact", lead.preferredContact || "email");
  params.set("message", lead.message || "");
  params.set("_subject", `New MSP lead: ${lead.company} (${lead.location})`);
  params.set("_captcha", "false");

  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
}

export const POST: APIRoute = async ({ request }) => {
  const raw = await parseLead(request);

  if (raw.website && String(raw.website).trim().length) {
    return wantsJson(request)
      ? new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } })
      : Response.redirect("/contact?submitted=1#lead-form", 303);
  }

  const parsed = LeadSchema.safeParse(raw);
  if (!parsed.success) {
    const payload = { ok: false, errors: parsed.error.flatten() };
    return wantsJson(request)
      ? new Response(JSON.stringify(payload), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        })
      : new Response("Invalid submission", { status: 400 });
  }

  const lead = parsed.data;
  const stamped = {
    receivedAt: new Date().toISOString(),
    ...lead,
    website: undefined,
  };

  if (import.meta.env.DEV) {
    await appendLeadJsonl(join(process.cwd(), "data", "leads.jsonl"), stamped);
  }

  if (!import.meta.env.DEV && process.env.LEAD_DELIVERY === "formsubmit") {
    await forwardToFormSubmit(lead);
  }

  return wantsJson(request)
    ? new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } })
    : Response.redirect("/contact?submitted=1#lead-form", 303);
};

export const GET: APIRoute = async () => {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" },
  });
};
