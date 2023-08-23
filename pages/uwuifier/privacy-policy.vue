<script setup>
useHead({
  titleTemplate: () => {
    return "Sjors van Holst";
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
    <main>
      <section class="project-section">
        <project-categories :categories="['Uwuifier', 'Privacy policy']" />

        <h2 class="project-subtitle">Privacy policy for Uwuifier</h2>

        <div class="project-content">
          <p>Last updated: <strong>Wed 23 Aug 23:33</strong></p>

          <h2 class="project-subtitle">1. Introduction</h2>
          <p>
            Thank you for choosing Uwuifier. Your privacy is of utmost
            importance to us. This Privacy Policy provides details about the
            information we collect and how we use it.
          </p>

          <h2 class="project-subtitle">2. Information we collect</h2>
          <p>
            We do not collect or store any user-specific information regarding
            the text, sentence, or words you input into our app. The Uwuifier
            app processes the text locally and does not transmit or save it
            externally.
          </p>

          <h2 class="project-subtitle">3. Analytics</h2>
          <p>
            We use Plausible for analytics to understand user behavior better
            and to improve our app. Plausible collects data anonymously without
            tracking individual users or storing personal data. The only
            information we gather is the frequency of texts being "uwuified",
            without storing or knowing the actual content of the text.
          </p>

          <h2 class="project-subtitle">4. Your consent</h2>
          <p>By using our app, you consent to our privacy policy.</p>

          <h2 class="project-subtitle">5. Changes to this privacy policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page. We advise you to review this page regularly
            for any changes.
          </p>

          <h2 class="project-subtitle">6. Contacting me</h2>
          <p>
            If you have any questions regarding this privacy policy, you can
            contact me at
            <a href="mailto:uwuifier@sjorsvanholst.nl"
              >uwuifier@sjorsvanholst.nl</a
            >
          </p>
        </div>

        <ul class="project-actions">
          <li class="project-action">
            <a class="project-hyperlink" href="/"
              ><i class="fa-solid fa-home"></i> Take me home</a
            >
          </li>
        </ul>
      </section>
    </main>

    <other-footer></other-footer>
  </div>
</template>

<style lang="scss">
body,
html,
#__nuxt {
  width: 100%;
  height: 100%;
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

    background-position: center;
  }
}

.project-title {
  color: #c9d4df;
  padding: 6.75rem 10vw 1.75rem;
  background: #0d0c46;

  margin-top: -5rem;

  font-size: 2rem;
  font-family: "Roboto Slab";
}

.project-section {
  color: #020230;
  padding: 1.75rem 1.5rem;

  @include md {
    padding: 3.25rem 10vw 3.5rem;
  }

  .project-subtitle {
    color: #020230;
    font-size: 1.5rem;
  }

  .project-content {
    font-size: 1rem;
    font-family: "Open Sans";

    @include md {
      font-size: 0.95rem;
    }

    @include lg {
      font-size: 0.85rem;
    }
  }

  .project-actions,
  .project-categories {
    gap: 0.4rem;
    margin: 0;
    margin: 1.5rem 0;
    display: flex;

    font-size: 0.95rem;
    list-style: none;
    flex-direction: row;
    text-transform: uppercase;

    @include md {
      font-size: 0.85rem;
    }

    @include lg {
      font-size: 0.65rem;
    }

    .project-action {
      color: #fff;
      margin: 0px;
      padding: 0.75rem 1.5rem;
      background: #ff1d63;
      transition: all 0.3s ease-in-out;

      .project-hyperlink {
        color: #fff;
      }

      &:hover {
        transform: scale(1.05);
        background: #e51a59;
      }
    }
  }

  .project-actions {
    gap: 1rem;
    margin: 2rem 0 0;
  }

  .project-categories {
    margin: 0 0 1.5rem;
  }
}
</style>
