import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/pages/home/HomeComponent';


Vue.use(VueRouter)

const routes = [
  {
      path: '',
      component: HomeComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router