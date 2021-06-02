import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d6917ae = () => interopDefault(import('../pages/coins_list/index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _fa77d44c = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _cc0ff076 = () => interopDefault(import('../pages/omne.vue' /* webpackChunkName: "pages/omne" */))
const _24366c50 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _5e152d96 = () => interopDefault(import('../pages/coins_list/_id.vue' /* webpackChunkName: "pages/coins_list/_id" */))
const _f3796c5c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5d6917ae,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _fa77d44c,
    name: "inspire"
  }, {
    path: "/omne",
    component: _cc0ff076,
    name: "omne"
  }, {
    path: "/search",
    component: _24366c50,
    name: "search"
  }, {
    path: "/coins_list/:id",
    component: _5e152d96,
    name: "coins_list-id"
  }, {
    path: "/",
    component: _f3796c5c,
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
