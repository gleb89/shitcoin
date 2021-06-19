import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1fef44a = () => interopDefault(import('../pages/coins_list/index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _45a8910d = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _10099172 = () => interopDefault(import('../pages/omne.vue' /* webpackChunkName: "pages/omne" */))
const _008bfaf9 = () => interopDefault(import('../pages/reqistr.vue' /* webpackChunkName: "pages/reqistr" */))
const _25ba9c45 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _351c4303 = () => interopDefault(import('../pages/coins_list/_id.vue' /* webpackChunkName: "pages/coins_list/_id" */))
const _5b3a1476 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e1fef44a,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _45a8910d,
    name: "inspire"
  }, {
    path: "/omne",
    component: _10099172,
    name: "omne"
  }, {
    path: "/reqistr",
    component: _008bfaf9,
    name: "reqistr"
  }, {
    path: "/search",
    component: _25ba9c45,
    name: "search"
  }, {
    path: "/coins_list/:id",
    component: _351c4303,
    name: "coins_list-id"
  }, {
    path: "/",
    component: _5b3a1476,
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
