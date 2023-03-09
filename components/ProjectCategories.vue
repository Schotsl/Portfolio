<script lang="ts" setup>
const props = defineProps<{
  categories: string[];
}>();
</script>

<template>
  <ul class="project-categories">
    <li
      v-for="category in props.categories"
      :key="category"
      :class="['project-categories-category', category]"
    >
      {{ category }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.project-categories {
  gap: 0.5rem;
  top: 1.35rem;
  left: 1.5rem;
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  transition: opacity 0.2s ease-in-out;

  z-index: 1;
  list-style: none;
  flex-direction: row;

  .project-categories-category {
    color: white;
    border: 1px solid #fff;
    padding: 0.25rem 0.5rem;
    font-size: 0.65rem;
    font-weight: 500;
    border-radius: 1rem;
    background-color: #666699;
  }
}
</style>
