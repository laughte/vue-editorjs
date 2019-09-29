import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {initData:{
    "time": 1552744582955,
    "blocks": [
        {
            "type": "image",
            "data": {
                "url": "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
            }
        }
    ],
    "version": "2.11.10"}},
  mutations: {
    changeData(state,e){
      state.initData = e
    }
  },
  actions: {}
});
