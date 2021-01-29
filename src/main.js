import Vue from "vue";
import App from "./App.vue";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

const httpLink = createHttpLink({
  uri: "https://graphqlzero.almansi.me/api",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
Vue.use(VueApollo);

new Vue({
  render: (h) => h(App),
  apolloProvider,
}).$mount("#app");
