import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/assignments', name: 'Assignments', component: MainView },
  { path: '/about', name: 'About', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router