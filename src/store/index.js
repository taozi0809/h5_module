import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import state from './state'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState()],//localStorage
  // plugins: [createPersistedState({	//sessionStorage
  //   storage: window.sessionStorage
  // })]
})
