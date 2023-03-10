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
      class="project-categories-category"
    >
      {{ category }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.project-categories {
  gap: 0.4rem;
  margin: 0px;
  display: flex;

  list-style: none;
  flex-direction: row;

  .project-categories-category {
    color: #ff1d63;
    margin: 0;

    font-size: 0.95rem;
    font-family: "Roboto Slab";

    &::after {
      content: ",";
    }

    &:last-child::after {
      content: "";
    }

    @include md {
      font-size: 0.85rem;
    }

    @include lg {
      font-size: 0.65rem;
    }
  }
}
</style>
