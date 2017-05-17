<template>
<v-card hover raised class="ta-small-container animated fadeInUp xfast">
  <v-card-row class="animated fadeInUp xfast delay300">
    <v-list class="ta-inner-container">
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
      <v-list-item v-on:click="connect">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              GitHub
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-card-row>
  <v-divider class="animated fadeInUp xfast delay400" />
  <v-card-row class="animated fadeInUp xfast delay500">
    <v-list class="ta-inner-container">
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
      <v-list-item>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              GitHub
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-card-row>
</v-card>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  name: 'login',
  methods: {
    ...mapActions([
      'connect',
    ]),
  },
};
</script>
