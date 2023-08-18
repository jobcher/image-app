import { createRouter, createWebHistory } from 'vue-router'

const homeView = () => import('../views/HomeView.vue')
const aboutView = () => import('../views/AboutView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
