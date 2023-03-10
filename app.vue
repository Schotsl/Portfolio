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
    return titleChunk ? `${titleChunk} - Sjors van Holst` : "Sjors van Holst";
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

    background-image: url("https://static.vecteezy.com/system/resources/thumbnails/001/255/498/small/retro-memphis-shapes-seamless-pattern-free-vector.jpg");
    background-position: center;
  }
}
</style>
