import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

// 导入mint-ui组件
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/neat-min.css'
import './assets/css/style.css'

// 使用组件
Vue.use(mint)
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
