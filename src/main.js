import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import "bootstrap-css-only/css/bootstrap.min.css";

new Vue({
  render: (h) => h(App),
  apolloProvider: createProvider(),
}).$mount("#app");
