<template>
  <v-card>
    <v-card-title> Registar Usuario </v-card-title>
    <v-card-text>
      <v-text-field label="Rut" v-model="rut"> </v-text-field>
      <v-text-field label="Nombre" v-model="nombre"> </v-text-field>
      <v-text-field label="Edad" v-model="edad" type="number"> </v-text-field>
      <v-text-field label="Previsión" v-model="prevision"> </v-text-field>
      <v-text-field label="Nacionalidad" v-model="nacionalidad"> </v-text-field>
      <v-text-field label="Comuna" v-model="comuna"> </v-text-field>
      <v-text-field label="Correo" v-model="correo" type="email">
      </v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="register(registrationForm)"> Registrar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      rut: "",
      nombre: "",
      edad: null,
      prevision: "",
      nacionalidad: "",
      comuna: "",
      correo: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
  },
  computed: {
    registrationForm() {
      return {
        rut: this.rut,
        nombre: this.nombre,
        edad: this.edad,
        prevision: this.prevision,
        nacionalidad: this.nacionalidad,
        comuna: this.comuna,
        correo: this.correo,
      };
    },
  },
});
</script>

<style></style>
