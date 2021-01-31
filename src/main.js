import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import router from "./components/router";
import VueRouter from "vue-router";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";

Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router,
  apolloProvider: createProvider(),
}).$mount("#app");
