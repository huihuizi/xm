import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

let Home = () => import('@/components/views/Home')
let Itemize = () => import('@/components/views/Itemize')
let Car = () => import('@/components/views/Car')
let Mine = () => import('@/components/views/Mine')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home",
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/itemize',
      name: 'Itemize',
      component: Itemize
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
