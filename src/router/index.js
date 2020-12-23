import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{title:'Home',requiresAuth: false},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta:{title:'About',requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


// 全局路由守卫
router.beforeEach((to, from, next) => {
  let isLogin = !!store.state.token
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
