<template>
<v-app style="background: none;">
  <v-navigation-drawer v-if="user" temporary v-model="sidebar">
    <v-list style="padding-top: 10px" class="grey lighten-3">
      <v-list-item>
        <v-list-tile router href="profile">
          <v-list-tile-avatar v-if="user.photoURL">
            <img :src="user.photoURL" />
          </v-list-tile-avatar>
          <v-list-tile-title class="secondary--text">{{ user.displayName || user.email.split("@")[0] }}</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-subheader class="grey lighten-3 secondary--text">{{ user.email }}</v-subheader>
    </v-list>
    <v-list subheader>
      <v-subheader>Tutorat</v-subheader>
      <v-list-item v-for="item in sideMenuItems" :key="item.name">
        <v-list-tile ripple router :href="item.href">
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile :href="slack">
          <v-list-tile-title>
            Chat
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <template v-if="user">
        <v-divider />
        <v-subheader>Administration</v-subheader>
        <v-list-item v-for="item in navigation" :key="item.name">
          <v-list-tile ripple router :href="item.href">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </template>
      <v-divider />
      <v-subheader>Compte</v-subheader>
      <v-list-item>
        <v-list-tile router href="profile">
          <v-list-tile-title>
            Mon profil
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item @click="logOut">
        <v-list-tile>
          <v-list-tile-title>
            Se déconnecter
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar fixed>
    <v-toolbar-side-icon v-if="user" class="white--text" @click.native.stop="sidebar = !sidebar" />
    <v-toolbar-logo v-if="!user">
      Tutor'App
    </v-toolbar-logo>
    <template v-if="user">
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon class="white--text">
        <v-icon>search</v-icon>
      </v-btn>
    </template>
  </v-toolbar>
  <main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </main>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';

import { navigation, sideMenuItems } from './helpers/navigation';

export default {
  name: 'app',

  data: () => ({
    sidebar: false,
    navigation,
    sideMenuItems,
    slack: 'https://tutorapp-talk.slack.com',
  }),

  computed: mapGetters([
    'user',
    'pageTitle',
  ]),

  methods: {
    logOut() {
      this.sidebar = false;
      firebase.auth().signOut().then(this.onSignOut, this.onError).catch(this.onError);
    },

    onSignOut() {
      // console.log('onSignOut');
      this.$router.push('/auth');
    },

    onError() {
      // console.log('onError');
      this.$router.push('/auth');
    },
  },
};
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/main.css'
  @import './css/animate.css'
</style>
