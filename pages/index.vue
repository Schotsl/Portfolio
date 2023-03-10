<script setup>
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
  <section>
    <h1 class="project-title">Sjors van Holst</h1>
    <project-list :projects="projectParsed"></project-list>
  </section>
</template>

<style lang="scss" scoped>
.project-title {
  color: #c9d4df;
  padding: 1.75rem 1.5rem 1.75rem;
  background: #0d0c46;

  font-size: 2rem;
  font-family: "Roboto Slab";

  @include md {
    padding: 1.75rem 10vw;
  }
}
</style>
