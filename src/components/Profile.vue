<template>
<div>
  <div>
    <v-card hover raised class="ta-small-container animated fadeInUp xfast">
      <v-card-row>
        <v-card-title class="secondary--text">Profil</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-list two-line class="ta-inner-container">
          <v-list-item
            class="blue-grey lighten-4"
            @click="editedIndex = editedIndex === 0 ? -1 : 0"
            :class="{extended: (editedIndex === 0)}"
          >
            <v-list-tile class="white">
              <v-list-tile-action>
                <v-icon>face</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <template v-if="false">
                  <input
                    type="text"
                    v-model="profile.name"
                  >
                  </input>
                </template>
                  <template v-else>{{ profile.name }}</template>
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ profile.age }} ans
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
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
                    v-model="profile.school"
                  >
                  </input>
                </template>
                  <template v-else>{{ profile.school }}</template>
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
                <v-icon class="secondary-text">mail_outline</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ profile.email }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card-row>
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
</div>
</template>

<script>
export default {
  name: 'profile',
  data: () => ({
    isSaved: true,
    editedIndex: -1,
    profile: {
      name: 'Thomas Sauvajon',
      age: 24,
      school: 'EPSI Montpellier',
      class: 'B3 Classe 2',
      phone: '06 99 99 99 99',
      email: 'thomas.sauvajon1@epsi.fr',
    },
  }),
};
</script>

<style scoped>
  .extended {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }

  .list__item {
    transition: padding 0.2s;
  }
</style>