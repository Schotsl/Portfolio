<script setup>
import content404 from "~/content/404.json";
import content500 from "~/content/500.json";

const props = defineProps({ error: Object });

const headerObject = computed(() => {
  return props.error.statusCode === "404"
    ? content404.fiqldu
    : content500.xxeakf;
});

const headerActions = computed(() => {
  const actions = headerObject.actions || [];
  return actions.map((action) => {
    return {
      label: action.label,
      href: action.href,
      normal: {
        background: "#fa8e64",
        foreground: "#fff",
      },
      hover: {
        background: "#fdb092",
        foreground: "#fff",
      },
    };
  });
});

useHead({
  titleTemplate: `${props.error.statusCode} - Sjors van Holst`,
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
  <div>
    <other-navigation
      :current="$route.path"
      :actions="[
        {
          href: '/',
          image: {
            src:
              $route.path === '/powerport'
                ? '/icon/powerport.png'
                : '/icon/favicon.svg',
            alt: 'ZonneVeranda\'s logo',
            width: 170.08,
            height: 170.08,
          },
        },
        {
          label: 'ZonneVeranda',
          href: '/zonneveranda',
        },
        {
          label: 'PowerPort',
          href: '/powerport',
        },
        {
          label: 'Zonnepanelen',
          href: '/zonnepanelen',
        },
        {
          label: 'Zonnekas',
          href: '/zonnekas',
        },
        {
          label: 'Private Power',
          href: '/private-power',
        },
        {
          label: 'Projecten',
          href: '/projecten',
        },
        {
          label: 'Over ons',
          href: '/over-ons',
        },
        {
          label: 'Partners',
          href: '/over-ons/',
          hash: 'partners',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ]"
    />
    <main>
      <other-header
        :title="headerObject.title"
        :image="headerObject.image"
        :actions="headerActions"
        :content="headerObject.content"
        :subtitle="headerObject.subtitle"
      />
    </main>

    <other-footer
      :columns="[
        {
          image: {
            src: '/icon/favicon.svg',
            alt: 'ZonneVeranda\'s logo',
            width: 170.08,
            height: 170.08,
          },
        },
        {
          title: 'Onze producten',
          actions: [
            {
              label: 'ZonneVeranda',
              href: '/zonneveranda',
            },
            {
              label: 'PowerPort',
              href: '/powerport',
            },
            {
              label: 'Zonnepanelen',
              href: '/zonnepanelen',
            },
          ],
        },
        {
          title: 'Over ons',
          actions: [
            {
              label: 'Over ons',
              href: '/over-ons',
            },
            {
              label: 'Private Energy',
              href: '#',
            },
          ],
        },
        {
          title: 'Contact',
          actions: [
            {
              label: 'info@zonneveranda.nl',
              href: 'mailto:info@zonneveranda.nl',
            },
            {
              label: '+31 (0)10 262 16 23',
              href: 'tel:310102621623',
            },
            {
              target: '_blank',
              label: 'Weg en Bos 19 <p>2661 DG Bergschenhoek</p>',
              href: 'https://goo.gl/maps/LyZdLgChqCyHzQDi6',
            },
          ],
        },
        {
          title: 'Socials',
          actions: [
            {
              icon: 'fa-facebook',
              target: '_blank',
              label: 'Facebook',
              href: 'https://www.facebook.com/ZonneVeranda-336006190111000/',
            },
            {
              icon: 'fa-linkedin',
              target: '_blank',
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/zonneveranda/about/',
            },
          ],
        },
      ]"
      :actions="[
        {
          label: 'Privacyverklaring',
          href: '/privacyverklaring',
        },
      ]"
      :company="'ZonneVeranda'"
    />
  </div>
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
