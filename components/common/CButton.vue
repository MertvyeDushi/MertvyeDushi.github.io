<template>
  <button
    v-bind="$attrs"
    class="c-button"
    :class="classes"
    type="button"
    v-on="{
      ...$listeners,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CButton',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes () {
      const { active } = this

      return [
        active && 'c-button--active'
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.c-button {
  $this: &;

  padding: 8px 12px;

  font-size: 13px;
  font-weight: 600;
  line-height: 16px;

  border-radius: 8px;

  &--active {
    color: var(--color-wendy);
    background-color: var(--color-soos);
  }
}
</style>
