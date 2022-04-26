export default {
  getTaskById (state) {
    return (id) => state.tasks.find(item => item.id === id)
  },

  tasks (state) {
    const { tasks, activeType } = state

    return tasks.filter(item => {
      if (activeType === 'all') {
        return true
      } else if (activeType === 'complited') {
        return item.done
      } else {
        return !item.done
      }
    })
  },

  hasTasks (state) {
    return state.tasks?.length > 0 ?? false
  },

  completedCounter (state) {
    return state.tasks.filter(item => item.done).length
  },

  todoCounter (state) {
    return state.tasks.filter(item => !item.done).length
  },

  completedProgress (state, getters) {
    const completed = getters.completedCounter
    const all = state.tasks.length

    return completed / (all / 100)
  },

  todoProgress (state, getters) {
    const completed = getters.completedProgress

    return 100 - completed
  },
}
