import Home from "../pages/Home.vue"
import Categories from "../pages/Categories.vue"
import Archive from "../pages/Archive.vue"
import MenuMobile from "../pages/MenuMobile.vue"
import ArchiveSearch from "../pages/ArchiveSearch.vue"

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
    path: "/archive",
    name: "Archive",
    component: Archive,
  },
  {
    path: "/ArchiveSearch/:id",
    name: "ArchiveSearch",
    component: ArchiveSearch,
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
