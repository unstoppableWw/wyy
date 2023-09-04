<template>
  <div class="FooterMusic">
    <van-popup v-model:show="store.state.detailShow" position="bottom" :style="{ height: '100%' }">
      <MusicDetail :play="play"/>
    </van-popup>
    <div class="left">
      <img :src="playList[store.state.playListIndex].al.picUrl" alt="" :class="{ play: !store.state.isbtnShow, pause: store.state.isbtnShow }"
        @click="detailshow">
      <div class="detail">
        <p class="name">{{ playList[store.state.playListIndex].name }}</p>
        <p class="title">横滑切换下一首歌曲</p>
      </div>
    </div>
    <div class="right">
      <svg @click="play" v-if="store.state.isbtnShow" t="1693287366271" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="6280" width="32" height="32">
        <path
          d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
          fill="#5C5C66" p-id="6281"></path>
      </svg>
      <svg @click="play" v-if="!store.state.isbtnShow" t="1693287182759" class="icon" viewBox="0 0 1024 1024"
        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5256" width="32" height="32">
        <path
          d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z"
          fill="#5C5C66" fill-opacity=".9" p-id="5257"></path>
      </svg>
      <svg t="1693280401742" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4217" width="32" height="32">
        <path
          d="M42.666667 106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h896a21.333333 21.333333 0 0 1 0 42.666667H64a21.333333 21.333333 0 0 1-21.333333-21.333333z m21.333333 405.333333h597.333333a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m384 341.333333H64a21.333333 21.333333 0 0 0 0 42.666667h384a21.333333 21.333333 0 0 0 0-42.666667z m516.513333-299.146666a21.333333 21.333333 0 0 1-25.333333-16.34c-2.726667-12.586667-9.8-36.313333-26.533333-53.733334-7.213333-7.446667-15.273333-12.886667-23.98-16.113333a21.18 21.18 0 0 1-4.36-2.186667A140.893333 140.893333 0 0 1 853.333333 438v436.666667c0 15.633333-4.5 30.666667-13.38 44.666666-8.053333 12.666667-19.333333 23.94-33.613333 33.44-27.64 18.433333-64 28.58-102.34 28.58s-74.666667-10.146667-102.34-28.58c-14.253333-9.5-25.56-20.746667-33.613333-33.44-8.88-14-13.38-29.013333-13.38-44.666666s4.5-30.666667 13.38-44.666667c8.053333-12.666667 19.333333-23.94 33.613333-33.44C629.333333 778.146667 665.646667 768 704 768s74.666667 10.146667 102.34 28.58c1.48 0.98 2.913333 2 4.326667 3.006667V320a21.333333 21.333333 0 0 1 42.626666-1.266667c1.073333 18.04 5.806667 52.666667 25.446667 82.08 7.713333 11.553333 16.846667 21.006667 27.153333 28.133334 13.853333 5.513333 26.453333 14.113333 37.493334 25.606666 22.813333 23.753333 32.966667 53.493333 37.466666 74.266667a21.333333 21.333333 0 0 1-16.34 25.366667zM810.666667 874.666667c0-20.82-17.54-35.62-28-42.586667-20.706667-13.806667-48.666667-21.413333-78.666667-21.413333s-58 7.606667-78.666667 21.413333c-10.453333 6.966667-28 21.766667-28 42.586667s17.54 35.62 28 42.586666c20.706667 13.806667 48.666667 21.413333 78.666667 21.413334s58-7.606667 78.666667-21.413334c10.46-6.966667 28-21.766667 28-42.586666z"
          fill="#5C5C66" p-id="4218"></path>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[store.state.playListIndex].id}.mp3`"></audio>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import MusicDetail from "@/components/item/MusicDetail.vue"
import { ref, computed} from "vue";
const audio = ref(null)
const interval =ref(null)
const store = useStore()
let playList = computed(() => store.state.playList)
let play = () => {
  if (store.state.isbtnShow) {
    updateTime()
    audio.value.play()
    store.commit('updateIsbtnShow')
    store.commit('updateduringTime',audio.value.duration)
    store.dispatch('getLyric')
  }
  else{
   if(interval.value){
    clearInterval(interval.value)
    interval.value=null
   }
    audio.value.pause()
    store.commit('updateIsbtnShow')
  }
}
let detailshow = () => {
  store.commit('updatedetailShow')
}
let updateTime=()=>{
    interval.value=setInterval(()=>{
      store.commit('updatecurrentTime',audio.value.currentTime)
  },1000)
}
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 80px;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #cfcccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 10px;
      animation: rotateImg 10s linear infinite;
    }

    .play {
      animation: rotateImg 10s linear infinite;
    }

    .pause {
      animation-play-state: paused;
    }

    @keyframes rotateImg {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    .detail {
      width: 200px;
      height: 100%;

      .name {
        font-size: 16px;
        font-weight: 900;

      }

      .title {
        font-size: 12px;
        color: #7f7f7f;
      }
    }


  }

  .right {
    width: 100px;
    height: 30px;

    .icon {
      margin-right: 10px;
    }
  }
}
</style>