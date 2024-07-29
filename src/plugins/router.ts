import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/home/index.vue"
import BookMeeting from "@/pages/book-meeting/index.vue"
// import Mvp from "@/pages/mvp/index.vue"
import { titleCase } from "@/utils/strings"

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/book-meeting", name: "book-meeting", component: BookMeeting },
    // { path: "/mvp", name: "mvp", component: Mvp },
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
        return { top: 0, left: 0 }
    }
})

router.beforeEach((to) => {
    let page = titleCase(to.name as string)
    // TODO Handle acronyms in titleCase or another string util
    page = page.replace("Mvp", "MVP")
    document.title = `STP | ${page}`
})

export default router
