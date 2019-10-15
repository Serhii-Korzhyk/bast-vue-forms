import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import router from './router.js';
import vuex from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  vuetify,
  vuex,
  router,
  render: h => h(App)
}).$mount('#app')
