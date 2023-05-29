import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/n5',
    name: 'N5',
    component: () => import('../views/N5.vue')
  },
  {
    path: '/n5/lessons',
    name: 'N5Lessons',
    component: () => import('../views/N5/Lessons.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
