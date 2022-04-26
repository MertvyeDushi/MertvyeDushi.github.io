<template>
  <div class="progress-bar">
    <div
      class="progress-bar__hotline"
      :style="styles"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    styles () {
      const { progress } = this

      return { width: `${progress}%` }
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-bar {
  position: relative;
  width: 100%;
  height: 4px;

  border-radius: 8px;
  background-color: var(--color-pacifica);

  &__hotline {
    position: absolute;
    height: 4px;
    width: 0%;

    border-radius: 8px;
    background-color: var(--color-soos);
  }
}
</style>
