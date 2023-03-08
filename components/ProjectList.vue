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
  gap: 2.5vw;
  width: 80vw;
  margin: 0;
  padding: 10vw 0;
  display: flex;
  list-style: none;
  flex-direction: row;
}
</style>
