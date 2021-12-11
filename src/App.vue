<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://nub8.net/wp-content/uploads/2019/12/Nub8-What-is-Devops-1-min.png"
          transition="scale-transition"
          width="100"
        />

        <!-- <v-img
             alt="Vuetify Name"
             class="shrink mt-1 hidden-sm-and-down"
             contain
             min-width="100"
             src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
             width="100"
             /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Curso-DevOps-Grupo-2"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
