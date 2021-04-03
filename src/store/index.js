import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    cursos: [],
    color: 'azul'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCursos: state => state.cursos
  }
})
