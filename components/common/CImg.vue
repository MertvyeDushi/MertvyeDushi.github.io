<template>
  <img v-bind="$attrs" class="c-img" loading="lazy">
</template>

<script>
export default {
  name: 'CImg',
}
</script>

<style lang="scss">
.c-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
