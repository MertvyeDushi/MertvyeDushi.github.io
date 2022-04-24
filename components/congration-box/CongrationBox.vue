<template>
  <div class="congration-box">
    <congration-icon class="congration-box__icon"></congration-icon>

    <p class="congration-box__text">
      Congrat, you have no more tasks to do
    </p>
  </div>
</template>

<script>
import CongrationIcon from '@/components/icons/CongrationIcon'

export default {
  name: 'CongrationBox',

  components: {
    CongrationIcon,
  },
}
</script>

<style lang="scss" scoped>
.congration-box {
  display: flex;
  align-items: center;
  color: var(--color-mabel);

  &__icon {
    width: 18px;
    height: 18px;

    margin-right: 11px;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }
}
</style>
