export default {
  addTask (state, data) {
    state.tasks.unshift(data)
  },

  checkAll (state) {
    state.tasks.forEach(item => { item.done = true })
  },

  clearComplited (state) {
    state.tasks = state.tasks.filter(item => !item.done)
  },

  deleteTask (state, id) {
    const index = state.tasks.findIndex(item => item.id === id)

    state.tasks.splice(index, 1)
  },

  editTask (state, { id, value }) {
    const item = state.tasks.find(item => item.id === id)

    item.value = value
  },

  setActiveType (state, key) {
    state.activeType = key
  },

  setTasks (state, data) {
    state.tasks = data
  },

  setTaskState (state, { id, value }) {
    const item = state.tasks.find(item => item.id === id)

    item.done = value
  },
}
