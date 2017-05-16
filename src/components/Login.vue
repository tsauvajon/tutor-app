<template>
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
