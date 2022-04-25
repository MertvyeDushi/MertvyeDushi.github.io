<template>
  <ul class="task-list">
    <task-item
      v-for="(item, index) in tasks"
      :key="index"
      v-model="item.done"
      :task="item"
      class="task-list__item"
    ></task-item>
  </ul>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',

  components: {
    TaskItem,
  },

  data () {
    return {
      tasks: [
        {
          value: 'do the exercises 1',
          done: false,
        },
        {
          value: 'do the exercises 2',
          done: false,
        },
        {
          value: 'do the exercises 3',
          done: false,
        },
        {
          value: 'do the exercises 4',
          done: false,
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.task-list {
  width: 442px;
  height: 85px;

  overflow-y: auto;

  &__item {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
