<template>
<div>
  <div>
    <v-card v-if="user" hover raised class="ta-small-container animated fadeInUp xfast">
      <v-card-title class="secondary white--text">
        <img
          style="border-radius: 50%;"
          :src="user.photoURL || `https://robohash.org/${user.uid}.png`"
          height="48px"
          class="mr-3"
        />
        {{ user.displayName || user.email.split("@")[0] }}
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
                <v-list-tile-sub-title>
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
          <v-list-item class="blue-grey lighten-4">
            <v-list-tile class="white">
              <v-list-tile-action>
                <v-icon>phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <template v-if="true">
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
      <v-card-row actions>
        <v-btn flat class="accent--text">
          Enregistrer
        </v-btn>
      </v-card-row>
    </v-card>
    <div class="mt-3 mb-3">&nbsp;</div>
    <v-card hover raised v-if="courses && courses.length">
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
  }),

  computed: {
    ...mapGetters(['user']),

    userClass() {
      return this.classNames.filter(c => c['.key'] === this.dbuser.class)[0];
    },
  },

  created() {
    const database = this.$store.getters.fbApp.database();
    database.ref('params').on('value', (snapshot) => {
      this.schoolName = snapshot.val().schoolName.value;
      this.classNames = Object.keys(snapshot.val().classNames)
        .map(key => ({
          '.key': key,
          text: snapshot.val().classNames[key],
        }));
      this.loading = false;
    });

    database.ref('courses').on('value', (snapshot) => {
      this.courses = Object.values(snapshot.val())
        .filter(c => c.creator === this.user.uid);
    });

    database
      .ref('users')
      .child(this.$store.getters.user.uid)
      .on('value', (snapshot) => {
        this.dbuser = snapshot.val();
      });
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
