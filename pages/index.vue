<script setup>
const projectQuery = queryContent("projects");
const projectResults = await projectQuery.find({});

useHead({
  title: null,
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
});
</script>

<template>
  <project-list :projects="projectResults"></project-list>
</template>

<style lang="scss" scoped></style>
