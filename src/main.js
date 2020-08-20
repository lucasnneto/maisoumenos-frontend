import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import Routes from "./router";
import store from "./store";

Vue.use(vueRouter);

Vue.config.productionTip = false;
const router = new vueRouter({
  routes: Routes,
});

new Vue({
  render: (h) => h(App),
  router: router,
  store,
}).$mount("#app");
