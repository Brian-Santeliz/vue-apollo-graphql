import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HelloWorld from "../HelloWorld.vue";
import FormUpdate from "../FormUpdate.vue";
import SingleBook from "../SingleBook.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/add",
    name: "add",
    component: FormUpdate,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: SingleBook,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
