<template>
<v-app top-toolbar sidebar-under-toolbar fixed-left-sidebar>
  <v-toolbar fixed>
    <v-toolbar-side-icon v-if="connected" @click.native.stop="sidebar = !sidebar" />
    <v-toolbar-logo></v-toolbar-logo>
    <v-toolbar-title class="hidden-sm-and-down">Tutor'App</v-toolbar-title>
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
        <v-subheader>Thomas Sauvajon</v-subheader>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Profil</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Mes cours</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Tous les cours</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Planning</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>Chat</v-list-tile-title>
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
          <center>
            <v-btn default primary class="white--text" @click.native.stop="connect">
              Se connecter
            </v-btn><br><v-btn
              default
              primary
              class="white--text"
              @click.native.stop="connect"
            >
              S'enregistrer
            </v-btn>
          </center>
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

const sideMenu = {
  //TODO
};

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
