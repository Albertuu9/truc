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
      anotherOptionGame: 'O bien juega...',
      rules: '¿Todavía no sabes jugar? ¡pulsa aquí para aprender!'
    },
    modalLanguage: {
      title: 'Idiomas',
      header: 'Selecciona tu idioma:'
    },
    modalRules: {
      title: 'Reglas del juego'
    },
    modalRegisterInfo: {
      title: 'Información',
      header: 'Ventajas de registrarse',
      text1: 'Podrás personalizar tu página',
      text2: 'Se guardarán tus puntos/victorias',
      text3: 'Podrás conseguir premios como nuevos avatares',
      text4: 'Las 10 mejores puntuaciones se actualizarán en un ranking'
    },
    modalGeneric: {
      accept: 'Aceptar',
      cancel: 'Cancelar'
    },
    game: {
      header: {
        alert: 'Aviso',
        message: '¿Seguro que quieres salir del juego?',
        guest: 'INVITADO',
        userVictories: 'Mis victorias: '
      },
      body: {
        level: 'Nivel: ',
        cama: 'Cama: ',
        points: 'Puntos: ',
        envit: 'envido',
        truc: 'truco',
        card: 'carta'
      },
      footer: {
        time: 'Tiempo jugado: ',
        myPoints: 'Mis puntos: ',
        developedBy: 'Desarrollado por: '
      }
    },
    modalNotOptionSelected: {
      title: 'Aviso',
      message: 'Selecciona algún modo de juego'
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
      anotherOptionGame: 'O be juga...',
      rules: 'Encara no saps jugar? polsa ací per aprendre!'
    },
    modalLanguage: {
      title: 'Idiomes',
      header: 'Selecciona el teu idioma:'
    },
    modalRules: {
      title: 'Regles del joc'
    },
    modalRegisterInfo: {
      title: 'Informació',
      header: 'Avantatges de registrarse',
      text1: 'Podràs personalitzar la teva pàgina',
      text2: 'Es desaran els teus punts/victòries',
      text3: 'Podràs aconseguir premis com nous avatars',
      text4: 'Les 10 millors puntuacions s\'actualitzaran en un ranking'
    },
    modalGeneric: {
      accept: 'Acceptar',
      cancel: 'Cancel·lar'
    },
    game: {
      header: {
        alert: 'Avís',
        message: 'Segur que vols eixir del joc?',
        guest: 'CONVIDAT',
        userVictories: 'Victòries: '
      },
      body: {
        level: 'Nivell: ',
        cama: 'Cama: ',
        points: 'Punts: ',
        envit: 'envide',
        truc: 'truque',
        card: 'carta'
      },
      footer: {
        time: 'Temps jugat: ',
        myPoints: 'Els meus punts: ',
        developedBy: 'Desenvolupat per: '
      }
    },
    modalNotOptionSelected: {
      title: 'Avís',
      message: 'Selecciona algun mode de joc'
    }
  }
}

export const i18n = new VueI18n({
  locale: localStorage.getItem('language') ? localStorage.getItem('language') : 'es',
  fallbackLocale: 'es',
  messages
})