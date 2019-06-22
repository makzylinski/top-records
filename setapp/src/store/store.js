import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       records: {}
    },
    getters: {
        getData: state => {
            return state.records;
        }
    },
    mutations: {
        updateData: (state, payload) => {
            state.records = payload
        }
    },
    actions: {
       fetchAlbums: ({commit}) => {
           axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
               .then(resp => {
                   const data = resp.data.feed.entry[20];
                   //console.log(resp.data.feed.entry[0].title.label); // artist & album
                   //console.log(data["im:image"][0].label) // record image
                   const recordArr = [];
                   data.forEach(cur => {
                       recordArr.push({name: cur.title.label, img: cur["im:image"][0].label})
                   });

                   commit('updateData', recordArr);
               })
               .catch(error => console.log(error));

       }
    }
});