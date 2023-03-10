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
    <a :href="`/${props.project.slug}`">
      <div class="project-item-container" role="button" aria-label="Play gif">
        <img
          class="project-item-container-cover"
          alt="Image description"
          :src="source"
        />
      </div>

      <div class="project-item-title">
        <h2 class="project-item-title-content">{{ props.project.title }}</h2>

        <ul class="project-item-title-categories">
          <li
            v-for="category in props.project.categories"
            :key="category"
            class="project-categories-category"
          >
            {{ category }}
          </li>
        </ul>
      </div>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.project-item {
  width: 37.5vw;
  margin: 0px;
  position: relative;

  .project-item-title {
    left: 1.5rem;
    bottom: 1rem;
    position: absolute;
    transition: all 0.3s ease-in-out;

    .project-item-title-content {
      color: white;
      font-size: 1.5rem;
      font-family: "Roboto Slab";
    }

    .project-item-title-categories {
      gap: 0.35rem;
      margin: 0;
      display: flex;

      list-style: none;
      flex-direction: row;

      .project-categories-category {
        color: #ff1d63;
        font-size: 0.65rem;
        font-family: "Roboto Slab";

        &::after {
          content: ",";
        }

        &:last-child::after {
          content: "";
        }
      }
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

    .project-item-container-cover {
      width: 100%;
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
      box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, 0.25);

      &:before {
        opacity: 0;
      }
    }
  }
}
</style>
