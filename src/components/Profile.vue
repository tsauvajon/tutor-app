<template>
<div>
  <v-card hover raised class="ta-small-container">
    <v-card-row>
      <v-card-title>Profil</v-card-title>
    </v-card-row>
    <v-card-row>
      <v-list two-line class="ta-inner-container">
        <!-- <v-subheader /> -->
        <!-- <v-divider /> -->
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="secondary--text">face</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Thomas Sauvajon
              </v-list-tile-title>
              <v-list-tile-sub-title>
                24 ans
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="secondary--text">school</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                EPSI Montpellier
              </v-list-tile-title>
              <v-list-tile-sub-title>
                B3 Classe 2
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="secondary--text">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                06 99 99 99 99
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <!-- B3 Classe 2 -->
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="secondary--text">mail_outline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                thomas.sauvajon1@epsi.fr
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <!-- B3 Classe 2 -->
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-card-row>
    <v-card-row actions class="secondary mt-0">
      <v-btn flat class="white--text">Edit</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="white--text">mode_edit</v-icon>
      </v-btn>
    </v-card-row>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'profile',
};
</script>
