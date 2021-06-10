import Home from "../pages/Home.vue"
import Categories from "../pages/Categories.vue"
import Last31Days from "../pages/Last31Days.vue"
import MenuMobile from "../pages/MenuMobile.vue"
import TheDay from "../pages/TheDay.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/last-31-days",
    name: "Last31Days",
    component: Last31Days,
  },
  {
    path: "/the-day/:id",
    name: "TheDay",
    component: TheDay,
    props(route) {
      return { search: route.query.search }
    },
  },
  { path: "/menu", name: "Menu", component: MenuMobile },
]
export default createRouter({
  history: createWebHistory(),
  routes,
})
