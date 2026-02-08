import { SITE } from "@/lib/site";

type BreadcrumbItem = { name: string; item: string };

export function organizationSchema() {
  const id = `${SITE.url}/#organization`;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": id,
    name: SITE.legalName || SITE.name,
    url: SITE.url,
    email: SITE.email || undefined,
    telephone: SITE.phone || undefined,
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((b, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: b.name,
      item: b.item,
    })),
  };
}

export function professionalServiceSchema(params: {
  name: string;
  pageUrl: string;
  areaServed: string[];
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${params.pageUrl}#localbusiness`,
    name: params.name,
    url: params.pageUrl,
    description: params.description,
    areaServed: params.areaServed.map((a) => ({ "@type": "AdministrativeArea", name: a })),
    openingHours: "Mo-Su 00:00-23:59",
  };
}

export function serviceSchema(params: {
  name: string;
  pageUrl: string;
  description: string;
  areaServedText: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    url: params.pageUrl,
    description: params.description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: params.areaServedText,
  };
}

export function locationLocalBusinessSchema(params: {
  name: string;
  pageUrl: string;
  description: string;
  areaServedText: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${params.pageUrl}#localbusiness`,
    name: params.name,
    url: params.pageUrl,
    description: params.description,
    areaServed: params.areaServedText,
    openingHours: "Mo-Su 00:00-23:59",
  };
}
