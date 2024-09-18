import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      // id: is a a wildcard
      path: '/projects/:id',
      name: 'ProjectView',
      component: () => import('@/views/SingleProjectView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: h('p', { style: 'color:red' }, '404 Not Found')
    }
  ]
})

export default router
