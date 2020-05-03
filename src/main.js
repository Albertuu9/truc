import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import {i18n} from './translate/i18n';
import './../public/styles/style.css';

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
