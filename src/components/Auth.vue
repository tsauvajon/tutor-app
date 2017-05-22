<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from 'firebase';

const uiConfig = {
  signInSuccessUrl: '/#/courses',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/#tos',
};

export default {
  name: 'auth',

  mounted() {
    this.$store.getters.fbUiApp.start('#firebaseui-auth-container', uiConfig);
  },

  destroyed() {
    this.$store.getters.fbUiApp.reset();
  },
};
</script>
