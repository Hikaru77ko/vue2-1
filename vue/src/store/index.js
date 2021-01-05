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
  getters: {
    getGender: state => state.gender,
    getBirthdayYear: state => state.birthday.year,
    getBirthdayMonth: state => state.birthday.month,
    getBirthdayDay: state => state.birthday.day,
    getInsuranceAnswer: state => state.question.insuranceAnswer,
    getHospitalizationAnswer: state => state.question.hospitalizationAnswer,
    getSurgeryAnswer: state => state.question.surgeryAnswer,
    getConsultation: state => state.consultation
  },
})
