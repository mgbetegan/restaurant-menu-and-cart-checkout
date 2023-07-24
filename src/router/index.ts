import Vue from 'vue'
import VueRouter, { RouteConfig, } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

import EntreesView from "@/views/cuisine/EntreesView.vue";
import PlatsView from "@/views/cuisine/PlatsView.vue";
import CuisineView from "@/views/cuisine/CuisineView.vue";
import DessertsView from "@/views/cuisine/DessertsView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },

      {
        path: 'cuisine',
        name: 'cuisine',
        component:CuisineView,
        children: [
          {
            path: 'desserts',
            name: 'desserts',
            component: DessertsView
          },
          {
            path: 'entrees',
            name: 'entrees',
            component: EntreesView
          },
          {
            path: 'plats',
            name: 'plats',
            component: PlatsView
          },
        ]
      },


    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
