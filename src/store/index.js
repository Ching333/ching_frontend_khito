import Vue from 'vue'
import Vuex from 'vuex'


import * as auth from '@/store/modules/auth.js'
import * as common from '@/store/modules/common.js'
import * as map from '@/store/modules/map.js'
import * as user from '@/store/modules/user.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth,
    common,
    map,
    user
  },
  state: {
    selectTags: [],

  },
  mutations: {
    ADD_SELECTTAG(state, tag) {
      state.selectTags.push(tag)
    },
    DELETE_SELECTTAG(state, index) {
      state.selectTags.splice(index, 1);
    }
  },
  actions: {

  }
})
