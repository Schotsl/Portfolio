<script lang="ts" setup></script>

<template>
  <li>
    <div class="image-container" role="button" aria-label="Play GIF">
      <img class="image-cover" src="/images/HvG.png" alt="Image description" />
      <img class="image-video" src="/videos/HvG.gif" alt="Image description" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
.image-container {
  width: 500px;
  position: relative;
}

.image-container .image-cover {
  display: block;
  width: 100%;
  height: auto;
}

.image-container:hover .image-video {
  display: block;
}

.image-video {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
