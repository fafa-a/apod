import Home from "../pages/Home.vue"
import Search from "../pages/Search.vue"
import Last31Days from "../pages/Last31DaysPage.vue"
import MenuMobile from "../pages/MenuMobile.vue"
import TheDay from "../pages/DayPage.vue"
import SearchDetails from "../pages/SearchDetails.vue"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/search-details/:slug",
    name: "Search-details",
    component: SearchDetails,
    props: true,
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
    // props(route) {
    //   return { search: route.query.search }
    // },
  },
  { path: "/menu", name: "Menu", component: MenuMobile },
]
export default createRouter({
  history: createWebHistory(),
  routes,
})
