import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Lesson1 from '../views/Lesson1.vue'
import Lesson2 from '../views/Lesson2.vue'
import Lesson3 from '../views/Lesson3.vue'
import Lesson4 from '../views/Lesson4.vue'
import Lesson5 from '../views/Lesson5.vue'
import Page404 from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lesson1',
    name: 'Lesson1',
    component: Lesson1
  },
  {
    path: '/lesson2',
    name: 'Lesson2',
    component: Lesson2
  },
  {
    path: '/lesson3',
    name: 'Lesson3',
    component: Lesson3
  },
  {
    path: '/lesson4',
    name: 'Lesson4',
    component: Lesson4
  },
  {
    path: '/lesson5',
    name: 'Lesson5',
    component: Lesson5
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page404',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
