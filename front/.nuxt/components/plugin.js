import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  About: () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  Chatrs: () => import('../../components/Chatrs.vue' /* webpackChunkName: "components/chatrs" */).then(c => wrapFunctional(c.default || c)),
  Comments: () => import('../../components/Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Info: () => import('../../components/Info.vue' /* webpackChunkName: "components/info" */).then(c => wrapFunctional(c.default || c)),
  Lang: () => import('../../components/Lang.vue' /* webpackChunkName: "components/lang" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Market: () => import('../../components/Market.vue' /* webpackChunkName: "components/market" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  Price: () => import('../../components/Price.vue' /* webpackChunkName: "components/price" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  TableCoin: () => import('../../components/TableCoin.vue' /* webpackChunkName: "components/table-coin" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
