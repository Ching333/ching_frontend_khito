import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreLists from '../views/ExploreLists.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ExploreLists',
    component: ExploreLists
  },
  {
    path: '/EditingDesk',
    name: 'EditingDesk',
    component: () => import('../views/EditingDesk.vue')
  },
  {
    path: '/Member',
    name: 'Member',
    component: () => import('../views/Member.vue'),
  },
  {
    path: '/ExplorePlaces',
    name: 'ExplorePlaces',
    component: () => import('../views/ExplorePlaces.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
