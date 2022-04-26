<template>
  <form
    class="c-form"
    :class="activeClass"
    @submit.prevent="submit"
  >
    <c-input
      ref="input"
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
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { nanoid } from 'nanoid'
import CInput from '@/components/common/CInput'

export default {
  name: 'CForm',

  components: {
    CInput,
  },

  data () {
    return {
      task: '',
      isActive: false,
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
        this.setActiveState()
      }
    },
  },

  mounted () {
    this.setActiveState()
  },

  methods: {
    ...mapMutations('form', [
      'clearEditableTaskId',
    ]),

    ...mapActions('tasks', [
      'editTask',
      'setNewTask',
    ]),

    submit () {
      const { isFormDisabled, editableTaskId } = this

      if (isFormDisabled) {
        return
      }

      if (editableTaskId) {
        this.edit()
      } else {
        this.add()
      }

      this.task = ''
    },

    setActiveState () {
      this.isActive = true

      const el = this.$refs.input.$el

      if (el) {
        el.focus()
      }
    },

    removeActiveState () {
      const { isActive, task } = this

      if (isActive && !task) {
        this.isActive = false
      }
    },

    edit () {
      this.editTask({
        id: this.editableTaskId,
        value: this.task,
      })

      this.clearEditableTaskId()
    },

    add () {
      this.setNewTask({
        id: nanoid(),
        value: this.task,
        done: false
      })
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
