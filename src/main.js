import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import store from './vuex/store';
import router from './router';

Vue.use(Vuetify);

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
});
