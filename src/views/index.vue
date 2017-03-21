<template>
  <div>
    <mt-swipe :auto="5000">
      <mt-swipe-item>
        <img src="../assets/banner1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner3.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/banner4.jpg">
      </mt-swipe-item>
    </mt-swipe>

    <div>
      <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)">
        <img src="../assets/images/download_icon.png" width="20" height="20">
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import {Swipe, SwipeItem, Indicator, Cell} from 'mint-ui'
  import list_index from '../jsons/list_index'

  export default{
    data(){
      return {
        songList: []
      }
    },
//    初始化调用方法
    created(){
      this.get();
    },
    components: {},
    methods: {
//    获取数据
      get(){
        Indicator.open()
        setTimeout(() => {
          Indicator.close();
          this.songList = list_index;
        }, 1000)
      },
      playAudio(index){
        var hash = this.songList[index].hash;
        this.$store.dispatch('getSong', hash);
        this.$store.dispatch('getLrc', hash);
      }
    }
  }
</script>
<style>
  .mint-swipe {
    height: 39vw !important;
  }

  .mint-swipe-indicator {
    width: 12px !important;
    height: 12px !important;
  }

  .mint-swipe-indicators {
    bottom: 5px !important;
  }
</style>

