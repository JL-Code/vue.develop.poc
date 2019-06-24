import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import 'vant/lib/index.css';

Vue.use(VueAxios, Axios);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
