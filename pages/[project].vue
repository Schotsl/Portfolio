<script setup>
const projectRoute = useRoute();
const projectSlug = projectRoute.params.project;
const projectFile = `projects/${projectSlug}.json`;

const projectQuery = queryContent("projects");
const projectResult = await projectQuery
  .where({ _file: projectFile })
  .findOne({});

const projectVideo = computed(() => {
  return projectResult.video.replace("/public", "");
});

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
  <section>
    <video class="project-video" autoplay loop muted controls>
      <source :src="projectVideo" type="video/mp4" />
    </video>

    <h1>{{ projectResult.title }}</h1>
  </section>
</template>

<style lang="scss" scoped>
.project-video {
  width: 100%;
  height: 100%;
}
</style>
