<template>
<div>
  <v-card>
    <v-card-title>Paramètres</v-card-title>
    <v-card-text>
      <v-text-field label="Nom de l'établissement" value="EPSI Montpellier" />
      <v-switch v-model="openInscription" label="Inscription ouverte à tous" />
      <v-switch v-model="roomManagement" label="Gestion des salles dans l'appli" />
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
  }),
};
</script>
