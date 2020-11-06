import { commonService } from '@/services/ListooService.js'

export const namespaced = true

export const state = {
    recommandLists: null,
    list: null,
    hotTags: [{
        "id": 1,
        "type": 0,
        "name": "酷"
    },
    {
        "id": 2,
        "type": 0,
        "name": "久坐"
    }]
}

export const mutations = {
    SET_RECOMMANDLIST(state, recommandLists) {
        state.recommandLists = recommandLists
    },
    SET_LIST(state, list) {
        state.list = list
    },
    SET_HOT_TAGS(state, { lists }) {
        state.hotTags = lists
    },
    DELETE_HOT_TAGS(state, index) {
        state.hotTags.splice(index, 1);
    },

}

export const actions = {
    getRecommandLists({ commit }) {
        commonService.GetRecommandLists().then(response => commit('SET_RECOMMANDLIST', response))
    },
    getHotTags({ commit }, { count, page }) {
        return commonService.GetHotTags({ count, page }).then((response) => {
            commit('SET_HOT_TAGS', response.data.data)
        });
    },
    getList({ commit }, { id, filter }) {
        commonService.GetList({ id, filter }).then(response => commit('SET_LIST', response))
    },
    searchTags(text) {
        return commonService.SearchTags(text)
    }
}

export const getters = {

}
