import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Form from '../views/FormView.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/form', name: 'form', component: Form },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: '/',
})

export default router
