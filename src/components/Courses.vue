<template>
<div>
  <v-card flat class="secondary white--text">
    <v-card-title>
      {{ title }}
      <v-spacer />
      <div>
        <v-menu bottom left origin="top right">
          <v-btn icon="icon" slot="activator" class="">
            <v-icon class="white--text">filter_list</v-icon>
          </v-btn>
          <v-list>
            <v-list-item @click="filter = 'all'">
              <v-list-tile>
                <v-list-tile-title>Tous les cours</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
            <v-list-item @click="filter = 'subscribed'">
              <v-list-tile>
                <v-list-tile-title>Mes inscriptions</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
            <v-list-item @click="filter = 'mine'">
              <v-list-tile>
                <v-list-tile-title>Mes cours</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-title>
  </v-card>

  <v-card
    hover
    style="margin-top: 15px;"
    v-if="!filtered || filtered === null"
  >
    <v-card-text>
      <v-progress-linear
        indeterminate
        class="primary--text"
      />
    </v-card-text>
  </v-card>
  <v-card hover style="margin-top: 15px;" v-else-if="!filtered.length">
    <v-card-text>
      Rien à afficher !
    </v-card-text>
  </v-card>
  <v-layout row wrap v-else style="margin-bottom: 75px;">
    <v-flex
      style="margin-top: 15px; "
      xs12 sm12 md6 lg4 xl3
      v-for="course in filtered"
      :key="course.createdat"
    >
      <v-card hover>
        <v-card-title class="secondary white--text">
          {{ course.title }}
      </v-card-title>
      <v-card-row v-if="course.chips && course.chips.length">
        <div class="row">
          <v-chip
            v-for="(chip, i) in course.chips"
            :key="i"
            class="accent white--text"
            small
          >
            {{ chip }}
          </v-chip>
        </div>
      </v-card-row>
      <v-card-text>
        {{ course.description }}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-row actions>
        <template v-if="course.creator === user.uid">
        <v-btn flat class="accent--text">
          Supprimer
        </v-btn>
        <v-btn flat class="accent--text">
          Editer
        </v-btn>
        </template>
        <v-btn
          @click.native.stop="subscribe(course['.key'])"
          v-else
          flat
          class="accent--text"
        >
          S'inscrire
        </v-btn>
      </v-card-row>
      </v-card>
    </v-flex>
  </v-layout>
  <v-btn floating large light class="fab accent">
    <v-icon class="white--text">add</v-icon>
  </v-btn>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'courses',

  data: () => ({
    filter: 'all',
  }),

  created() {
    const database = this.$store.getters.fbApp.database();
    const coursesRef = database.ref('courses');
    this.setCoursesRef(coursesRef);
  },

  methods: {
    subscribe(courseKey) {
      const part = {};
      part[this.$store.getters.user.uid] = true;
      const database = this.$store.getters.fbApp.database();
      database
        .ref('courses')
        .child(courseKey)
        .child('participants')
        .update({ ...part });

      const sub = {};
      sub[courseKey] = true;
      database
        .ref('users')
        .child(this.$store.getters.user.uid)
        .child('participations')
        .update({ ...sub });
    },

    ...mapActions(['setCoursesRef']),
  },

  computed: {
    ...mapGetters(['courses', 'user']),

    filtered() {
      if (!this.courses) {
        return null;
      }

      const values = Object.keys(this.courses).map(k => ({
        '.key': k,
        ...this.courses[k],
      }))
        .filter(c => c.createdAt);
      switch (this.filter) {
        case 'mine':
          return values.filter(c => c.creator === this.user.uid);
        case 'subscribed':
          return values
            .filter(c => c.participants)
            .filter(c => Object.keys(c.participants)
              .filter(key => c.participants[key])
              .includes(this.user.uid));
        default:
          return values;
      }
    },

    title() {
      switch (this.filter) {
        case 'mine':
          return 'Mes cours';
        case 'subscribed':
          return 'Mes inscriptions';
        default:
          return 'Tous les cours';
      }
    },
  },
};
</script>
