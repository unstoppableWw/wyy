<template>
  <div class="home">
    <TopNva></TopNva>
    <div class="content">
      <Swipe />
      <IconList />
      <MusicList />
    </div>
  </div>
</template>

<script setup>
import TopNva from "@/components/home/TopNav.vue"
import Swipe from "@/components/home/Swipe.vue"
import IconList from "@/components/home/IconList.vue"
import MusicList from "@/components/home/MusicList.vue"

</script>

<style lang="less" scoped>
.home {
  .content{
    margin: 0 10px;
  }
  
}
</style>
