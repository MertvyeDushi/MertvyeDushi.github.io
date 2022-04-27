<template>
  <component :is="component" class="c-title">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CTitle',

  props: {
    level: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    component () {
      const { level } = this

      return `h${level}`
    },
  },
}
</script>

<style lang="scss">
.c-title {
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
}
</style>
