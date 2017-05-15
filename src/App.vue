<template>
<v-app top-toolbar sidebar-under-toolbar fixed-left-sidebar>
  <v-toolbar fixed>
    <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar" />
    <v-toolbar-logo class="hidden-sm-and-down">Tutor'App</v-toolbar-logo>
    <v-toolbar-title></v-toolbar-title>
    <v-toolbar-items v-if="connected">
      <v-toolbar-item>
        ITEM 1
      </v-toolbar-item>
      <v-toolbar-item>
        ITEM 2
      </v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
  <main>
    <v-sidebar left drawer v-model="sidebar" v-if="connected">
      <v-list>
        <v-subheader>MENU</v-subheader>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Menu 1</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Menu 2</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>
    <v-content>
      <v-toolbar style="opacity: 0;" />
      <v-container fluid>
        <template v-if="connected">
          <router-view></router-view>
        </template>
        <template v-else>
            <v-btn default primary class="white--text" @click.native.stop="connect">Se connecter</v-btn>
            <v-btn default primary class="white--text" @click.native.stop="connect">S'enregistrer</v-btn>
          </template>
      </v-container>
    </v-content>
  </main>
</v-app>
</template>

<script>
import {
  mapGetters
} from 'vuex';

export default {
  data: () => ({
    sidebar: false,
  }),
  computed: {
    ...mapGetters([
      'connected',
    ]),
  },
  methods: {
    connect() {
      this.$store.dispatch('connect');
    },
  },
};
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/main.css'
</style>
