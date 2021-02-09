import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import App from './App.vue';
import router from './router';
import { store } from './store/index';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);
Vue.use(vuetify);

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
