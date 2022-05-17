
import vuex from '../index.js'
const dictionary = {
  namespaced: true,
  state: {
    // this.$store.state.menu.active_path
    active_path: ''
  },
  mutations: {
    SET_active_path(state, obj) {
      state[obj.key] = obj.value;
    },
  },
  actions: {

  },


  // return this.$store.getters['menu/active_path']
  getters: {
    active_path(state) {
      return v;
    },
  }
}

export default dictionary