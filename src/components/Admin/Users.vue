<template>
<div>
  <v-card style="margin-bottom: 10px;">
    <v-card-row>
      <v-text-field
        autofocus
        style="margin-left: 5px; margin-right: 5px;"
        name="user-search"
        label="Rechercher un utilisateur"
        single-line
        append-icon="filter_list"
      />
    </v-card-row>
  </v-card>
  <v-card>
    <v-card-title>Utilisateurs</v-card-title>
    <v-card-text>A faire :<br>
      - stocker les informations des utilisateurs dans la db<br>
      - gérer les droits des utilisateurs</v-card-text>
  </v-card>
  <pre>
    {{users}}
  </pre>
  <!-- <v-list>
    <v-list-item>
      <v-list-tile>
        <v-list-tile-title>
        </v-list-tile-title>
      </v-list-tile>
    </v-list-item>
  </v-list> -->
</div>
</template>

<script>

export default {
  name: 'users',

  data: () => ({
    users: null,
  }),

  async created() {
    const database = this.$store.getters.fbApp.database();
    const usersRef = database.ref('users');
    const snapshot = await usersRef.on('value');
    this.users = snapshot;
    // ref.once("value")
    //   .then(function(snapshot) {
    //     var key = snapshot.key; // "ada"
    //     var childKey = snapshot.child("name/last").key; // "last"
    //   });
  },
};
</script>
