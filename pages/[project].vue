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
      autoplay
      loop
      muted
      controls
    >
      <source :src="videoSource" type="video/mp4" />
    </video>

    <h1 class="project-title">{{ projectResult.title }}</h1>

    <section class="project-content">
      <ul class="project-categories">
        <li>Design</li>
        <li v-for="category in projectResult.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <h2 class="project-subtitle">About {{ projectResult.title }}</h2>
      <!-- eslint-disable vue/no-v-html -->
      <div v-html="marked.parse(projectResult.description)"></div>
      <!-- eslint-enable vue/no-v-html -->

      <ul style="padding-top: 1rem">
        <li>
          <a :href="projectResult.demo">View Demo</a>
        </li>
        <li>
          <a :href="projectResult.github">View on GitHub</a>
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
    // margin: 7.5% 7.5% 0;
    display: block;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  }

  .project-title {
    font-family: "Roboto Slab";
    background: #0d0c46;
    color: #c9d4df;
    margin: 0;
    font-weight: 400;
    font-size: 2rem;
    padding: 1.75rem 7.5%;
  }

  .project-subtitle {
    margin: 0;

    color: #020230;
    font-weight: 400;
    font-size: 1.5rem;
  }

  .project-content {
    color: #020230;
    padding: 1.75rem 7.5%;
    background: #fff;

    div {
      font-size: 0.85rem;
      font-family: "Open Sans";
    }

    .project-categories {
      gap: 0.5rem;
      margin: 0 0 1.5rem;
      li {
        margin: 0px;
        color: #ff1d63;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;

        &::after {
          content: ", ";
        }

        &:last-child::after {
          content: "";
        }
      }
    }

    ul {
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: row;

      a {
        background: #ff1d63;
        padding: 0.75rem 1.5rem;
        color: white;
        font-size: 0.75rem;
        text-decoration: none;

        text-transform: uppercase;
      }
    }
  }
}
</style>
