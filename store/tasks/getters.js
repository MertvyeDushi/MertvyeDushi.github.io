export default {
  getTaskById (state) {
    return (id) => state.tasks.find(item => item.id === id)
  },

  hasTasks (state) {
    return state.tasks.length > 0
  },
}
