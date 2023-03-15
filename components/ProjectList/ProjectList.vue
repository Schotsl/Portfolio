<script lang="ts" setup>
import { Project } from "../types.ts";

const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="project-list">
    <project-list-item
      v-for="project in props.projects"
      :key="project.title"
      :project="project"
    ></project-list-item>
  </ul>
</template>

<style lang="scss" scoped>
.project-list {
  gap: 1.5rem;
  margin: 0;
  display: grid;
  padding: 1.5rem 1.5rem;

  list-style: none;
  flex-direction: row;

  grid-template-columns: repeat(1, 1fr);

  @include md {
    padding: 3.25rem 10vw;
  }

  @include lg {
    grid-template-columns: repeat(2, 1fr);
  }

  @include xxl {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
