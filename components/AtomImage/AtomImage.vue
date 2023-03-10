<script lang="ts" setup>
import { Image } from "../../types";

const props = defineProps<{
  image: Image;
}>();

const source = computed(() => {
  return props.image.src.startsWith("/public")
    ? props.image.src.replace("/public", "")
    : props.image.src;
});
</script>

<template>
  <nuxt-img
    :src="source"
    :alt="props.image.alt"
    :width="props.image.width"
    :height="props.image.height"
  />
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>
