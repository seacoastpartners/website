import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Service from "../pages/Service.vue"
import BookMeeting from "../pages/BookMeeting.vue"

const routes = [
    { path: "/", name: "home", component: Home },
    // TODO Add back with services
    { path: "/services/:name", name: "service", component: Service },
    { path: "/book-meeting", name: "book-meeting", component: BookMeeting },
    { path: "/:pathMatch(.*)*", name: "not-found", component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((_to, from, next) => {
    if (from.fullPath === "/book-meeting") {
        window.location.reload()
    }
    next()
})

export default router
