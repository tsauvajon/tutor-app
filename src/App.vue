<template>
<v-app top-toolbar sidebar-under-toolbar fixed-left-sidebar>
  <v-toolbar fixed>
    <v-toolbar-side-icon v-if="connected" @click.native.stop="sidebar = !sidebar" />
    <v-toolbar-logo v-if="!connected">Tutor'App</v-toolbar-logo>
    <v-toolbar-title v-if="connected" class="hidden-sm-and-down">Tutor'App</v-toolbar-title>
    <v-toolbar-items v-if="connected">
      <v-toolbar-item v-for="nav in navigation" :href="nav.href" router :key="nav.href.name">
        {{ nav.name }}
      </v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
  <main>
    <v-sidebar left drawer v-model="sidebar" v-if="connected">
      <v-list>
        <v-subheader>Thomas Sauvajon</v-subheader>
        <v-list-item v-for="item in sideMenuItems" :key="item.name">
          <v-list-tile router :href="item.href">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
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
          <v-list>
            <v-subheader>Se connecter</v-subheader>
            <v-list-item v-on:click="connect">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    Google
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
            <v-list-item v-on:click="connect">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    Facebook
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
            <v-divider inset />
            <v-subheader>S'enregistrer</v-subheader>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    Google
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    Facebook
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </template>
      </v-container>
    </v-content>
  </main>
</v-app>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex';

const sideMenuItems = [{
    name: 'Profil',
    href: {
      name: 'profile',
    },
  },
  {
    name: 'Mes cours',
    href: {
      name: 'mycourses',
    },
  },
  {
    name: 'Tous les cours',
    href: {
      name: 'courses',
    },
  },
  {
    name: 'Mon planning',
    href: {
      name: 'agenda',
    },
  },
  {
    name: 'Chat',
    href: {
      name: 'chat',
    },
  },
];

const navigation = [{
    name: 'Utilisateurs',
    href: {
      name: 'users',
    },
  },
  {
    name: 'Paramètres',
    href: {
      name: 'params',
    },
  },
];

export default {
  data: () => ({
    sidebar: false,
    navigation,
    sideMenuItems,
  }),
  computed: {
    ...mapGetters([
      'connected',
    ]),
  },
  methods: {
    ...mapActions([
      'connect',
    ]),
  },
};
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/main.css'
</style>
