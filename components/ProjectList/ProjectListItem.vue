<script lang="ts" setup>
import { Project } from "../types.ts";

const video = ref();
const props = defineProps<{
  project: Project;
}>();

const onHover = () => {
  video.value.currentTime = 0;
};

const coverAlt = computed(() => `A preview of ${props.project.title}`);
const coverSource = computed(() =>
  props.project.thumbnail_cover.replace("/public", "")
);

const hoverSource = computed(() =>
  props.project.thumbnail_video.replace("/public", "")
);
</script>

<template>
  <li class="project-item">
    <a :href="`/${props.project.slug}`">
      <div
        class="project-item-container"
        role="button"
        aria-label="Play gif"
        @mouseover="onHover"
      >
        <img
          :src="coverSource"
          :alt="coverAlt"
          class="project-item-container-cover"
        />
        <video
          ref="video"
          class="project-item-container-hover"
          loop
          muted
          autoplay
        >
          <source :src="hoverSource" type="video/mp4" />
        </video>
      </div>

      <div class="project-item-title">
        <project-categories :categories="props.project.categories" />

        <h2 class="project-item-title-content">{{ props.project.title }}</h2>
      </div>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.project-item {
  margin: 0px;
  position: relative;

  .project-item-title {
    left: 1.5rem;
    bottom: 1.5rem;
    position: absolute;
    transition: all 0.3s ease-in-out;

    .project-item-title-content {
      color: white;
      font-size: 1.25rem;
      font-family: "Roboto Slab";
    }

    @include lg {
      bottom: 1.1rem;
    }
  }

  .project-item-container {
    transition: all 0.3s ease-in-out;

    &:before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      display: block;
      position: absolute;
      transition: opacity 0.2s ease-in-out;
      background: rgba(13, 12, 70, 0.85);
    }

    .project-item-container-cover,
    .project-item-container-hover {
      width: 100%;
      display: block;
    }

    .project-item-container-hover {
      display: none;
    }

    &:hover {
      .project-item-container-hover {
        display: block;
      }

      .project-item-container-cover {
        display: none;
      }
    }
  }

  &:hover {
    .project-item-title,
    .project-categories {
      opacity: 0;
    }

    .project-item-container {
      filter: brightness(1);
      transform: scale(1.05);
      box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, 0.25);

      &:before {
        opacity: 0;
      }
    }
  }
}
</style>
