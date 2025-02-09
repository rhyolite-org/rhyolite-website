// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/global.css"],
      logo: {
        src: "./src/assets/Notepad_icon_web.svg",
        // replacesTitle: true, // Hide the site title
      },
      title: "Rhyolite",
      social: {
        github: "https://github.com/rhyolite-org/rhyolite",
        discord: "https://discord.gg/K6FAd8FTma",
      },
      sidebar: [
        {
          label: "Get Rhyolite",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Downloads", slug: "downloads" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Get Started", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
