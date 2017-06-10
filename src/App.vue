<template>
<v-app style="background: none;">
  <v-navigation-drawer v-if="user" temporary v-model="sidebar">
    <v-list dense class="moche">
      <v-list-item>
        <v-list-tile router :href="`/users/${user.uid}`">
          <v-list-tile-avatar>
            <img :src="user.photoURL || `https://robohash.org/${user.uid}.png`" />
          </v-list-tile-avatar>
          <v-list-tile-title class="secondary--text">
            {{ user.displayName || user.email.split("@")[0] }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile router :href="`/users/${user.uid}`">
          <v-list-tile-title class="secondary--text">
            {{ user.email }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-list subheader dense>
      <v-subheader light>Tutorat</v-subheader>
      <v-list-item v-for="item in sideMenuItems" :key="item.name">
        <v-list-tile ripple router :href="item.href">
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile :href="slack">
          <v-list-tile-action>
            <v-icon class="white--text">chat</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Chat
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <template v-if="user">
        <v-divider />
        <v-subheader light>Administration</v-subheader>
        <v-list-item v-for="item in navigation" :key="item.name">
          <v-list-tile ripple router :href="item.href">
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
              <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </template>
      <v-divider />
      <v-subheader light>Compte</v-subheader>
      <v-list-item>
        <v-list-tile router :href="`/users/${user.uid}`">
          <v-list-tile-action>
            <v-icon class="white--text">face</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Mon profil
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
      <v-list-item @click="logOut">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="white--text">power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Déconnexion
          </v-list-tile-title>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <AdSense
      style="margin-top: 5px;"
      ad-client="ca-pub-8898907085286992"
      ad-slot="8508369630"
      ad-style="display: block"
      ad-format="auto"
    />
  </v-navigation-drawer>
  <v-toolbar fixed>
    <v-toolbar-side-icon
      v-if="user"
      class="white--text"
      @click.native.stop="sidebar = !sidebar"
    />
    <v-toolbar-logo v-if="!user">
      Tutor'App
    </v-toolbar-logo>
    <template v-else>
      <v-toolbar-title class="white--text">{{ pageTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon class="white--text">
        <v-icon>search</v-icon>
      </v-btn>
    </template>
  </v-toolbar>
  <main>
    <v-container fluid>
      <router-view></router-view>
      <AdSense
        style="margin-top: 20px;"
        ad-client="ca-pub-8898907085286992"
        ad-slot="8385775230"
        ad-style="display: block"
        ad-format="auto"
      />
    </v-container>
  </main>
  <v-footer>
    <v-spacer />
    <a href="https://github.com/tsauvajon/tutor-app">
      <v-btn class="white--text" flat>
        <v-icon class="white--text" fa>github</v-icon>
      </v-btn>
    </a>
    <v-btn
      v-tooltip:top="{ html: 'thomas.sauvajon@gmail.com' }"
      class="white--text"
      flat
      @click.native.stop=""
      >
      <v-icon class="white--text" fa>envelope</v-icon>
    </v-btn>
    <a href="https://www.linkedin.com/in/thomas-sauvajon-782361101">
      <v-btn class="white--text" flat>
        <v-icon class="white--text" fa>linkedin</v-icon>
      </v-btn>
    </a>
    <v-spacer />
  </v-footer>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';

import AdSense from './components/AdSense.vue';
import {
  navigation,
  sideMenuItems,
} from './helpers/navigation';

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

  components: {
    AdSense,
  },
};
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/main.css'
  @import './css/animate.css'
</style>
