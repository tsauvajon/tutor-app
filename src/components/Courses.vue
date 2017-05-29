<template>
<div>
  <v-card>
    <v-card-title>
      {{ title }}
      <v-spacer />
      <div>
        <v-menu bottom left origin="top right">
          <v-btn icon="icon" slot="activator" class="">
            <v-icon>filter_list</v-icon>
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
  <v-expansion-panel style="margin-top: 15px;">
    <v-expansion-panel-content v-if="course.title" v-for="course in filtered" :key="course.createdat">
      <div slot="header">
        {{ course.title }}
      </div>
      <v-card class="grey lighten-5">
        <v-card-title>
          <div class="row">
            <v-chip v-for="(chip, i) in course.chips" :key="i" class="accent white--text" small>
              {{ chip }}
            </v-chip>
          </div>
        </v-card-title>
        <v-card-text>
          {{ course.description }}
          <br><br> Création : {{ new Date(course.createdAt).toString() }}
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-btn primary floating large light class="fab">
    <v-icon class="white--text">add</v-icon>
  </v-btn>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'courses',

  data: () => ({
    filter: 'all',
  }),

  created() {
    const database = this.$store.getters.fbApp.database();
    const coursesRef = database.ref('courses');
    this.$store.dispatch('setCoursesRef', coursesRef);
  },

  computed: {
    ...mapGetters(['courses', 'user']),

    filtered() {
      try {
        const values = Object.values(this.$store.getters.courses)
          .filter(c => c.createdAt);
        switch (this.filter) {
          case 'mine':
            return values.filter(c => c.creator === this.$store.getters.user.uid);
          case 'subscribed':
            // TODO
            return [];
          default:
            return values;
        }
      } catch (e) {
        return this.courses;
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
