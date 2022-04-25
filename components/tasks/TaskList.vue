<template>
  <ul class="task-list">
    <task-item
      v-for="(item, index) in 5"
      :key="index"
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
