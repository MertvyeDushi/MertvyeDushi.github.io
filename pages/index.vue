<template>
  <div class="index-page">
    <c-surface class="index-page__content">
      <c-img
        class="index-page__image"
        :src="todoImageLink"
      ></c-img>

      <c-title class="index-page__title">
        Today I need to
      </c-title>

      <c-input
        v-model="taskTitle"
        class="index-page__input"
        placeholder="Add new todo..."
        autofocus
        @input="onInput"
      ></c-input>

      <congration-box class="index-page__congration"></congration-box>
    </c-surface>
  </div>
</template>

<script>
import CImg from '@/components/common/CImg'
import CInput from '@/components/common/CInput'
import CSurface from '@/components/common/CSurface'
import CTitle from '@/components/common/CTitle'
import CongrationBox from '@/components/congration-box/CongrationBox'

export default {
  name: 'IndexPage',

  components: {
    CImg,
    CInput,
    CSurface,
    CTitle,
    CongrationBox,
  },

  data () {
    return {
      taskTitle: '',
    }
  },

  computed: {
    todoImageLink () {
      return require('@/assets/images/todo.svg')
    },
  },

  methods: {
    onInput (value) {
      console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  &__content {
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__image {
    width: 180px;
    height: 180px;

    margin-bottom: 48px;
  }

  &__title {
    margin-bottom: 52px;

    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }

  &__input {
    width: 317px;
  }

  &__congration {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
