import { wrapFunctional } from './utils'

export { default as About } from '../../components/About.vue'
export { default as Chatrs } from '../../components/Chatrs.vue'
export { default as Comments } from '../../components/Comments.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Info } from '../../components/Info.vue'
export { default as Lang } from '../../components/Lang.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Market } from '../../components/Market.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Price } from '../../components/Price.vue'
export { default as Search } from '../../components/Search.vue'
export { default as Signin } from '../../components/Signin.vue'
export { default as TableCoin } from '../../components/TableCoin.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Vv } from '../../components/vv.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyChatrs = import('../../components/Chatrs.vue' /* webpackChunkName: "components/chatrs" */).then(c => wrapFunctional(c.default || c))
export const LazyComments = import('../../components/Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyInfo = import('../../components/Info.vue' /* webpackChunkName: "components/info" */).then(c => wrapFunctional(c.default || c))
export const LazyLang = import('../../components/Lang.vue' /* webpackChunkName: "components/lang" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMarket = import('../../components/Market.vue' /* webpackChunkName: "components/market" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyPrice = import('../../components/Price.vue' /* webpackChunkName: "components/price" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazySignin = import('../../components/Signin.vue' /* webpackChunkName: "components/signin" */).then(c => wrapFunctional(c.default || c))
export const LazyTableCoin = import('../../components/TableCoin.vue' /* webpackChunkName: "components/table-coin" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyVv = import('../../components/vv.vue' /* webpackChunkName: "components/vv" */).then(c => wrapFunctional(c.default || c))
