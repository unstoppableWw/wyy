<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import {getBanner} from '@/request/api/home'
import {reactive,onMounted } from 'vue';
    const state = reactive({
      images:[],
    })
    onMounted(async()=>{
      let res = await getBanner();
      state.images=res.data.banners
    })
</script>

<style lang="less" >
#swiperTop {
  .van-swipe {
    width: 100%;
    .van-swipe-item {
      img {
        width: 100%;
        height: 200px;
      }
    }

    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }


  }
}
</style>