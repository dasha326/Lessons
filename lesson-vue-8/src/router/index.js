import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    ruName: 'Главная',
    component: HomeView,
    inMenu: true
  },
  {
    path: '/posts',
    name: 'posts',
    ruName: 'Статьи',
    component: PostsView,
    inMenu: true
  },
  {
    path: '/posts/post-:id',
    name: 'post',
    ruName: 'Статьи',
    component: PostView,
    inMenu: false
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
