import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


// Views
import homeOne from '@/views/homeOne/homeOne'
import homeTwo from '@/views/homeTwo/homeTwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeOne',
    component: homeOne
  },
  {
    path: '/home-two',
    name: 'homeTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/home-two.vue'),
   component: homeTwo
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
