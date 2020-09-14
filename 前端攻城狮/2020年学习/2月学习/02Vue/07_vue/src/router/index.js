import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/demo1',
    name:'demo1',
    component: ()=> import('../views/demo1/index.vue')
  },{
    path:'/demo2',
    name:'demo2',
    component: ()=> import('../views/demo2/router.vue')
  },{
    path:'/demo3',
    name:'demo3',
    component: ()=> import('../views/demo3/vuex.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
