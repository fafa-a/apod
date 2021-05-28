import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/style/reset.css"
import "virtual:windi.css"

const nasaApp = createApp(App)
nasaApp.use(router)
nasaApp.mount("#app")
