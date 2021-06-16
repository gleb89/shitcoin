import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d50661b = () => interopDefault(import('../pages/coins_list/index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _632f68cd = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _40f7d1b2 = () => interopDefault(import('../pages/omne.vue' /* webpackChunkName: "pages/omne" */))
const _1e12d2b9 = () => interopDefault(import('../pages/reqistr.vue' /* webpackChunkName: "pages/reqistr" */))
const _57cc66f6 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _0b31997a = () => interopDefault(import('../pages/coins_list/_id.vue' /* webpackChunkName: "pages/coins_list/_id" */))
const _818684f6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2d50661b,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _632f68cd,
    name: "inspire"
  }, {
    path: "/omne",
    component: _40f7d1b2,
    name: "omne"
  }, {
    path: "/reqistr",
    component: _1e12d2b9,
    name: "reqistr"
  }, {
    path: "/search",
    component: _57cc66f6,
    name: "search"
  }, {
    path: "/coins_list/:id",
    component: _0b31997a,
    name: "coins_list-id"
  }, {
    path: "/",
    component: _818684f6,
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
