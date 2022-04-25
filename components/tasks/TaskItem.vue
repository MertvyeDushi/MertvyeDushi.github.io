<template>
  <li class="task-item" :class="isDoneClass">
    <c-checkbox
      class="task-item__checkbox"
      :value="task.done"
      @change="changeHandler"
    ></c-checkbox>

    <p class="task-item__value">{{ task.value }}</p>

    <div class="task-item__buttons-box">
      <button
        class="task-item__button"
        @click="editHandler"
      >
        <c-img
          class="task-item__icon task-item__icon--edit"
          :src="require('@/assets/icons/edit.svg')"
        ></c-img>
      </button>

      <button
        class="task-item__button"
        @click="deleteHandler"
      >
        <c-img
          class="task-item__icon task-item__icon--delete"
          :src="require('@/assets/icons/delete.svg')"
        ></c-img>
      </button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
import CCheckbox from '@/components/common/CCheckbox'
import CImg from '@/components/common/CImg'

export default {
  name: 'TaskItem',

  components: {
    CCheckbox,
    CImg,
  },

  props: {
    task: {
      type: Object,
      required: true,
    }
  },

  computed: {
    isDoneClass () {
      const { done } = this.task

      return [
        done && 'task-item--done'
      ]
    },
  },

  methods: {
    ...mapMutations('tasks', [
      'deleteTask',
      'editTask',
      'setTaskState',
    ]),

    ...mapMutations('form', [
      'setEditableTask',
    ]),

    changeHandler (value) {
      this.setTaskState({
        id: this.task.id,
        value,
      })
    },

    editHandler () {
      this.setEditableTask(this.task.id)
    },

    deleteHandler () {
      this.deleteTask(this.task.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.task-item {
  $this: &;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 16px;

  &--done {
    #{$this}__value {
      opacity: .5;
    }
  }

  &__checkbox {
    margin-right: 10px;
  }

  &__value {
    flex-grow: 1;
    transition: opacity .2s ease-in-out;
  }

  &__buttons-box {
    display: flex;
  }

  &__button {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  &__button,
  &__icon {
    width: 16px;
    height: 16px;
  }
}
</style>
