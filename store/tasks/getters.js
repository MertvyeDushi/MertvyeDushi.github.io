export default {
  getTaskById (state) {
    return (id) => state.tasks.find(item => item.id === id)
  },

  hasTasks (state) {
    return state.tasks.length > 0
  },

  completedCounter (state) {
    return state.tasks.filter(item => item.done).length
  },

  progress (state, getters) {
    const completed = getters.completedCounter
    const all = state.tasks.length

    return completed / (all / 100)
  },
}
