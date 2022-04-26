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

      <c-form class="index-page__form"></c-form>

      <template v-if="hasTasks">
        <task-list class="index-page__tasks"></task-list>

        <progress-blocks></progress-blocks>
      </template>

      <congration-box v-if="!hasTasks" class="index-page__congration"></congration-box>
    </c-surface>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CForm from '@/components/common/CForm'
import CImg from '@/components/common/CImg'
import CSurface from '@/components/common/CSurface'
import CTitle from '@/components/common/CTitle'

import CongrationBox from '@/components/congration-box/CongrationBox'
import ProgressBlocks from '@/components/progress-blocks/ProgressBlocks'
import TaskList from '@/components/tasks/TaskList'

export default {
  name: 'IndexPage',

  components: {
    CForm,
    CImg,
    CSurface,
    CTitle,
    CongrationBox,
    ProgressBlocks,
    TaskList,
  },

  computed: {
    ...mapGetters('tasks', [
      'hasTasks',
    ]),

    todoImageLink () {
      return require('@/assets/images/todo.svg')
    },
  },
  /**
   * Для инита состояния используем хук mounted, чтобы
   * не возникали ошибки гидрации.
   */
  mounted () {
    this.clientInit()
  },

  methods: {
    ...mapActions('tasks', [
      'clientInit',
    ])
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

  &__form {
    margin-bottom: 40px;
  }

  &__tasks {
    margin-bottom: 32px;
  }

  &__congration {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
