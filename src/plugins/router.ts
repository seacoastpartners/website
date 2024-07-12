import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/home/index.vue"
import BookMeeting from "@/pages/book-meeting/index.vue"

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/book-meeting", name: "book-meeting", component: BookMeeting },
    { path: "/:pathMatch(.*)*", component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { 
                el: to.hash,
                behavior: "smooth"
            }
        }
        return { x: 0, y: 0 }
    }
})

export default router
