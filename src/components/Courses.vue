<template>
<div>
  <v-card>
    <v-card-title>
      Cours
      <v-spacer />
      <div>
        <v-menu bottom left origin="top right">
          <v-btn icon="icon" slot="activator" class="">
            <v-icon>filter_list</v-icon>
          </v-btn>
          <v-list>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-title>Filtre 1</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-title>Filtre 2</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
            <v-list-item>
              <v-list-tile>
                <v-list-tile-title>Filtre 3</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-title>
  </v-card>
  <v-expansion-panel>
    <v-expansion-panel-content v-if="course.title" v-for="course in courses" :key="course.createdat">
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
  <!-- </v-card-row>
  </v-card> -->
  <!-- <pre v-for="key in Object.keys(courses)">
    {{ courses[key] }}
  </pre> -->
  <v-btn primary floating large light class="fab">
    <v-icon class="white--text">add</v-icon>
  </v-btn>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'courses',

  created() {
    const database = this.$store.getters.fbApp.database();
    const coursesRef = database.ref('courses');
    this.$store.dispatch('setCoursesRef', coursesRef);
  },

  computed: mapGetters(['courses']),

  // computed()

  // data: () => ({
  //   allcourses: [{
  //       id: 0,
  //       title: 'Initiation à React',
  //       desc: 'un cours sur React',
  //       chips: [
  //         'javascript',
  //         'développement',
  //         'front-end',
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: 'Démarrer avec Vue',
  //       desc: 'un cours sur Vue',
  //       chips: [
  //         'javascript',
  //         'développement',
  //         'front-end',
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: 'Réviser l\'IPI',
  //       desc: 'révisions de l\'IPI',
  //       chips: [
  //         'réseau',
  //         'révisions',
  //       ],
  //     },
  //   ],
  // }),

};
</script>
