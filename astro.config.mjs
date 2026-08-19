import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";

export default defineConfig({
  site: "https://www.xi-an-china.com",
  trailingSlash: "always",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      lastmod: new Date("2026-08-12"),
    }),
    react(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});