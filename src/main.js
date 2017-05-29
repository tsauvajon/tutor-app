import Vue from 'vue';
import Vuetify from 'vuetify';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseui from 'firebaseui';

import App from './App.vue';
import store from './vuex/store';
import router from './router';
import fbConfig from './helpers/firebaseConfig';

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  store,

  router,

  el: '#app',

  render: h => h(App),

  created() {
    const fbApp = firebase.initializeApp(fbConfig);
    const fbUiApp = new firebaseui.auth.AuthUI(firebase.auth(fbApp));
    firebase.auth().onAuthStateChanged(user => store.dispatch('setUser', user));
    store.dispatch('setFbApp', fbApp);
    store.dispatch('setFbUiApp', fbUiApp);
  },

  components: {
    App,
  },
});
