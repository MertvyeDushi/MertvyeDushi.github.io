<template>
  <li class="task-item">
    <c-checkbox
      class="task-item__checkbox"
      :done="task.done"
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
      default: () => ({
        value: 'do the exercises',
        done: false,
      })
    }
  },

  methods: {
    editHandler () {
      return false
    },

    deleteHandler () {
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.task-item {
  display: flex;
  width: 100%;
  padding: 0 16px;

  &__value {
    flex-grow: 1;
  }

  &__buttons-box {
    display: flex;
  }

  &__button {
    cursor: pointer;

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
