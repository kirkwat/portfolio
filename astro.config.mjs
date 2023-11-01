import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://kirkwatson.net/",
  integrations: [tailwind(), mdx()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
