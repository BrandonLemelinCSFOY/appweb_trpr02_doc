import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Revues de code TP02 Développement d'Applications Web",
  description: "Site de revues de code pour TP02",
  base: "/appweb_trpr02_doc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Revues", link: "/semaine1" },
    ],

    sidebar: [
      {
        text: "Revues",
        items: [
          { text: "Semaine 1", link: "/semaine1" },
          { text: "Semaine 2", link: "/semaine2" },
          { text: "Semaine 3", link: "/semaine3" },
        ],
      },
    ],
  },
})
