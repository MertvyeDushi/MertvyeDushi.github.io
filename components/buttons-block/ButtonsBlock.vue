<template>
  <div class="buttons-block">
    <li
      v-for="item in buttons"
      :key="item.key"
    >
      <c-button
        v-if="getVisibility(item.key)"
        class="buttons-block__item"
        :active="item.state"
        :type="item.type"
        @click="onClick(item.key)"
      >
        {{ item.text }}
      </c-button>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CButton from '@/components/common/CButton'

export default {
  name: 'ButtonsBlock',

  components: {
    CButton,
  },

  data () {
    return {
      buttons: [
        {
          key: 'check-all',
          type: 'action',
          text: 'Check all',
        },
        {
          key: 'all',
          text: 'All',
          state: true,
        },
        {
          key: 'active',
          text: 'Active',
          state: false,
        },
        {
          key: 'complited',
          text: 'Complited',
          state: false,
        },
        {
          key: 'clear-complited',
          type: 'action',
          text: 'Clear complited',
        },
      ],
    }
  },

  computed: {
    ...mapGetters('tasks', [
      'todoProgress',
    ]),

    hasCompletedTodo () {
      const { todoProgress } = this

      return todoProgress < 100 && todoProgress > 0
    },

    allCompleted () {
      const { todoProgress } = this

      return todoProgress === 0
    },
  },

  methods: {
    getVisibility (key) {
      const {
        buttons,
        hasCompletedTodo,
        allCompleted,
      } = this

      if (hasCompletedTodo) {
        return true
      }

      if (!allCompleted) {
        return key === buttons[0].key || key === buttons[1].key
      }

      if (allCompleted) {
        return key === buttons[1].key || key === buttons[4].key
      }
    },

    onClick (key) {
      const { buttons } = this

      switch (key) {
        case buttons[0].key:
          break;
        case buttons[1].key:
          break;
        case buttons[2].key:
          break;
        case buttons[3].key:
          break;
        case buttons[4].key:
          break;
        default:
          break;
      }

      this.buttons.forEach(item => {
        if (key !== buttons[0].key && key !== buttons[4].key) {
          item.state = item.key === key
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.buttons-block {
  display: flex;
  justify-content: center;

  &__item {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
