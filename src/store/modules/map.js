import { mapService } from '@/services/ListooService.js'

export const namespaced = true

export const state = {
    addMarksID: [],
    removeMarksID: [],
    marks: [
        {
            gmap_id: "ChIJSS8sRXmqQjQRB_U7jlAHjZ4",
            location: {
                lon: 121.57711029052734,
                lat: 24.986213616760374,
            },
        },
        {
            gmap_id: "ChIJ-ffZ_VGpQjQRcaEDDIjDQHo",
            location: {
                lon: 121.52458190917969,
                lat: 25.072538763707744,
            },
        },
        {
            gmap_id: "ChIJTamiuZ2pQjQRsmnfkkID6UM",
            location: {
                lon: 121.52183532714844,
                lat: 25.03459428825369,
            },
        },
    ],
    placeInfo: {
        name: "string",
        phone: "string",
        address: "string",
        type: "string",
        photo: "https://imgs.gvm.com.tw/upload/gallery/20190212/55927_01.jpg"
    },
}

export const mutations = {
    SET_MARKS(state, data) {
        state.marks = data
    },
    SET_PLACEINFO(state, data) {
        console.log(data)
        state.placeInfo = data
    },
    SET_CHANGES(state, data) {
        let set = new Set(state.marks.map(m => m.gmap_id))
        let newSet = new Set(data.map(m => m.gmap_id))
        const add = newSet.difference(set)
        state.addMarksID = [...add]
        const remove = set.difference(newSet)
        state.removeMarksID = [...remove]
    }
}

export const actions = {
    getMarksInArea({ commit }, { from, to, filter }) {
        console.log({ from, to, filter })
        return mapService.GetMarksInArea({ from, to, filter }).then((res) => {
            commit('SET_CHANGES', res.data.data)
            commit('SET_MARKS', res.data.data)
            return res
        })
    },
    getPlaceInfo({ commit }, { gmap_id }) {
        return mapService.GetPlaceInfo({ gmap_id }).then((res) => {
            console.log(res.data.data)
            commit('SET_PLACEINFO', res.data.data)
        })
    },
    getPlaceTag(gmap_id) {
        return mapService.GetPlaceTag(gmap_id)
    },
}

export const getters = {

}
