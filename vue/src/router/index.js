import Vue from "vue";
import Router from "vue-router";
import Information from ".././views/Information.vue";
import Questionnaire from ".././views/Questionnaire.vue";
import Consultation from ".././views/Consultation.vue";

Vue.use(Router);

export default new Router({
  routes: [{ path: "/", component: Information,}, 
           { path: "/Questionnaire", component: Questionnaire},
           { path: "/Consultation", component: Consultation}
          ]
});