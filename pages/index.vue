<script setup>
const projectsImport = import.meta.glob("@/public/content/projects/*.json");
const projectsArray = await Promise.all(
  Object.keys(projectsImport).map(async (projectImport) => {
    const projectObject = await projectImport[projectImport]();
    return projectObject;
  })
);

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
  <project-list :projects="projectsArray"></project-list>
</template>
