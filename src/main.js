import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
new Vue({
  render: (h) => h(App),
  apolloProvider: createProvider(),
}).$mount("#app");
