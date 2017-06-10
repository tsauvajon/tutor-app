<template>
<div>
  <div>
    <v-card v-if="dbuser" hover raised class="ta-small-container animated fadeInUp xfast">
      <v-card-title class="secondary white--text">
        <img
          style="border-radius: 50%;"
          :src="dbuser.photoURL || `https://robohash.org/${dbuser.uid}.png`"
          height="48px"
          class="mr-3"
        />
        {{ dbuser.displayName || dbuser.email.split("@")[0] }}
      </v-card-title>
      <v-card-row v-if="loading">
        <v-progress-linear
          indeterminate
          class="primary--text"
        />
      </v-card-row>
      <v-card-row v-else>
        <v-list two-line class="ta-inner-container">
          <v-list-item class="blue-grey lighten-4">
            <v-list-tile class="white">
              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ schoolName }}
                </v-list-tile-title>
                <v-list-tile-sub-title v-if="userClass">
                  <!-- <v-select
                    :items="classNames"
                    v-model="e1"
                    label="Select"
                    dark
                    single-line
                    auto
                  /> -->
                  {{ userClass.text }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item
            class="blue-grey lighten-4"
            v-if="dbuser.uid === user.uid ||dbuser.phone"
          >
            <v-list-tile class="white">
              <v-list-tile-action>
                <v-icon>phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <template v-if="dbuser.uid === user.uid">
                  <v-text-field
                    single-line
                    label="N° téléphone"
                    type="text"
                    append-icon="mode_edit"
                    v-model="dbuser.phone"
                  >
                </v-text-field>
                </template>
                <template v-else>{{ dbuser.phone }}</template>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>mail_outline</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ user.email }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card-row>
      <v-divider />
      <v-card-row actions v-if="dbuser.uid === user.uid">
        <v-btn flat class="accent--text">
          Enregistrer
        </v-btn>
      </v-card-row>
    </v-card>

    <v-card v-if="loading">
      <v-card-text>
        <v-progress-linear
          indeterminate
          class="primary--text"
        />
      </v-card-text>
    </v-card>

    <v-card v-if="!loading && !dbuser">
      <v-card-text>
      Cet utilisateur n'existe pas !
      </v-card-text>
    </v-card>

    <div class="mt-3 mb-3">&nbsp;</div>

    <v-card hover raised class="animated fadeInUp xfast" v-if="courses && courses.length">
      <v-card-title class="secondary white--text">
        Derniers cours
      </v-card-title>
      <v-card-text>
        <v-list two-line>
          <v-list-item v-for="course in courses" :key="course.createdAt">
            <v-list-tile>
              <v-list-tile-content>
              <v-list-tile-title>
                {{ course.title }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ new Date(course.createdAt).toLocaleDateString() }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card hover raised v-if="subscriptions && subscriptions.length">
    <v-card-title class="secondary white--text">
      Dernière inscriptions
    </v-card-title>
    <v-card-text>
      <v-list two-line>
        <v-list-item v-for="course in courses" :key="course.createdAt">
          <v-list-tile>
            <v-list-tile-content>
            <v-list-tile-title>
              {{ course.title }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ new Date(course.createdAt).toLocaleDateString() }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'profile',

  data: () => ({
    loading: true,
    courses: null,
    classNames: null,
    schoolName: null,
    dbuser: null,
    subscriptions: null,
  }),

  computed: {
    ...mapGetters(['user']),

    userClass() {
      if (!this.classNames) {
        return null;
      }
      return this.classNames.filter(c => c['.key'] === this.dbuser.class)[0];
    },
  },

  /*
    à chaque changement de route, le DOM est recyclé. Il faut donc recharger
    les parties nécessaires.
  */
  beforeRouteUpdate(to, from, next) {
    if (to.params.id !== from.params.id) {
      const database = this.$store.getters.fbApp.database();

      // infos utilisateur
      database
        .ref('users')
        .child(to.params.id)
        .on('value', (snapshot) => {
          this.dbuser = snapshot.val();
          this.loading = false;
          if (this.dbuser) {
            this.dbuser.uid = to.params.id;
          }
        });

      // cours
      database.ref('courses').on('value', (snapshot) => {
        this.courses = Object.values(snapshot.val())
          .filter(c => c.creator === to.params.id);
      });
    }

    next();
  },

  created() {
    const database = this.$store.getters.fbApp.database();

    // utilisateur
    database
      .ref('users')
      .child(this.$route.params.id)
      .on('value', (snapshot) => {
        this.dbuser = snapshot.val();
        this.loading = false;
        if (this.dbuser) {
          this.dbuser.uid = this.$route.params.id;
        }
      });

    // infos école
    database.ref('params').on('value', (snapshot) => {
      this.schoolName = snapshot.val().schoolName.value;
      this.classNames = Object.keys(snapshot.val().classNames)
        .map(key => ({
          '.key': key,
          text: snapshot.val().classNames[key],
        }));
    });

    // cours
    database.ref('courses').on('value', (snapshot) => {
      this.courses = Object.values(snapshot.val())
        .filter(c => c.creator === this.$route.params.id);
    });

    // this.dbuser.subscriptions.map(s => {
    //   console.log(s);
    // });
  },
};
</script>

<style scoped>
.extended {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}

.list__item {
  transition: padding 0.2s;
}
</style>
