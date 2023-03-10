<script setup>
import { marked } from "marked";

const projectRoute = useRoute();
const projectSlug = projectRoute.params.project;
const projectFile = `projects/${projectSlug}.json`;

const projectQuery = queryContent("projects");
const projectResult = await projectQuery
  .where({ _file: projectFile })
  .findOne({});

const videoElement = ref();
const videoSource = computed(() => {
  return projectResult.video.replace("/public", "");
});

onMounted(() => {
  const videoHeight = videoElement.value.clientHeight;
  const videoHalf = Math.round(videoHeight / 2);

  window.scroll(0, videoHalf);
});

useHead({
  title: projectResult.title,
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
});
</script>

<template>
  <section class="project-section">
    <video
      ref="videoElement"
      class="project-video"
      loop
      muted
      controls
      autoplay
    >
      <source :src="videoSource" type="video/mp4" />
    </video>

    <h1 class="project-title">{{ projectResult.title }}</h1>

    <section class="project-section">
      <ul class="project-categories">
        <li
          v-for="category in projectResult.categories"
          :key="category"
          class="project-category"
        >
          {{ category }}
        </li>
      </ul>

      <h2 class="project-subtitle">About {{ projectResult.title }}</h2>

      <!-- eslint-disable vue/no-v-html -->
      <div
        class="project-content"
        v-html="marked.parse(projectResult.description)"
      ></div>
      <!-- eslint-enable vue/no-v-html -->

      <ul class="project-actions">
        <li class="project-action">
          <a class="project-hyperlink" :href="projectResult.demo"
            ><i class="fa-solid fa-link"></i> View Demo</a
          >
        </li>
        <li class="project-action">
          <a class="project-hyperlink" :href="projectResult.github"
            ><i class="fa-brands fa-github"></i> View on GitHub</a
          >
        </li>
      </ul>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.project-section {
  font-family: "Roboto Slab";

  .project-video {
    width: 100%;
    height: 100%;
    display: block;
  }

  .project-title {
    color: #c9d4df;
    padding: 1.75rem 10vw;
    background: #0d0c46;

    font-size: 2rem;
    font-family: "Roboto Slab";
  }

  .project-section {
    color: #020230;
    padding: 1.75rem 10vw;

    .project-subtitle {
      color: #020230;
      font-size: 1.5rem;
    }

    .project-content {
      font-size: 0.85rem;
      font-family: "Open Sans";
    }

    .project-actions,
    .project-categories {
      gap: 0.4rem;
      margin: 0;
      margin: 1.5rem 0;
      display: flex;

      font-size: 0.65rem;
      list-style: none;
      flex-direction: row;
      text-transform: uppercase;

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

      .project-category {
        color: #ff1d63;
        margin: 0px;
        font-weight: 600;

        &::after {
          content: ", ";
        }

        &:last-child::after {
          content: "";
        }
      }
    }

    .project-actions {
      gap: 1rem;
      margin: 2rem 0;
    }
  }
}
</style>
