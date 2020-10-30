import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";
import App from "./App.vue";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.config.productionTip = false;

const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
