import "./main.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./plugins/router"
import firebase from "./plugins/firebase"

createApp(App)
    .use(router)
    .use(firebase, { analytics: import.meta.env.PROD })
    .mount("#app")
