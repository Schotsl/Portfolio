<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();

const router = useRouter();
const back = () => {
  window.history.back();
};

const isIndex = router.currentRoute.value.path === "/";
</script>

<template>
  <header>
    <h1 class="project-title">
      <template v-if="!isIndex">
        <button class="project-button" @click="back">
          <i class="project-icon fa fa-arrow-left"></i>
        </button>
      </template>

      {{ props.title }}
    </h1>
  </header>
</template>

<style lang="scss" scoped>
.project-title {
  color: #c9d4df;
  display: flex;
  padding: 1.75rem 1.5rem 1.75rem;
  background: #0d0c46;

  font-size: 1.25rem;
  font-family: "Roboto Slab";
  align-items: center;

  @include md {
    padding: 1.75rem 10vw;
    font-size: 1.5rem;
  }

  .project-button {
    color: #c9d4df;
    border: none;
    cursor: pointer;
    margin: 0 1rem 0 0;
    padding: 0;
    background: none;

    .project-icon {
      font-size: 1rem;
    }
  }
}
</style>
