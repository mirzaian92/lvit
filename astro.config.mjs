import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://example.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith("/api/lead"),
    }),
  ],
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
  build: { format: "directory" },
});

