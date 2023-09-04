<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators=false>
        <van-swipe-item v-for="item in state.musicList" :key="item" class="my-swipe-item">
          <router-link :to="{path:'/itemmusic',query:{id:item.id}}">
            <img :src="item.picUrl" />
            <span class="playCount">
              <svg t="1693139792708" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4012" width="22" height="22">
                <path
                  d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
                  fill="#fffdff" p-id="4013"></path>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">
              {{ item.name }}
            </span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { getMusicList } from '@/request/api/home'
import { reactive, onMounted } from 'vue';

const state = reactive({
  musicList: []
})
onMounted(
  async () => {
    let res = await getMusicList();
    state.musicList = res.data.result
    
  }
)
let changeCount = function (num) {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num >= 10000) {
    return (num / 100000000).toFixed(1) + '万'
  }
}
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 6rem;
  margin-top: 10px;

  .musicContent {
    width: 100%;
    height: 4rem;

    .my-swipe {
      width: 100%;
      height: 200px;

      .my-swipe-item {
        margin-right: 10px;
        position: relative;
        font-size: 0px;

        .playCount {
          display: flex;
          position: absolute;
          top: 0;
          right: 5px;
          color: #fffdff;
          font-size: 16px;
          align-items: center;
        }

        .name {
          width: 100%;
          height: 25px;
          color: #747373;
          font-size: 14px;

        }

        img {
          width: 100%;
          height: 150px;
          border-radius: 10px;

        }
      }

    }

  }
}

.musicTop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;

  .title {
    font-size: 0.5rem;
    font-weight: 900;
  }

  .more {
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 12px;
    color: #ccc;
    margin-top: 5px;
  }
}
</style>