<template>
  <input
    v-bind="$attrs"
    class="c-input"
    :disabled="disabled"
    :value="value"
    v-on="{
      ...$listeners,
      input: event => onInput(event)
    }"
  >
</template>

<script>
export default {
  name: 'CInput',

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      required: true,
      validator: value => ['undefined', 'string', 'number'].includes(typeof value),
    },
  },

  computed: {
    disabled () {
      const { $attrs } = this

      return $attrs?.disabled === '' ? true : $attrs?.disabled
    },
  },

  methods: {
    onInput (event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.c-input {
  width: 100%;
  padding: 11px;

  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-dipper);

  border: 1px solid var(--color-stan);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-mabel);
  }
}
</style>
