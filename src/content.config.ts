import { defineCollection, z } from "astro:content";

const base = z.object({
  title: z.string(),
  description: z.string(),
  lastUpdated: z.preprocess((v) => {
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    return v;
  }, z.string()),
  heroSummary: z.string(),
  primaryKeyword: z.string(),
  secondaryKeywords: z.array(z.string()),
  schemaType: z.string(),
  linkBlocks: z
    .object({
      top: z.boolean().optional(),
      mid: z.boolean().optional(),
      bottom: z.boolean().optional(),
    })
    .optional(),
});

const relationSet = z.object({
  services: z.array(z.string()).optional(),
  industries: z.array(z.string()).optional(),
  locations: z.array(z.string()).optional(),
  nearbyLocations: z.array(z.string()).optional(),
});

export const collections = {
  services: defineCollection({
    type: "content",
    schema: base.extend({
      serviceCategory: z.string().optional(),
    }),
  }),
  industries: defineCollection({
    type: "content",
    schema: base.extend({
      industryFocus: z.string().optional(),
    }),
  }),
  locations: defineCollection({
    type: "content",
    schema: base.extend({
      locationName: z.string().optional(),
      nearby: z.array(z.string()).optional(),
    }),
  }),
  relations: defineCollection({
    type: "data",
    schema: z.record(z.string(), relationSet),
  }),
};
