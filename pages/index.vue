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
      content:
        "Discover Sjors van Holst's projects and delve into the stories behind them on this website. Explore the development stack, challenges, and triumphs, and join us on our journey as we make new friends and learn valuable lessons along the way.",
    },
  ],
});
</script>

<template>
  <project-list :projects="projectParsed"></project-list>
</template>
