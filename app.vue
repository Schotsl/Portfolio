<script lang="ts" setup>
if (process.client && window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const title = ref("Sjors van Holst");
const route = useRoute();
const runtime = useRuntimeConfig();

const pathURL = `${runtime.public.method}://${runtime.public.domain}`;
const fullURL = route.path === "/" ? `${pathURL}/` : `${pathURL}${route.path}`;

useHead({
  titleTemplate: (chunk) => {
    title.value = chunk || title.value;
    return title.value;
  },
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    },
  ],
  meta: [
    {
      name: "msapplication-TileColor",
      content: "#ffc40d",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: fullURL,
    },
    {
      rel: "apple-touch-icon",
      href: "/icon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/icon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Slab:wght@600;700&display=swap",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div>
    <other-header :title="title"></other-header>

    <main>
      <NuxtPage />
    </main>

    <other-footer></other-footer>
  </div>
</template>

<style lang="scss">
body,
html,
#__nuxt,
#__nuxt > div {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;

  position: relative;
  text-align: left;
  font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
  flex-direction: column;
}

#__nuxt > div > main {
  flex: 1;
}

body {
  display: flex;
  background: #f5f5f5;
  justify-content: center;

  &::before {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    z-index: -1;
    content: "";
    opacity: 0.1;
    position: fixed;

    background-position: center;
  }
}
</style>
