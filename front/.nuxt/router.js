import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3338f124 = () => interopDefault(import('../pages/coins_list/index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _0218ee1a = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7f182cd0 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _a32ee554 = () => interopDefault(import('../pages/coins_list/_id.vue' /* webpackChunkName: "pages/coins_list/_id" */))
const _19713212 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3338f124,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _0218ee1a,
    name: "inspire"
  }, {
    path: "/search",
    component: _7f182cd0,
    name: "search"
  }, {
    path: "/coins_list/:id",
    component: _a32ee554,
    name: "coins_list-id"
  }, {
    path: "/",
    component: _19713212,
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
