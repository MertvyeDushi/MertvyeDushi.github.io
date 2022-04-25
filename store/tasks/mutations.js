export default {
  addTask (state, data) {
    state.tasks.push(data)
  },

  editTask (state, { id, value }) {
    const item = state.tasks.find(item => item.id === id)

    item.value = value
  },

  deleteTask (state, id) {
    const index = state.tasks.findIndex(item => item.id === id)

    state.tasks.splice(index, 1)
  },

  setTaskState (state, { id, value }) {
    const item = state.tasks.find(item => item.id === id)

    item.done = value
  },
}
