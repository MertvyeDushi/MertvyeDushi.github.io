export default {
  /**
   * Инициализация Стора при запуске приложения.
   */
  clientInit ({ commit }) {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if (tasks) {
      commit('setTasks', tasks)
    }
  },

  updateOrder ({ commit, dispatch }, data) {
    commit('setTasks', data)
    dispatch('updateLocalState')
  },

  setNewTask ({ commit, dispatch }, data) {
    commit('addTask', data)
    dispatch('updateLocalState')
  },

  editTask ({ commit, dispatch }, data) {
    commit('editTask', data)
    dispatch('updateLocalState')
  },

  removeTask ({ commit, dispatch }, data) {
    commit('deleteTask', data)
    dispatch('updateLocalState')
  },

  updateTaskState ({ commit, dispatch }, data) {
    commit('setTaskState', data)
    dispatch('updateLocalState')
  },

  updateLocalState ({ state }) {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
}
