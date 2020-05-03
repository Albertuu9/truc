import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  es: {
      home: {
          title: 'JUEGO DEL TRUC',
          subtitle: '¡Disfruta del juego del truc de siempre desde tu smartphone!',
          titleNewGame: '¡JUGAR YA!',
          descriptionNewGame: 'Seleccionando esta opción entrarás directamente en una partida rápida',
          titleRegisterGame: 'REGÍSTRATE',
          descriptionRegisterGame: 'Seleccionando esta opción crearás un usuario antes de jugar',
          anotherOptionGame: 'O bien juega...'
      },
      modalLanguage: {
        title: 'Idiomas',
        header: 'Selecciona tu idioma:',
        accept: 'Aceptar'
    }
  },
  va: {
    home: {
        title: 'JOC DEL TRUC',
        subtitle: 'Gaudeix del joc del truc de sempre desde el teu smartphone!',
        titleNewGame: 'JUGAR JA!',
        descriptionNewGame: 'Seleccionant aquesta opció entraràs directament en una partida ràpida',
        titleRegisterGame: 'REGÍSTRAT',
        descriptionRegisterGame: 'Seleccionant aquesta opció crearàs un usuari abans de jugar',
        anotherOptionGame: 'O be juga...'
    },
    modalLanguage: {
        title: 'Idiomes',
        header: 'Selecciona el teu idioma:',
        accept: 'Acceptar'
    }
  }
}

export const i18n = new VueI18n({
    locale: localStorage.getItem('language') ? localStorage.getItem('language') : 'es',
    fallbackLocale: 'es',
    messages
})