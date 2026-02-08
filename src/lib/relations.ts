import { industryRelations } from "@/content/relations/industries";
import { locationRelations } from "@/content/relations/locations";
import { serviceRelations } from "@/content/relations/services";

export type RelationKind = "service" | "industry" | "location";

export function getRelations(kind: RelationKind, slug: string) {
  if (kind === "service") return serviceRelations[slug];
  if (kind === "industry") return industryRelations[slug];
  return locationRelations[slug];
}

