import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@nuxtjs/plausible", "@nuxt/content"],
  nitro: {
    prerender: {
      routes: [
        "/presently",
        "/rmdd",
        "/kruidenpower",
        "/mailgun",
        "/moderately-interesting",
        "/overworked",
        "/plausible",
        "/rmdd",
        "/ticketmain",
        "/uberdeno",
        "/uwuifier",
        "/vormgeving-2",
        "/zonneveranda",
      ],
    },
  },
  runtimeConfig: {
    public: {
      domain: "sjorsvanholst.nl",
      method: "https",
    },
  },
  render: {
    injectScripts: false,
  },
  image: {
    provider: "netlify",
  },
  plausible: {
    domain: "sjorsvanholst.nl",
    apiHost: "https://plausible.hedium.nl",
  },
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_imports.scss" as *;',
        },
      },
    },
  },
  ssr: true,
});
