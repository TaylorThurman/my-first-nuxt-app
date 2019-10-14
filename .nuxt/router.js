import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d1c6cc0 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _30e89823 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _53a2e98e = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _c7f0212c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/users",
    component: _3d1c6cc0,
    children: [{
      path: "",
      component: _30e89823,
      name: "users"
    }, {
      path: ":id",
      component: _53a2e98e,
      name: "users-id"
    }]
  }, {
    path: "/",
    component: _c7f0212c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
