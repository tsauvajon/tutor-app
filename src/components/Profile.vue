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
          <v-list-item
            class="blue-grey lighten-4"
            @click="editedIndex = editedIndex === 1 ? -1 : 1"
            :class="{extended: (editedIndex === 1)}"
          >
            <v-list-tile class="white">
              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <template v-if="false">
                  <input
                    type="text"
                    v-model="schoolName"
                  >
                  </input>
                </template>
                  <template v-else>{{ schoolName }}</template>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ profile.class }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item
            class="blue-grey lighten-4"
            @click="editedIndex = editedIndex === 2 ? -1 : 2"
            :class="{extended: (editedIndex === 2)}"
          >
            <v-list-tile class="white">
              <v-list-tile-action>
                <v-icon>phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <template v-if="false">
                  <input
                    type="text"
                    v-model="profile.phone"
                  >
                  </input>
                </template>
                  <template v-else>{{ profile.phone }}</template>
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
    </v-card>
    <div class="mt-3 mb-3">&nbsp;</div>
    <v-card hover raised v-if="filtered.length">
      <v-card-title class="secondary white--text">
        Derniers cours
      </v-card-title>
      <v-card-text>
        <v-list two-line>
          <v-list-item v-for="course in filtered" :key="course.createdAt">
            <v-list-tile>
              <v-list-tile-content>
              <v-list-tile-title>
                {{ course.title }}
              </v-list-tile-title>
              <v-list-tile-subtitle>
                {{ new Date(course.createdAt).toLocaleDateString() }}
              </v-list-tile-subtitle>
            </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>

  <v-btn
    v-if="editedIndex !== -1"
    @click.native.stop="editedIndex = -1"
    floating
    large
    class="animated xfast zoomIn delay1000 accent fab"
  >
    <v-icon class="white--text">
      done
    </v-icon>
  </v-btn>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'profile',

  data: () => ({
    isSaved: true,
    editedIndex: -1,
    profile: {
      class: 'B3 Classe 2',
      phone: '06 99 99 99 99',
    },
    loading: true,
  }),

  created() {
    this.$store.getters.fbApp.database().ref('params').on('value', snapshot => {
      console.log(snapshot.val());
      this.schoolName = snapshot.val().schoolName;
      this.loading = false;
    });
  },

  computed: {
    ...mapGetters(['user', 'courses']),
    filtered() {
      return this.courses !== null ?
        Object.values(this.courses).filter(c => c.creator === this.user.uid) : [];
    },
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
