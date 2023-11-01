import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://kirkwatson.net/",
  integrations: [tailwind(), mdx()],
  output: "static",
  adapter: vercel({
    imageService: true,
  }),
});
