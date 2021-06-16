import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d57c96b4 = () => interopDefault(import('..\\pages\\coins_list\\index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _577f9eee = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _5012f914 = () => interopDefault(import('..\\pages\\omne.vue' /* webpackChunkName: "pages/omne" */))
const _e1b8cb16 = () => interopDefault(import('..\\pages\\reqistr.vue' /* webpackChunkName: "pages/reqistr" */))
const _b399c56e = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _ca3eaee4 = () => interopDefault(import('..\\pages\\coins_list\\_id.vue' /* webpackChunkName: "pages/coins_list/_id" */))
const _08144441 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/coins_list",
    component: _d57c96b4,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _577f9eee,
    name: "inspire"
  }, {
    path: "/omne",
    component: _5012f914,
    name: "omne"
  }, {
    path: "/reqistr",
    component: _e1b8cb16,
    name: "reqistr"
  }, {
    path: "/search",
    component: _b399c56e,
    name: "search"
  }, {
    path: "/coins_list/:id",
    component: _ca3eaee4,
    name: "coins_list-id"
  }, {
    path: "/",
    component: _08144441,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
