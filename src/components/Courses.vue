<template>
<div>
  <v-card>
    <v-card-row>
      Cours | [Filtrer]
    </v-card-row>
    <v-card-row>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="cours in allcourses" :key="cours.id">
          <div slot="header">
            {{ cours.title }}
          </div>
          <v-card class="grey lighten-5">
            <v-card-title>
              <div class="row">
                <v-chip v-for="(chip, i) in cours.chips" :key="i" class="accent white--text" small>
                  {{ chip }}
                </v-chip>
              </div>
            </v-card-title>
            <v-card-text>
              {{ cours.desc }}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card-row>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'courses',
  data: () => ({
    allcourses: [{
        id: 0,
        title: 'Initiation à React',
        desc: 'un cours sur React',
        chips: [
          'javascript',
          'développement',
          'front-end',
        ],
      },
      {
        id: 1,
        title: 'Démarrer avec Vue',
        desc: 'un cours sur Vue',
        chips: [
          'javascript',
          'développement',
          'front-end',
        ],
      },
      {
        id: 2,
        title: 'Réviser l\'IPI',
        desc: 'révisions de l\'IPI',
        chips: [
          'réseau',
          'révisions',
        ],
      },
    ],
  }),
};
</script>
