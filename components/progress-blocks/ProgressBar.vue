<template>
  <div class="progress-bar" :class="classes">
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
    color: {
      type: String,
      default: 'soos'
    },
  },

  computed: {
    styles () {
      const { progress } = this

      return { width: `${progress}%` }
    },

    classes () {
      const { color } = this

      return [
        `progress-bar--color-${color}`
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.progress-bar {
  $this: &;

  position: relative;
  width: 100%;
  height: 4px;

  border-radius: 8px;
  background-color: var(--color-pacifica);

  &--color-soos {
    #{$this}__hotline {
      background-color: var(--color-soos);
    }
  }

  &--color-mcgucket {
    #{$this}__hotline {
      background-color: var(--color-mcgucket);
    }
  }

  &__hotline {
    position: absolute;
    height: 4px;
    border-radius: 8px;
  }
}
</style>
