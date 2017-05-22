<template>
  <div>
    <h1>Signup succeeded</h1>
    <button @click="logOut">Log out</button>
    <hr>
    <img :src="photo" style="height: 120px;"> <br>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <p>{{ userId }}</p>
    <hr>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'authSuccess',
  data: () => ({
    photo: '',
    userId: '',
    name: '',
    email: '',
    user: {},
  }),
  created() {
    this.user = firebase.auth().currentUser;
    if (this.user) {
      const { displayName, email, photoURL, uid } = this.user;
      this.name = displayName;
      this.userId = uid;
      this.email = email;
      this.photo = photoURL;
    }
  },
};
</script>
