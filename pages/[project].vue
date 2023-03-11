<script lang="ts" setup>
import { marked } from "marked";

const context = useNuxtApp();

const projectRoute = useRoute();
const projectSlug = projectRoute.params.project;
const projectFile = `projects/${projectSlug}.json`;

const projectQuery = queryContent("projects");
const projectResult = await projectQuery
  .where({ _file: projectFile })
  .findOne();

const videoElement = ref();

const videoSource = computed(() => {
  return projectResult.video.replace("/public", "");
});

const deliverableSource = computed(() => {
  return projectResult.deliverable.replace("/public", "");
});

const clickedDemo = () => {
  context.$plausible.trackEvent(`Clicked demo for ${projectResult.title}`);
};

const clickedGithub = () => {
  context.$plausible.trackEvent(`Clicked GitHub for ${projectResult.title}`);
};

const clickedDeliverable = () => {
  context.$plausible.trackEvent(
    `Clicked deliverable for ${projectResult.title}`
  );
};

useHead({
  title: projectResult.title,
  meta: [
    {
      name: "description",
      content: projectResult.short,
    },
  ],
});
</script>

<template>
  <section class="project-container">
    <section class="project-section">
      <project-categories :categories="projectResult.categories" />

      <h2 class="project-subtitle">About {{ projectResult.title }}</h2>

      <!-- eslint-disable vue/no-v-html -->
      <div
        class="project-content"
        v-html="marked.parse(projectResult.description)"
      ></div>
      <!-- eslint-enable vue/no-v-html -->

      <template
        v-if="
          projectResult.demo ||
          projectResult.github ||
          projectResult.deliverable
        "
      >
        <ul class="project-actions">
          <template v-if="projectResult.demo">
            <li class="project-action">
              <a
                class="project-hyperlink"
                :href="projectResult.demo"
                target="_blank"
                @click="clickedDemo"
                ><i class="fa-solid fa-link"></i> View Demo</a
              >
            </li>
          </template>
          <template v-if="projectResult.github">
            <li class="project-action">
              <a
                class="project-hyperlink"
                :href="projectResult.github"
                target="_blank"
                @click="clickedGithub"
                ><i class="fa-brands fa-github"></i> View on GitHub</a
              >
            </li>
          </template>
          <template v-if="projectResult.deliverable">
            <li class="project-action">
              <a
                class="project-hyperlink"
                :href="deliverableSource"
                target="_blank"
                @click="clickedDeliverable"
                ><i class="fa-solid fa-file"></i> View deliverable</a
              >
            </li>
          </template>
        </ul>
      </template>
    </section>

    <video
      ref="videoElement"
      class="project-video"
      loop
      muted
      autoplay
      controls
    >
      <source :src="videoSource" type="video/mp4" />
    </video>
  </section>
</template>

<style lang="scss" scoped>
.project-container {
  font-family: "Roboto Slab";

  .project-video {
    width: 100%;
    height: 100%;
    display: block;
    padding: 1.5rem 0 0;
    background: #0d0c46;
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
}
</style>
