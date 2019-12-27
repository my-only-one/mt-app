// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
// import Header from '@/components/header/Header'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'
import Goods from './components/goods/Goods'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 创建routes
const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: Goods},
  {path: '/ratings', component: Ratings},
  {path: '/seller', component: Seller}
]

// 实例router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active' // 官方默认提供的
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
