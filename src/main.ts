import "./main.css"
import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import Home from "./pages/home/index.vue"
import StartBuilding from "./pages/start-building/index.vue"
import firebase from "./plugins/firebase"

export const createApp = ViteSSG(
    App,
    {
        routes: [
            { path: "/", name: "home", component: Home },
            { path: "/start-building", name: "start-building", component: StartBuilding },
            { path: "/:pathMatch(.*)*", component: Home }
        ], scrollBehavior(to, _from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            if (to.hash) {
                return {
                    el: to.hash,
                    behavior: "smooth"
                }
            }
            return { top: 0, left: 0 }
        }
    },
    ({ app, isClient }) => {
        if (isClient) {
            app.use(firebase, { analytics: import.meta.env.PROD })
        }
    }
)
