import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import BookMeeting from "../pages/BookMeeting.vue"

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/book-meeting", name: "book-meeting", component: BookMeeting },
    { path: "/about-us", name: "about-us", component: Home },
    { path: "/:pathMatch(.*)*", name: "not-found", component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
