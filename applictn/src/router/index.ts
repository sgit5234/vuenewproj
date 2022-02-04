import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import login from '../components/login.vue'
import registration from '../components/registration.vue'
import rough from '../components/rough.vue'
import roughchild from '../components/roughchild.vue'
import parent from '../components/parent.vue'
import child from '../components/child.vue'
import productone from '../components/productone.vue'
import producttwo from '../components/producttwo.vue'
import header from '../components/header.vue'
import cards from '../components/cards.vue'

const routes: Array<RouteRecordRaw> = [
  {path:'/',name:'header',component:header},
  {path:'/login',name:'login',component:login},
  {path:'/rough', name:'rough',component:rough},
  {path:'/roughchild', name:'roughchild',component:roughchild},
  {path:'/parent', name:'parent' , component:parent},
  {path:'/child', name:'child' , component:child},
  {path:'/productone', name:'productone',component:productone},
  {path:'/producttwo', name:'producttwo',component:producttwo},
  {path:'/cards', name:'cards',component:cards},
  {
    path: '/registration',
    name: 'registration',
    component: registration
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
