<template>
  <div class="progress-blocks">
    <progress-block
      class="progress-blocks__item"
      :progress="progress"
    >
      <template #counter>
        {{ completedCounter }} tasks
      </template>

      <template #label>
        Completed
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
      'progress',
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
