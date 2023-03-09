<script setup>
const projectRoute = useRoute();
const projectSlug = projectRoute.params.project;
const projectFile = `projects/${projectSlug}.json`;

const projectQuery = queryContent("projects");
const projectResult = await projectQuery
  .where({ _file: projectFile })
  .findOne({});

useHead({
  title: projectResult.title,
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
});
</script>

<template>
  <h1>{{ projectResult.title }}</h1>
</template>

<style lang="scss" scoped></style>
