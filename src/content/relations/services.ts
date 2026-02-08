import type { RelationSet } from "./types";

export const serviceRelations: Record<string, RelationSet> = {
  "managed-it-services": {
    services: [
      "help-desk-services",
      "co-managed-it-services",
      "backup-disaster-recovery",
      "cloud-services",
      "cybersecurity",
      "microsoft",
    ],
    industries: ["professional-services", "construction", "healthcare", "law-firms"],
    locations: [
      "las-vegas-it-services",
      "henderson-it-services",
      "summerlin-it-services",
      "north-las-vegas-it-services",
    ],
  },
  "cybersecurity": {
    services: [
      "managed-cybersecurity-services",
      "cybersecurity-insurance",
      "backup-disaster-recovery",
      "microsoft-365",
      "managed-it-services",
    ],
    industries: ["healthcare", "insurance", "law-firms", "professional-services"],
    locations: [
      "las-vegas-it-services",
      "paradise-it-services",
      "spring-valley-it-services",
      "henderson-it-services",
    ],
  },
  "managed-cybersecurity-services": {
    services: [
      "cybersecurity",
      "backup-disaster-recovery",
      "managed-it-services",
      "microsoft-365",
      "cloud-services",
    ],
    industries: ["healthcare", "manufacturing", "real-estate", "startups"],
    locations: [
      "enterprise-it-services",
      "summerlin-it-services",
      "las-vegas-it-services",
      "henderson-it-services",
    ],
  },
  "cybersecurity-insurance": {
    services: [
      "cybersecurity",
      "managed-cybersecurity-services",
      "microsoft-365",
      "backup-disaster-recovery",
    ],
    industries: ["insurance", "law-firms", "healthcare", "small-mid-sized-businesses"],
    locations: [
      "las-vegas-it-services",
      "henderson-it-services",
      "north-las-vegas-it-services",
      "spring-valley-it-services",
    ],
  },
  "help-desk-services": {
    services: [
      "managed-it-services",
      "co-managed-it-services",
      "microsoft",
      "voip-services-providers",
      "cloud-services",
    ],
    industries: ["business-services", "marketing", "real-estate", "printing-services"],
    locations: [
      "winchester-it-services",
      "paradise-it-services",
      "las-vegas-it-services",
      "sunrise-manor-it-services",
    ],
  },
  "microsoft": {
    services: [
      "microsoft-365",
      "microsoft-office-365",
      "microsoft-azure",
      "microsoft-windows-365",
      "email-migration",
      "cloud-services",
    ],
    industries: ["professional-services", "law-firms", "healthcare", "startups"],
    locations: [
      "las-vegas-it-services",
      "henderson-it-services",
      "summerlin-it-services",
      "enterprise-it-services",
    ],
  },
  "microsoft-office-365": {
    services: [
      "microsoft",
      "microsoft-365",
      "email-migration",
      "cybersecurity",
      "help-desk-services",
    ],
    industries: ["law-firms", "cpa-accountant", "professional-services", "nonprofits"],
    locations: [
      "las-vegas-it-services",
      "henderson-it-services",
      "spring-valley-it-services",
      "paradise-it-services",
    ],
  },
  "microsoft-windows-365": {
    services: ["microsoft", "microsoft-azure", "cloud-services", "managed-it-services", "cybersecurity"],
    industries: ["startups", "marketing", "professional-services", "construction"],
    locations: [
      "enterprise-it-services",
      "summerlin-it-services",
      "las-vegas-it-services",
      "north-las-vegas-it-services",
    ],
  },
  "microsoft-azure": {
    services: [
      "microsoft",
      "cloud-migration",
      "managed-cloud-services",
      "backup-disaster-recovery",
      "cybersecurity",
    ],
    industries: ["engineering", "manufacturing", "startups", "hospitals"],
    locations: [
      "las-vegas-it-services",
      "henderson-it-services",
      "summerlin-it-services",
      "spring-valley-it-services",
    ],
  },
  "microsoft-365": {
    services: [
      "microsoft",
      "managed-cybersecurity-services",
      "email-migration",
      "help-desk-services",
      "managed-it-services",
    ],
    industries: ["healthcare", "law-firms", "insurance", "professional-services"],
    locations: ["paradise-it-services", "winchester-it-services", "las-vegas-it-services", "henderson-it-services"],
  },
  "co-managed-it-services": {
    services: [
      "managed-it-services",
      "help-desk-services",
      "cybersecurity",
      "backup-disaster-recovery",
      "microsoft-365",
    ],
    industries: ["manufacturing", "construction", "hotels", "casino"],
    locations: [
      "north-las-vegas-it-services",
      "enterprise-it-services",
      "henderson-it-services",
      "las-vegas-it-services",
    ],
  },
  "backup-disaster-recovery": {
    services: ["managed-it-services", "cybersecurity", "managed-cloud-services", "cloud-migration", "microsoft-azure"],
    industries: ["healthcare", "hospitals", "law-firms", "gaming"],
    locations: ["las-vegas-it-services", "henderson-it-services", "summerlin-it-services", "paradise-it-services"],
  },
  "email-migration": {
    services: ["microsoft-office-365", "microsoft-365", "managed-it-services", "cybersecurity", "cloud-services"],
    industries: ["cpa-accountant", "law-firms", "professional-services", "nonprofits"],
    locations: ["las-vegas-it-services", "spring-valley-it-services", "henderson-it-services", "summerlin-it-services"],
  },
  "voip-services-providers": {
    services: [
      "managed-it-services",
      "help-desk-services",
      "cloud-services",
      "cybersecurity",
      "hardware-as-a-service",
    ],
    industries: ["hospitality", "real-estate", "construction", "business-services"],
    locations: ["enterprise-it-services", "paradise-it-services", "spring-valley-it-services", "north-las-vegas-it-services"],
  },
  "cloud-services": {
    services: ["managed-cloud-services", "cloud-migration", "microsoft-azure", "backup-disaster-recovery", "cybersecurity"],
    industries: ["startups", "professional-services", "engineering", "logistics"],
    locations: ["las-vegas-it-services", "summerlin-it-services", "henderson-it-services", "north-las-vegas-it-services"],
  },
  "managed-cloud-services": {
    services: ["cloud-services", "cloud-migration", "microsoft-azure", "backup-disaster-recovery", "managed-it-services"],
    industries: ["logistics", "manufacturing", "startups", "professional-services"],
    locations: ["las-vegas-it-services", "henderson-it-services", "enterprise-it-services", "summerlin-it-services"],
  },
  "cloud-migration": {
    services: ["cloud-services", "managed-cloud-services", "microsoft-azure", "email-migration", "backup-disaster-recovery"],
    industries: ["engineering", "construction", "law-firms", "marketing"],
    locations: ["summerlin-it-services", "spring-valley-it-services", "las-vegas-it-services", "henderson-it-services"],
  },
  "it-disposition-recycling": {
    services: ["managed-it-services", "hardware-as-a-service", "cybersecurity", "co-managed-it-services"],
    industries: ["healthcare", "insurance", "manufacturing", "nonprofits"],
    locations: ["las-vegas-it-services", "north-las-vegas-it-services", "henderson-it-services", "enterprise-it-services"],
  },
  "hardware-as-a-service": {
    services: ["managed-it-services", "help-desk-services", "it-disposition-recycling", "microsoft-windows-365"],
    industries: ["professional-services", "startups", "small-mid-sized-businesses", "real-estate"],
    locations: ["summerlin-it-services", "las-vegas-it-services", "henderson-it-services", "spring-valley-it-services"],
  },
  "ai-managed-services": {
    services: ["ai-managed-service-provider", "managed-it-services", "microsoft-azure", "cybersecurity", "cloud-services"],
    industries: ["marketing", "professional-services", "startups", "business-services"],
    locations: ["las-vegas-it-services", "summerlin-it-services", "henderson-it-services", "enterprise-it-services"],
  },
  "ai-managed-service-provider": {
    services: ["ai-managed-services", "managed-it-services", "microsoft-azure", "managed-cloud-services", "cybersecurity"],
    industries: ["startups", "professional-services", "marketing", "healthcare"],
    locations: ["las-vegas-it-services", "enterprise-it-services", "summerlin-it-services", "spring-valley-it-services"],
  },
};
