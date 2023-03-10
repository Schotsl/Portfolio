<script lang="ts" setup>
const projectQuery = queryContent("projects");
const projectResults = await projectQuery.find({});
const projectParsed = projectResults.map((project) => {
  const slugPath = project._path;
  const slugIndex = slugPath.lastIndexOf("/") + 1;
  const slugResult = slugPath.substring(slugIndex);

  return { ...project, slug: slugResult };
});

const projectLinks = projectParsed.map((project) => {
  return {
    rel: "preload",
    as: "image",
    href: project.gif.replace("/public", ""),
  };
});

useHead({
  title: null,
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
  link: projectLinks,
});
</script>

<template>
  <project-list :projects="projectParsed"></project-list>
</template>
