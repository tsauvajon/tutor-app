import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import store from './vuex/store';

Vue.use(Vuetify);

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
