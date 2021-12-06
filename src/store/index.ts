import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface userModel {
  rut: string
  nombre: string
  edad: number
  prevision: string
  nacionalidad: string
  comuna: string
  correo: string
}

interface registrationForm extends userModel { }

export default new Vuex.Store({
  state: {
    user: {
      rut: "",
      nombre: "",
      edad: -1,
      prevision: "",
      nacionalidad: "",
      comuna: "",
      correo: "",
    },
    isAuthenticated: false,
  },
  mutations: {
    SET_USER(state, payload: userModel) {
      state.user.rut = payload.rut
      state.user.nombre = payload.nombre
      state.user.edad = payload.edad
      state.user.prevision = payload.prevision
      state.user.nacionalidad = payload.nacionalidad
      state.user.comuna = payload.comuna
      state.user.correo = payload.correo
    }
  },
  actions: {
    register({ commit }, payload: registrationForm) {
      console.log(payload)
    }
  },
  modules: {},
});
