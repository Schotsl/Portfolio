<script lang="ts" setup></script>

<template>
  <ul>
    <project-item></project-item>
  </ul>
</template>

<style lang="scss" scoped>
.other-contact {
  display: flex;
  flex-direction: column;

  .other-contact-faq,
  .other-contact-info {
    width: 100%;

    video {
      width: 100%;
    }

    &:last-of-type {
      margin: $vertical-divider 0 0;
    }
  }

  .other-contact-block {
    margin: 0 0 1rem;

    a {
      color: #ff8a5b;
      margin: 0.25rem 0 0;

      font-weight: 400;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    h3 {
      font-size: 1rem;
      font-weight: bolder;
    }
  }

  address {
    font-style: normal;
  }

  @include md {
    flex-direction: row;

    .other-contact-faq,
    .other-contact-info {
      width: 50%;

      &:first-of-type {
        margin: 0 $horizontal-divider 0 0;
      }

      &:last-of-type {
        margin: 0 0 0 $horizontal-divider;
      }
    }
  }
}
</style>
