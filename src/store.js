import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
// import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: null
  },

  getters: {
    // getData: (state) => {
    //   return state.lists;
    // },
    lists: state => {
      return state.lists;
    },
    getCountData: (state) => {
        return state.lists;
    }
  },

  mutations: {
    setDatas(state, payload) {
      state.lists = payload
    }, 
  },

  actions: {
    // setDatas(context, data) {
    //   context.commit('setData', data);
    // },
    getDatas: async (context) => { 

       let {data} = await axios
              .get("https://jsonplaceholder.typicode.com/users")
              
                // console.log(response.data)
                context.commit('setDatas', data) 
                
              .catch((error) => {
                console.log(error); 
              })
    }
  },
});
