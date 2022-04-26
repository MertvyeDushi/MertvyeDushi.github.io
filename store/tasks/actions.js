export default {
  /**
   * Инициализация Стора при запуске приложения.
   */
  clientInit ({ commit }) {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    commit('setTasks', tasks)
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
  /**
   * Берет актуальное состояние из Стора и обновляет его в localStorage.
   * С REST Api так сделать не получилось бы: нужно было бы для каждого
   * метода (удаление, редактирование, добавление, получение) писать запрос.
   * Считаю такой подход более эффективным в данном контексте.
   */
  updateLocalState ({ state }) {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
}
