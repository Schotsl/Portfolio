<script setup>
if (process.client && window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ZonneVeranda` : "ZonneVeranda";
  },
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    },
  ],
  link: [
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
      href: "/icon/site.webmanifest",
    },
  ],
  htmlAttrs: {
    lang: "nl",
  },
});
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style lang="scss">
body,
html {
  color: #3d3165;
  margin: 0;
  position: relative;
  text-align: left;
  font-family: "Roboto", Helvetica, Arial, Lucida, sans-serif;
}
</style>
