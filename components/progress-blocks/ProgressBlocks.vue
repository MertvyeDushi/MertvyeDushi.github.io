<template>
  <div class="progress-blocks">
    <progress-block
      class="progress-blocks__item"
      :progress="completedProgress"
    >
      <template #counter>
        {{ completedCounter }} tasks
      </template>

      <template #label>
        Completed
      </template>
    </progress-block>

    <progress-block
      class="progress-blocks__item"
      :progress="todoProgress"
      color="mcgucket"
    >
      <template #counter>
        {{ todoCounter }} tasks
      </template>

      <template #label>
        To be finished
      </template>
    </progress-block>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressBlock from './ProgressBlock'

export default {
  name: 'ProgressBlocks',

  components: {
    ProgressBlock,
  },

  computed: {
    ...mapGetters('tasks', [
      'completedCounter',
      'todoCounter',
      'completedProgress',
      'todoProgress',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.progress-blocks {
  display: flex;

  &__item {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
</style>
