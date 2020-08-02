import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'
import home from '@/views/home/index'
import services from '@/views/services/index'
import aboutMe from '@/views/aboutMe/index'

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/',
    children: [{
      path: '/',
      component: home,
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    },
    {
      path: '/services',
      component: services,
      name: 'Catalogo',
      meta: { title: 'services', icon: 'service', noCache: true }
    },
    {
      path: '/about',
      component: aboutMe,
      name: 'Sobre',
      meta: { title: 'empresa', icon: 'service', noCache: true }
    },
    {
      path: '/contacts',
      component: services,
      name: 'Contato',
      meta: { title: 'services', icon: 'service', noCache: true }
    }
    ]
  },
]

export default new Router({
  //mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
