<template>
  <div class="header">
    <headLogo></headLogo>
    <rank-head v-if="head.toggle" :title="head.title" :style="head.style"></rank-head>
    <head-nav v-else></head-nav>
  </div>
</template>

<script>
  //  导入子组件
  import headLogo from './head_logo';
  import headNav from './head_nav'
  import rankHead from './rank-head'
  import {mapGetters} from 'vuex'

  export default {
    name: 'k-head',
    computed: {
//    使用扩展运算符遍历getters中的head
      ...mapGetters(['head'])
    },
//    定义子组件
    components: {
      headLogo,
      headNav,
      rankHead
    }
  }
</script>
