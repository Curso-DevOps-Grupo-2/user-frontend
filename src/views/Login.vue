<template>
  <v-card>
    <v-card-title> Login </v-card-title>
    <v-card-text>
      <v-text-field label="Correo" v-model="correo"></v-text-field>
      <v-text-field label="Contraseña" v-model="password"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: (): {
    correo: string;
    password: string;
  } => ({
    correo: "",
    password: "",
  }),
  methods: {
    login() {
      this.$store.dispatch("login", {
        correo: this.correo,
        password: this.password,
      });
    },
  },
});
</script>
