<script lang="ts" setup>
import { Project } from "../types.ts";

const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="project-list">
    <project-item
      v-for="project in props.projects"
      :key="project.title"
      :project="project"
    ></project-item>
  </ul>
</template>

<style lang="scss" scoped>
.project-list {
  gap: 1.5rem;
  width: 80vw;
  margin: 0;
  display: grid;
  padding: 10vw 0;

  list-style: none;
  flex-direction: row;

  grid-template-columns: repeat(1, 1fr);

  @include lg {
    grid-template-columns: repeat(2, 1fr);
  }

  @include xxl {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
