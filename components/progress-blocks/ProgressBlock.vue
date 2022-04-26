<template>
  <div class="progress-block">
    <p class="progress-block__counter">
      <slot name="counter"></slot>
    </p>

    <c-title
      class="progress-block__label"
      :level="3"
    >
      <slot name="label"></slot>
    </c-title>

    <progress-bar :progress="progress"></progress-bar>
  </div>
</template>

<script>
import CTitle from '@/components/common/CTitle'
import ProgressBar from '@/components/progress-blocks/ProgressBar'

export default {
  name: 'ProgressBloсk',

  components: {
    CTitle,
    ProgressBar,
  },

  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-block {
  width: 190px;
  padding: 16px;

  border-radius: 8px;
  background-color: var(--color-manly-dan);

  &__counter {
    margin-bottom: 4px;

    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: var(--color-dipper);
    // Интересно, почему оттенок цвета дизайнером
    // в макете задан через прозрачность?
    opacity: .5;
  }

  &__label {
    margin-bottom: 12px;

    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  }
}
</style>
