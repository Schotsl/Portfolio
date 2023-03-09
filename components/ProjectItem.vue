<script lang="ts" setup>
import { Project } from "../types.ts";

const props = defineProps<{
  project: Project;
}>();

const source = ref(props.project.cover.replace("/public", ""));

const onHover = () => {
  source.value = props.project.gif.replace("/public", "");
};

const onLeave = () => {
  source.value = props.project.cover.replace("/public", "");
};
</script>

<template>
  <li class="project-item" @mouseover="onHover" @mouseleave="onLeave">
    <project-categories :categories="project.categories"></project-categories>

    <div class="project-item-container" role="button" aria-label="Play gif">
      <img
        class="project-item-container-cover"
        alt="Image description"
        :src="source"
      />
    </div>

    <h2 class="project-item-title">{{ props.project.title }}</h2>
  </li>
</template>

<style lang="scss" scoped>
.project-item {
  width: 37.5vw;
  margin: 0px;
  position: relative;

  .project-item-title {
    left: 1.5rem;
    color: white;
    bottom: 1rem;
    position: absolute;
    transition: all 0.3s ease-in-out;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .project-item-container {
    width: 100%;
    position: relative;
    transition: all 0.3s ease-in-out;
    filter: brightness(0.6);

    &:before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      display: block;
      position: absolute;
      transition: opacity 0.3s ease-in-out;
      background: linear-gradient(
        180deg,
        rgba(102, 102, 153, 0) 35%,
        rgba(102, 102, 153, 0.65) 100%
      );
    }

    .project-item-container-cover {
      width: 100%;
      height: auto;
      display: block;
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
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);

      &:before {
        opacity: 0;
      }
    }
  }
}
</style>
