import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

let Home = () => import('@/components/views/Home')
let Itemize = () => import('@/components/views/Itemize')
let Car = () => import('@/components/views/Car')
let Mine = () => import('@/components/views/Mine')
// icons
let Sign = () => import('@/components/home/icons/sign')
let Gift = () => import('@/components/home/icons/Gift')
let Bargin = () => import('@/components/home/icons/Bargin')
let Colimn = () => import('@/components/home/icons/Colimn')
// home的详情
let Sortxq = () => import('@/components/home/sorts/Sortxq')
let Peoplexq = () => import('@/components/home/Peopleqi/Peoplexq')

// 分类详情
// let Itemizexq = () => import('@/components/itemize/Itemizexq')
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
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    },
    {
      path: '/bargin',
      name: 'Bargin',
      component: Bargin
    },
    {
      path: '/Colimn',
      name: 'Colimn',
      component: Colimn
    },
    {   // 精选专题详情页
      path: '/sort/sortxq/:id',
      name: 'Sortxq',
      component: Sortxq
    },
    {   // 人气专题详情页
      path: '/Peopleqi/Peoplexq/:id',
      name: 'Peoplexq',
      component: Peoplexq
    },
  ]
})
