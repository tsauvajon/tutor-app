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
      <v-btn primary class="white--text" @click.native.stop="editSchoolName(schoolName)" raised hover>
        Enregistrer
        <v-icon right class="white--text">done</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
  <v-snackbar v-model="snackbar" :timeout="4000" secondary>
    {{ snackbarText }}
    <v-btn light flat @click.native="snackbar = false">Fermer</v-btn>
  </v-snackbar>
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
    snackbar: false,
    snackbarText: '',
  }),

  created() {
    this.$store.getters.fbApp.database().ref('params').on('value', (snapshot) => {
      this.schoolName = snapshot.val().schoolName.value;
      this.loading = false;
    });
  },

  methods: {
    editSchoolName(name) {
      this.$store.getters.fbApp.database().ref('params').update({
        'schoolName/value': name,
        'schoolName/editor': this.$store.getters.user.uid,
      }, (err) => {
        this.snackbar = true;
        if (err) {
          this.snackbarText = "Echec de l'enregistrement";
        } else {
          this.snackbarText = 'Enregistré !';
        }
      });
    },
  },
};
</script>
