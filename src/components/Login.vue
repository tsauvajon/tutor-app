<template>
<v-card hover raised class="secondary ta-small-container">
  <v-card-row>
    <v-list class="ta-inner-container">
      <v-subheader>Se connecter</v-subheader>
      <v-list-item v-on:click="connect">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              Google
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
      <v-list-item v-on:click="connect">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              Facebook
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
      <v-list-item v-on:click="connect">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              GitHub
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-card-row>
  <v-divider />
  <v-card-row>
    <v-list class="ta-inner-container">
      <v-subheader>S'enregistrer</v-subheader>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              Google
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              Facebook
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
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
