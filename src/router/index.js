import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/pages/home/HomeComponent';
import GameComponent from '@/pages/game/GameComponent';


Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      component: HomeComponent
  },
  {
    path: '/game',
    component: GameComponent
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router