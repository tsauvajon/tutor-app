import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = "http://";

const state = {
  connected: false,
  isAdmin: true,
};

const mutations = {
  CONNECT(state) {
    state.connected = true;
  },
};

const actions = {
  connect: ({ commit }) => commit('CONNECT'),
};

const getters = {
  connected: state => state.connected,
  isAdmin: state => state.isAdmin,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
