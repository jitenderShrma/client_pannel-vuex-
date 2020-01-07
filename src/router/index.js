import Vue from 'vue'
import VueRouter from 'vue-router';

// Components
import Dashboard from '../components/Dashboard';
import Client from '../components/Client';
import AddClient from '../components/Add-Client'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/create-client',
    name: 'Add-Client',
    component: AddClient
  },
  {
    path: '/client/:id',
    name: 'client',
    component: Client
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
