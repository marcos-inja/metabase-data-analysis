import Vue from "vue";
import Main from '../pages/Analysis.vue'
import About from "../pages/About.vue";
import NotFound from "../pages/NotFound.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/sobre",
    name: "About",
    component: About,
  },
  {
    path: '/not-found', 
    component: NotFound,
    name: 'not-found'
  },
  {
    
    path: '/:catchAll(.*)',
    redirect: { name: 'not-found' }
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
