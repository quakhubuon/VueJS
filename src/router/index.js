import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    ,
    {
      path: '/create/:id',
      name: 'update',
      component: CreateView
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: DetailView
    }
  ]
})

export default router
