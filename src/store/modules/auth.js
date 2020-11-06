import { authService } from '@/services/ListooService.js'
import apiClient from '@/services/ListooService.js'

export const namespaced = true

export const state = {
  user: null
}

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    apiClient.defaults.headers.common['user_id'] = userData.user_id
  },
  CLEAR_USER_DATA() {
    localStorage.removeItem('user')
    location.reload()
  }
}

export const actions = {
  register({ commit }, credentials) {
    authService.Register(credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  login({ commit }, credentials) {
    authService.Login(credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  logout({ commit }) {
    authService.Logout().then(({data}) => {
      console.log('這是response'+JSON.stringify(data));
      JSON.parse(data);
      commit('CLEAR_USER_DATA')
    })
  },
}

export const getters = {
  loggedIn(state) {
    return !!state.user
  }
}
