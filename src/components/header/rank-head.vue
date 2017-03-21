<template>
  <div class="rank-head container" :style="style" id="transparent-header">
    <a class="rank-head-back" @click="routerBack"></a>
    {{title}}
  </div>
</template>

<script>
  export default {
    name: 'rank-head',
    props: ['title', 'to', 'style'],
    methods: {
//        回到上一页
      routerBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
