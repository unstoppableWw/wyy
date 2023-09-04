<template>
  <div>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
  </div>
</template>

<script setup>
import ItemMusicTop from "@/components/item/itemMusicTop.vue"
import ItemMusicList from "@/components/item/itemMusicList.vue"
import { getMusicItemList,getItemList } from "@/request/api/item";
import { reactive } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const state = reactive({
  playlist:{},
  itemList:[],
})
onMounted(async()=>{
  let id=useRoute().query.id;
  let res=await getMusicItemList(id);
  state.playlist=res.data.playlist
  sessionStorage.setItem('itemDetail',JSON.stringify(state))

  //获取歌单歌曲
  let result=await getItemList(id);
  state.itemList=result.data.songs
  console.log(result)
})

</script>

<style lang="less" scoped>

</style>