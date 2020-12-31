import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: "",
    birthday:{
      year: "1967年　（昭和41年）",
      month: "1",
      day: "1"
      },
    question:{
      insuranceAnswer:"",
      hospitalizationAnswer:"",
      surgeryAnswer:""
      },
      consultation:""
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
