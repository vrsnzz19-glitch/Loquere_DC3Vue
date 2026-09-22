import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../composables/views/HomeView.vue'
import MainView from '../composables/views/MainView.vue'
import AboutView from '../composables/views/AboutView.vue'

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