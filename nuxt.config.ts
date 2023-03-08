import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@nuxtjs/plausible", "@nuxt/content"],
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
