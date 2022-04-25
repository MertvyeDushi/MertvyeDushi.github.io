<template>
  <div class="congration-box">
    <c-img
      class="congration-box__icon"
      :src="require('@/assets/icons/congration.svg')"
    ></c-img>

    <p class="congration-box__text">
      Congrat, you have no more tasks to do
    </p>
  </div>
</template>

<script>
import CImg from '@/components/common/CImg'

export default {
  name: 'CongrationBox',

  components: {
    CImg,
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
