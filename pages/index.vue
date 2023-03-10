<script lang="ts" setup>
const projectQuery = queryContent("projects");
const projectResults = await projectQuery.find({});
const projectParsed = projectResults.map((project) => {
  const slugPath = project._path;
  const slugIndex = slugPath.lastIndexOf("/") + 1;
  const slugResult = slugPath.substring(slugIndex);

  return { ...project, slug: slugResult };
});

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
  <project-list :projects="projectParsed"></project-list>
</template>
