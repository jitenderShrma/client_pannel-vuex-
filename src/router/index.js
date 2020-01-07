import Vue from 'vue'
import VueRouter from 'vue-router';
/* eslint-disable */
// Components
import Dashboard from '../components/Dashboard';
import Client from '../components/Client';
import AddClient from '../components/Add-Client';
import EditClient from '../components/EditClient';
import NotFound from '../components/NotFound';

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
    path: '/client/edit:id',
    name: 'client-edit',
    component: EditClient
  },
  {
    path: '/client/:id',
    name: 'client',
    component: Client
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
