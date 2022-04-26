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
    type: {
      type: String,
      default: 'filter',
      validator: value => ['filter', 'action', 'undefined'].includes(value)
    },
  },

  computed: {
    classes () {
      const { active, type } = this

      return [
        `c-button--type-${type}`,
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
  transition: color .1s ease-in, background-color .1s ease-in;

  &--type-action {
    &:hover {
      color: var(--color-mabel);
    }
  }

  &--type-filter#{$this}--active {
    color: var(--color-wendy);
    background-color: var(--color-soos);
  }
}
</style>
