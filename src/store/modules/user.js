import { userService } from "@/services/ListooService.js"

export const namespaced = true


export const state = {
    userLists: null,
}
export const mutations = {
    SET_USERLISTS(state, userLists) {
        state.userLists = userLists
    },
    ADD_LIST_TO_USERLISTS(state, userList) {
        state.userLists.push(userList)
    },
    ADD_PLACES_TO_LIST(state, { list_id, places }) {
        state.userLists.find(userList => userList.list_id == list_id).places.push(places)
    },
    UPDATE_NAME_FROM_LIST(state, { list_id, name }) {
        state.userLists.find(userList => userList.list_id == list_id).name = name
    },
    UPDATE_DESCRIPTION_FROM_LIST(state, { list_id, description }) {
        state.userLists.find(userList => userList.list_id == list_id).description = description
    },
    UPDATE_PRIVACY_FROM_LIST(state, { list_id, privacy }) {
        state.userLists.find(userList => userList.list_id == list_id).privacy = privacy
    }
}

export const actions = {
    getUserLists({ commit }, filter) {
        userService.GetUserLists({ filter }).then(response => commit('SET_USERLISTS', response))
    },
    createList({ commit }, list) {
        userService.CreateList(list).then(() => commit('ADD_USERLIST', list))
    },
    addListPlaces({ commit }, { list_id, places }) {
        userService.AddListPlaces({ list_id, places }).then(() => commit('ADD_PLACES_TO_LIST', places))
    },
    editListName({ commit }, { list_id, name }) {
        userService.EditListName({ list_id, name }).then(() => commit('UPDATE_NAME_FROM_LIST'), { list_id, name })
    },
    editListDescription({ commit }, { list_id, description }) {
        userService.EditListDescription({ list_id, description }).then(() => commit('UPDATE_DESCRIPTION_FROM_LIST'), { list_id, description })
    },
    editListPrivacy({ commit }, { list_id, privacy }) {
        userService.EditListPrivacy({ list_id, privacy }).then(() => commit('UPDATE_PRIVACY_FROM_LIST'), { list_id, privacy })
    },
    modifyPlaceTag({ place_id, add, remove }) {
        userService.ModifyPlaceTag({ place_id, add, remove })
    },
    // 缺少GetlistTag API 
}