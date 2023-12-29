import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/HomeView.vue"
import Form from "../views/FormView.vue"

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/form", name: "form", component: Form },
    { path: "/about-us", name: "about-us", component: Home },
    { path: "/:pathMatch(.*)*", name: "not-found", component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
