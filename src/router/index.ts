import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/home/index.vue"
import BookMeeting from "@/pages/book-meeting/index.vue"

enum RouteName {
    HOME = "home",
    BOOK_MEETING = "book-meeting"
}

const routes = [
    { path: "/", name: RouteName.HOME, component: Home },
    { path: "/book-meeting", name: RouteName.BOOK_MEETING, component: BookMeeting },
    { path: "/:pathMatch(.*)*", component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
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

export { RouteName, router }
