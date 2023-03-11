import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@nuxtjs/plausible", "@nuxt/content"],
  nitro: {
    prerender: {
      routes: [
        "/404.html",
        "/500.html",
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
      domain: "api.corvusconsultancy.nl",
      method: "https",
      version: "v1",
    },
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
});
