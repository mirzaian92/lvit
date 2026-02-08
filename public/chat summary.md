# Silver State IT (Las Vegas MSP) Astro Site Summary

## Overview

Production-ready Astro website for a local MSP targeting Las Vegas and surrounding areas, built to prioritize SEO, topical authority, and internal linking.

## Stack

- Framework: Astro (static site output)
- Styling: Tailwind CSS (brand tokens in `tailwind.config.mjs`)
- Content: MDX via Astro Content Collections
- Validation: Zod
- Sitemap: `@astrojs/sitemap`

## Brand design system

- Primary: `#0B1F33`
- Accent: `#F59E0B`
- Background: `#FFFFFF`
- Text: `#0F172A`
- Borders: `#E2E8F0`

## Routes and site structure

Required folders and pages:

- `/service` (hub): `src/pages/service/index.astro`
- `/service/<slug>` (leaf): `src/pages/service/[slug].astro`
- `/industry` (hub): `src/pages/industry/index.astro`
- `/industry/<slug>` (leaf): `src/pages/industry/[slug].astro`
- `/location` (hub): `src/pages/location/index.astro`
- `/location/<location>-it-services` (leaf): `src/pages/location/[slug].astro`
- `/blog` (hub placeholder only): `src/pages/blog.astro`
- `/about`: `src/pages/about.astro`
- `/contact`: `src/pages/contact.astro`
- `/api/lead` (POST only): `src/pages/api/lead.ts`
- `/robots.txt`: `src/pages/robots.txt.ts`

No `/blog/<slug>` pages exist.

## Content collections

Content is in:

- Services: `src/content/services/*.mdx`
- Industries: `src/content/industries/*.mdx`
- Locations: `src/content/locations/*.mdx`

Collection schema: `src/content.config.ts`

Frontmatter fields used across collections:

- `title`
- `description`
- `slug`
- `lastUpdated` (YYYY-MM-DD)
- `heroSummary`
- `primaryKeyword`
- `secondaryKeywords` (array)
- `schemaType`
- `linkBlocks` (controls dynamic internal link block placement)

## Internal linking engine

- Relation maps (slugs): `src/content/relations/services.ts`, `src/content/relations/industries.ts`, `src/content/relations/locations.ts`
- Renderer: `src/components/InternalLinks.astro`
- Placement controls per page: `linkBlocks` in MDX frontmatter

## SEO and schema

Implemented:

- Unique titles and descriptions per page
- Canonical URLs everywhere via `src/components/SEO.astro`
- OG and Twitter metadata via `src/components/SEO.astro`
- Breadcrumb UI: `src/components/Breadcrumbs.astro`
- BreadcrumbList JSON-LD on hubs and leaf pages
- Sitewide JSON-LD: Organization + WebSite via `src/components/SchemaSitewide.astro`
- Service pages include Service schema
- Location pages include LocalBusiness schema with `areaServed`
- Sitemap generated at build time (includes only existing pages)
- Robots allows crawling and references sitemap index

Notes:

- Set `PUBLIC_SITE_URL` for correct canonical URLs, robots sitemap URL, and OG absolute URLs.

## Forms

Contact form:

- Multi-step UI with minimal inline JS: `src/components/LeadForm.astro`
- Client-side validation (required fields, basic email check)
- Server-side validation with Zod: `src/pages/api/lead.ts`
- Honeypot field: `website`

Lead delivery:

- Dev mode: appends JSONL to `data/leads.jsonl`
- Production toggle:
  - `LEAD_DELIVERY=formsubmit`
  - `FORMSUBMIT_ENDPOINT=...`

Example env template: `.env.example`

## UI components

- Base layout: `src/layouts/BaseLayout.astro`
- Leaf layout: `src/layouts/LeafLayout.astro`
- Sticky CTA: `src/components/StickyCTA.astro`
- Trust signals: `src/components/TrustSignals.astro`
- Global styles: `src/styles/global.css`

## Content inventory

Totals:

- Services: 21
- Industries: 24
- Locations: 20

### Services (`/service/<slug>`)

- AI Managed Service Provider: `/service/ai-managed-service-provider`
- AI Managed Services: `/service/ai-managed-services`
- Backup and Disaster Recovery Services: `/service/backup-disaster-recovery`
- Cloud Migration: `/service/cloud-migration`
- Cloud Services: `/service/cloud-services`
- Co-Managed IT Services: `/service/co-managed-it-services`
- Cybersecurity: `/service/cybersecurity`
- Cybersecurity Insurance: `/service/cybersecurity-insurance`
- Email Migration: `/service/email-migration`
- Hardware as a Service: `/service/hardware-as-a-service`
- Help Desk Services: `/service/help-desk-services`
- IT Disposition & Recycling: `/service/it-disposition-recycling`
- Managed Cloud Services: `/service/managed-cloud-services`
- Managed Cybersecurity Services: `/service/managed-cybersecurity-services`
- Managed IT Services: `/service/managed-it-services`
- Microsoft Services: `/service/microsoft`
- Microsoft 365: `/service/microsoft-365`
- Microsoft Azure: `/service/microsoft-azure`
- Microsoft Office 365: `/service/microsoft-office-365`
- Microsoft Windows 365: `/service/microsoft-windows-365`
- VoIP Services Providers: `/service/voip-services-providers`

### Industries (`/industry/<slug>`)

- Architects: `/industry/architects`
- Business Services: `/industry/business-services`
- Casino: `/industry/casino`
- Construction: `/industry/construction`
- CPA and Accountant: `/industry/cpa-accountant`
- Engineering: `/industry/engineering`
- Gaming: `/industry/gaming`
- Healthcare: `/industry/healthcare`
- Hospitality: `/industry/hospitality`
- Hospitals: `/industry/hospitals`
- Hotels: `/industry/hotels`
- Insurance: `/industry/insurance`
- Law Firms: `/industry/law-firms`
- Logistics: `/industry/logistics`
- Manufacturing: `/industry/manufacturing`
- Marketing: `/industry/marketing`
- Medical: `/industry/medical`
- Medical Spas: `/industry/medical-spas`
- Nonprofits: `/industry/nonprofits`
- Printing Services: `/industry/printing-services`
- Professional Services: `/industry/professional-services`
- Real Estate: `/industry/real-estate`
- Small and Mid-Sized Businesses: `/industry/small-mid-sized-businesses`
- Startups: `/industry/startups`

### Locations (`/location/<slug>`)

- Boulder City IT Services: `/location/boulder-city-it-services`
- Centennial Hills IT Services: `/location/centennial-hills-it-services`
- Enterprise IT Services: `/location/enterprise-it-services`
- Henderson IT Services: `/location/henderson-it-services`
- Lake Las Vegas IT Services: `/location/lake-las-vegas-it-services`
- Las Vegas IT Services: `/location/las-vegas-it-services`
- Laughlin IT Services: `/location/laughlin-it-services`
- Lone Mountain IT Services: `/location/lone-mountain-it-services`
- Mesquite IT Services: `/location/mesquite-it-services`
- Moapa Valley IT Services: `/location/moapa-valley-it-services`
- North Las Vegas IT Services: `/location/north-las-vegas-it-services`
- Pahrump IT Services: `/location/pahrump-it-services`
- Paradise IT Services: `/location/paradise-it-services`
- Primm IT Services: `/location/primm-it-services`
- Searchlight IT Services: `/location/searchlight-it-services`
- Spring Valley IT Services: `/location/spring-valley-it-services`
- Summerlin IT Services: `/location/summerlin-it-services`
- Sunrise Manor IT Services: `/location/sunrise-manor-it-services`
- Whitney IT Services: `/location/whitney-it-services`
- Winchester IT Services: `/location/winchester-it-services`

## Running locally

Install and run:

```bash
npm install
npm run dev -- --port 3000
```

Build:

```bash
npm run build
```

## Repo

GitHub: `https://github.com/mirzaian92/lvit`

