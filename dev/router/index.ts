import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import buttonRoutes from "./button-routes";
import cardRoutes from "./card-routes";
import inputRoutes from "./input-routes";

let routes:RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/sidebar",
    name: "Sidebar",
    component: () => import('../views/Sidebar.vue'),
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: () => import('../views/Navbar.vue'),
  },
  {
    path: "/drop-down",
    name: "Drop down",
    component: () => import('../views/Dropdown.vue'),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import('../views/Tables/Table.vue'),
  },
  {
    path: "/pagination",
    name: "Pagiation",
    component: () => import('../views/Pagination.vue'),
  },
  {
    path: "/badge",
    name: "Badge",
    component: () => import('../views/Badges.vue'),
  },
  {
    path: "/modal",
    name: "Modal",
    component: () => import('../views/Modals.vue'),
  }
]

routes = routes.concat(buttonRoutes)
routes = routes.concat(cardRoutes)
routes = routes.concat(inputRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
