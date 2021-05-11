import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ff7b45ec = () => interopDefault(import('../pages/coins_list/index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _935bce04 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _d6905b98 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _240fcc1c = () => interopDefault(import('../pages/coins_list/_id.vue' /* webpackChunkName: "pages/coins_list/_id" */))
const _12007414 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ff7b45ec,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _935bce04,
    name: "inspire"
  }, {
    path: "/search",
    component: _d6905b98,
    name: "search"
  }, {
    path: "/coins_list/:id",
    component: _240fcc1c,
    name: "coins_list-id"
  }, {
    path: "/",
    component: _12007414,
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
