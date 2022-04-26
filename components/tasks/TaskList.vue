<template>
  <ul class="task-list">
    <task-item
      v-for="item in tasks"
      :key="item.id"
      :task="item"
      class="task-list__item"
    ></task-item>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',

  components: {
    TaskItem,
  },

  computed: {
    ...mapState('tasks', [
      'tasks',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.task-list {
  width: 432px;
  max-height: 85px;
  overflow-y: auto;

  &__item {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
