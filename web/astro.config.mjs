import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "node:url";

// GitHub Pages serves this project under /vyro-video-generator/.
// Keep local development at the root path.
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://bikeztagram-ai.github.io",
  base: isProd ? "/vyro-video-generator" : "/",
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
