<template>
  <form
    class="c-form"
    :class="activeClass"
    @submit.prevent="submit"
  >
    <c-input
      v-model="task"
      class="c-form__input"
      placeholder="Add new todo..."
      autofocus
      @focus="setActiveState"
      @blur="removeActiveState"
    ></c-input>

    <button
      class="c-form__btn"
      type="submit"
      :disabled="isFormDisabled"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import CInput from '@/components/common/CInput'

export default {
  name: 'CForm',

  components: {
    CInput,
  },

  data () {
    return {
      task: '',
      isActive: true,
    }
  },

  computed: {
    ...mapState('form', [
      'editableTaskId',
    ]),

    ...mapGetters('tasks', [
      'getTaskById',
    ]),

    isFormDisabled () {
      const { task } = this

      return !task
    },

    activeClass () {
      const { isActive } = this

      return isActive ? 'c-form--active' : ''
    },

    editableTask () {
      const { editableTaskId } = this

      return this.getTaskById(editableTaskId)
    },
  },

  watch: {
    editableTaskId (value) {
      if (value) {
        this.task = this.editableTask.value
      }
    },
  },

  methods: {
    ...mapMutations('tasks', [
      'editTask',
    ]),

    submit () {
      const { isFormDisabled } = this

      if (isFormDisabled) {
        return
      }

      this.editTask({
        id: this.editableTaskId,
        value: this.task,
      })

      this.task = ''
    },

    setActiveState () {
      this.isActive = true
    },

    removeActiveState () {
      const { isActive, task } = this

      if (isActive && !task) {
        this.isActive = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.c-form {
  $this: &;

  display: flex;

  &--active {
    #{$this}__input {
      transform: translateX(0);
    }

    #{$this}__btn {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__input {
    width: 317px;
    margin-right: 16px;

    transform: translateX(38px);
    transition: transform .2s ease-in-out;
  }

  &__btn {
    padding: 12px;
    border-radius: 8px;
    background-color: var(--color-soos);
    color: var(--color-wendy);

    opacity: 0;
    transform: translateX(38px);
    transition: opacity .2s ease-in-out, transform .2s ease-in-out;
  }
}
</style>
