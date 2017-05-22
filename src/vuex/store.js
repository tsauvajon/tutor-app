import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = "http://";

const state = {
  user: null,
  fbApp: null,
  fbUiApp: null,
};

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
};

const actions = {
  setUser: ({ commit }, user) => commit('SET_USER', user),
  setFbApp: ({ commit }, fbApp) => commit('SET_FB_APP', fbApp),
  setFbUiApp: ({ commit }, fbUiApp) => commit('SET_FB_UI_APP', fbUiApp),
};

const getters = {
  user: state => state.user,
  fbApp: state => state.fbApp,
  fbUiApp: state => state.fbUiApp,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
