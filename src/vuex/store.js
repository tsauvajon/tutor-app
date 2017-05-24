import Vue from 'vue';
import Vuex from 'vuex';
// import { firebaseMutations, firebaseAction } from 'vuexfire';

Vue.use(Vuex);

const initialState = {
  user: null,
  fbApp: null,
  fbUiApp: null,
  courses: null,
};

/* eslint-disable no-param-reassign */
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },

  SET_FB_APP(state, fbApp) {
    state.fbApp = fbApp;
  },

  SET_FB_UI_APP(state, fbUiApp) {
    state.fbUiApp = fbUiApp;
  },

  // ...firebaseMutations,
};
/* eslint-enable*/

const actions = {
  setUser: ({ commit }, user) => commit('SET_USER', user),
  setFbApp: ({ commit }, fbApp) => commit('SET_FB_APP', fbApp),
  setFbUiApp: ({ commit }, fbUiApp) => commit('SET_FB_UI_APP', fbUiApp),
  // setCoursesRef: firebaseAction(({
  //   bindFirebaseRef,
  // }, ref) => {
  //   bindFirebaseRef('courses', ref);
  // }),
};

const getters = {
  user: state => state.user,
  fbApp: state => state.fbApp,
  fbUiApp: state => state.fbUiApp,
  courses: state => state.courses,
};

export default new Vuex.Store({
  initialState,
  mutations,
  actions,
  getters,
});
