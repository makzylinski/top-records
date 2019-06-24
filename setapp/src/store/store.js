import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       records: [],
    },
    getters: {
        getData: state => {
            return state.records;
        },
    },
    mutations: {
        updateData: (state, payload) => {
            state.records.push(payload);
        },
    },
    actions: {
       fetchAlbums: ({commit}) => {
           axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
               .then(resp => {
                   const data = resp.data.feed.entry;
                   data.forEach(cur => {
                       const img = cur["im:image"][0].label;
                       const artist = cur.title.label;
                       //const recordObj = {name: artist, image: img};
                       commit('updateData', {img: img, name: artist});
                   })
               })
       }
   }
});