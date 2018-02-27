import Vue from "vue";
import Router from "vue-router";
import Step2 from "../components/Step2";
import radio from "../components/radio";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: radio
    },
    {
      path: "/step2",
      name: "Step2",
      component: Step2
    }
  ]
});
