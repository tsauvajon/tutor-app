<template>
<div>
  <v-card>
    <v-card-text>
      <v-date-picker
        v-model="date"
        :allowed-dates="allowedDays"
      />
      <br>
      <v-list>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>
              Cours 1
            </v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>
              Cours 2
            </v-list-tile-title>
          </v-list-tile>
        </v-list-item>
        <v-list-item>
          <v-list-tile>
            <v-list-tile-title>
              Cours 3
            </v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
  export default {
    name: 'agenda',

    data: () => ({
      date: null,
      allowedDays: [],
    }),

    mounted() {
      // TODO : set allowedDays with the days where the current user has
      // courses he attends to or gives
      this.allowedDays = [...Array(10)].fill(null).map(() => {
        const day = Math.floor(Math.random() * 30);
        const d = new Date();
        d.setDate(day);
        return d;
      });
    },
  };
</script>
