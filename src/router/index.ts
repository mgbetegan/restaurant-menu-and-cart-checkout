import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DessertView from "@/views/DessertView.vue"
import AppLayout from "@/components/layouts/AppLayout.vue";

import EntreesView from "@/views/EntreesView.vue";
import PlatsView from "@/views/PlatsView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    component: AppLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'cuisine',
        name: 'cuisine',
        //component:DessertView
        children:[
          {
            path: 'desserts',
            name: 'desserts',
            component: DessertView
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
