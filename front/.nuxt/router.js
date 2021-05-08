import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f39b7c3 = () => interopDefault(import('../pages/coins_list/index.vue' /* webpackChunkName: "pages/coins_list/index" */))
const _6187cbb6 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _d4f4dfa6 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _1b14934a = () => interopDefault(import('../pages/coins_list/_name.vue' /* webpackChunkName: "pages/coins_list/_name" */))
const _96143646 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4f39b7c3,
    name: "coins_list"
  }, {
    path: "/inspire",
    component: _6187cbb6,
    name: "inspire"
  }, {
    path: "/search",
    component: _d4f4dfa6,
    name: "search"
  }, {
    path: "/coins_list/:name",
    component: _1b14934a,
    name: "coins_list-name"
  }, {
    path: "/",
    component: _96143646,
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
