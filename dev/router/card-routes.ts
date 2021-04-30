import {RouteRecordRaw} from "vue-router";

const cardRoutes: RouteRecordRaw[] = [
  {
    path: "/card-base",
    name: "Base card",
    component: () => import('../views/Cards/CardBase.vue'),
  },
]

export default cardRoutes
