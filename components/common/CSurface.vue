<template>
  <div class="c-surface">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSurface',
}
</script>

<style lang="scss" scoped>
  .c-surface {
    width: 730px;
    height: 719px;
    padding: 32px;
    border-radius: 24px;
    background-color: var(--color-wendy);
  }
</style>
