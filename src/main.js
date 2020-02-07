import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";

import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Esse campo é obrigatório"
});

import "./directives/Transform";

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000";
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  el: "#app",
  components: {
    ValidationProvider
  },
  router,
  render: h => h(App)
});
