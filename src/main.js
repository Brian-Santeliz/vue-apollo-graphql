import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import "bootstrap-css-only/css/bootstrap.min.css";
import router from "./components/router";
import VueRouter from "vue-router";
import "mdbvue/lib/mdbvue.css";
import "mdbvue/lib/css/mdb.min.css";
Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router,
  apolloProvider: createProvider(),
}).$mount("#app");
