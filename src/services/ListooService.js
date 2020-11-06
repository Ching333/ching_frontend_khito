import axios from 'axios'

const apiClient = axios.create({
    // baseURL: 'http://192.168.32.84/FK/api',
    // baseURL: 'http://192.168.32.93/A/api',
    // baseURL: 'http://192.168.32.127/test',
    baseURL: 'http://localhost:57680/',

    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 1000
})
export default apiClient

export const commonService = {
    //navbar
    GetRecommandLists() {
        return apiClient.get(`/common/get_recommand_lists/`)
    },
    //navbar
    GetHotTags() {
        return apiClient.get(`/common/get_hot_tags/`)
    },
    //showPlacesInList
    //listPage
    GetList({ id, filter }) {
        return apiClient.post(`/common/get_list/${id}`, JSON.stringify({ filter }))
    },
    SearchTags(text) {
        return apiClient.get(`/common/search_tags/?text=${text}`)
    }
}

export const authService = {
    Register(credentials) {
        return apiClient.post('/auth/register/', JSON.stringify(credentials))
    },
    Login(credentials) {
        return apiClient.post(`/auth/login/`, JSON.stringify(credentials))
    },
    Logout() {
        return apiClient.post(`/auth/logout/`,JSON.stringify())
    },
}


export const userService = {

    GetUserLists(filter) {
        return apiClient.post(`/user/get_user_lists/`, JSON.stringify({ filter }))
    },
    CreateList({ name, description, coverImageURL, privacy, places }) {
        return apiClient.post(`/user/create_list/`, JSON.stringify({ name, description, coverImageURL, privacy, places }))
    },
    AddListPlaces({ list_id, places }) {
        return apiClient.post(`/user/list/${list_id}/add_place/`, JSON.stringify({ places }))
    },
    EditListName({ list_id, name }) {
        return apiClient.post(`/user/list/${list_id}/edit_name/`, JSON.stringify({ name }))
    },
    EditListDescription(list_id, { description }) {
        return apiClient.post(`/user/list/${list_id}/edit_description/`, JSON.stringify({ description }))
    },
    EditListPrivacy(list_id, { privacy }) {
        return apiClient.post(`/user/list/${list_id}/edit_privacy/`, JSON.stringify({ privacy }))
    },
    ModifyPlaceTag({ place_id, add, remove }) {
        return apiClient.post(`/user/modify_place_tag/`, JSON.stringify({ place_id, add, remove }))
    },
}

export const mapService = {
    //暫無
    GetMarksInArea({ from, to, filter }) {
        return apiClient.post(`/map/get_marks/`, JSON.stringify({ from, to, filter }))
    },
    //placePage
    GetPlaceInfo({ gmap_id }) {
        return apiClient.post(`/map/get_place_info/`, JSON.stringify({ gmap_id }))
    },
    //explorePage
    GetPlaceTag(gmap_id) {
        return apiClient.post(`/map/get_place_tag/`, JSON.stringify({ gmap_id }))
    },

}

