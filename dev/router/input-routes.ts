import {RouteRecordRaw} from "vue-router";

const inputRoutes: RouteRecordRaw[] = [
  {
    path: '/basic-inputs',
    name: 'Basic inputs',
    component: () => import('../views/Inputs/BasicInputs.vue')
  },
  {
    path: '/group-inputs',
    name: 'Input groups',
    component: () => import('../views/Inputs/GroupInputs.vue')
  },
  {
    path: '/searchhelp-inputs',
    name: 'Search help',
    component: () => import('../views/Inputs/SearchhelpInputs.vue')
  },
]

export default inputRoutes
