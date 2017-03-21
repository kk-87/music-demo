<template>
  <div class="logo-container">
    <div class="head-logo">
      <router-link to="/index">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png">
      </router-link>
    </div>
    <div class="head-search" @click="searchRouter">
      <img src="http://m.kugou.com/v3/static/images/index/search.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head-logo',
    methods: {
//      点击跳转到搜索组件
      searchRouter(){
        this.$store.commit('showDetailPlayer',false);
        this.$router.push({path: '/search'});
      }
    }
  }
</script>
