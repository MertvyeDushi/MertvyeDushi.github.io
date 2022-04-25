<template>
  <div
    class="c-checkbox"
    :class="classes"
  >
    <input
      v-bind="$attrs"
      type="checkbox"
      class="c-checkbox__input"
      :value="value"
      :checked="value"
      v-on="{
        ...$listeners,
      }"
    >

    <button
      type="button"
      class="c-checkbox__icon-box"
      @click="onChange"
    >
      <c-img
        class="c-checkbox__icon"
        :src="require('@/assets/icons/check.svg')"
      ></c-img>
    </button>
  </div>
</template>

<script>
import CImg from '@/components/common/CImg'

export default {
  name: 'CCheckbox',

  components: {
    CImg,
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: Boolean,
      required: false,
    },
  },

  computed: {
    classes () {
      const { value } = this

      return [
        value && 'c-checkbox--active',
      ]
    },
  },

  methods: {
    onChange () {
      const { value } = this

      this.$emit('change', !value)
    },
  },
}
</script>

<style lang="scss" scoped>
.c-checkbox {
  $this: &;

  position: relative;

  &--active {
    #{$this}__icon-box {
      border: none;
      background-color: var(--color-soos);
    }
  }

  &__input {
    @include visually-hidden()
  }

  &__icon-box {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;

    border-radius: 2px;
    border: 1px solid var(--color-stan);
    transition: background-color .2s ease-in-out;
  }

  &__icon {
    width: 12px;
    height: 9px;
  }
}
</style>
