import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 导入组件
import index from '../views/index.vue'
import rank from '../views/rank.vue'
import rank_info from '../views/rank_info.vue'
import plist from '../views/plist.vue'
import plist_info from '../views/plist_info.vue'
import singer from '../views/singer.vue'
import singer_list from '../views/singer_list.vue'
import singer_info from '../views/singer_info.vue'
import search from '../views/search.vue'

// 配置路由
export default new Router({
  routes: [
    // 初始路由
    {name: '/', path: '/', redirect: 'index'},
    {name: 'index', path: '/index', component: index},
    {name: 'rank', path: '/rank', component: rank},
    {name: 'rank_info', path: '/rank/info/:id', component: rank_info},
    {name: 'plist', path: '/plist', component: plist},
    {name: 'plist_info', path: '/plist/info/:id', component: plist_info},
    {name: 'singer', path: '/singer', component: singer},
    {name: 'singer_list', path: '/singer/list/:id', component: singer_list},
    {name: 'singer_info', path: '/singer/info/:id', component: singer_info},
    {name: 'search', path: '/search', component: search}
  ]
})
