<template>
<div>
  <v-card>
    <v-card-title>Paramètres</v-card-title>
    <v-card-text v-if="loading">
      <v-progress-linear
        indeterminate
        class="primary--text"
      />
    </v-card-text>
    <v-card-text v-else>
      <v-text-field label="Nom de l'établissement" v-model="schoolName" />
      <v-switch disabled v-model="openInscription" label="Inscription ouverte à tous" />
      <v-switch disabled v-model="roomManagement" label="Gestion des salles dans l'appli" />
      <v-btn @click.native.stop="editSchoolName(schoolName)" raised hover>Save</v-btn>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'params',

  data: () => ({
    openInscription: true,
    roomManagement: false,
    schoolName: 'Nom école',
    loading: true,
  }),

  created() {
    this.$store.getters.fbApp.database().ref('params').on('value', snapshot => {
      console.log(snapshot.val());
      this.schoolName = snapshot.val().schoolName;
      this.loading = false;
    });
  },

  methods: {
    editSchoolName(name) {
      this.$store.getters.fbApp.database().ref('params').set({
        schoolName: name,
      });
    },
  },
};
</script>
