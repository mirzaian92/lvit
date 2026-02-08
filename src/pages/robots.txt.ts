import type { APIRoute } from "astro";
import { SITE } from "@/lib/site";

export const GET: APIRoute = async () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${new URL("/sitemap-index.xml", SITE.url).toString()}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

