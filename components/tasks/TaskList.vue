<template>
  <ul class="task-list">
    <draggable
      v-model="taskList"
      handle=".task-item__handler"
    >
      <task-item
        v-for="item in taskList"
        :key="item.id"
        :task="item"
        class="task-list__item"
      ></task-item>
    </draggable>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',

  components: {
    draggable,
    TaskItem,
  },

  computed: {
    ...mapGetters('tasks', [
      'tasks',
    ]),
    /**
     * @read https://github.com/SortableJS/Vue.Draggable
     */
    taskList: {
      get () {
        return this.tasks
      },
      set (tasks) {
        this.updateOrder(tasks)
      }
    },
  },

  methods: {
    ...mapActions('tasks', [
      'updateOrder',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.task-list {
  width: 432px;
  height: 85px;
  overflow-y: auto;

  &__item {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
