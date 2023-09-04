<template>
  <div class="search">
    <div class="top">
      <svg t="1693568512275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4010" width="32" height="32" @click="router.back(-1)">
        <path
          d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z"
          fill="#8a8a8a" p-id="4011"></path>
      </svg>
      <input type="text" placeholder="搜索你想听的歌..." v-model="searchname" @keyup.enter="enterKey">
    </div>
    <div class="history">
      <span class="title">历史</span>
      <span class="label" v-for="item in keyWordList" :key="item" @click="historysearch(item)">
        {{ item }}
      </span>
    </div>
    <div class="content">
      <div class="content_top">
        <div class="left">
          <svg t="1693226472718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="11127" width="32" height="32">
            <path
              d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
              fill="#000" p-id="11128"></path>
          </svg>
          <span>播放全部(共{{songlist.length}}首)</span>
        </div>
      </div>
      <div class="item" v-for="(item,i) in songlist" :key="item" @click="play(item)">
        <div class="left">{{ i+1 }}</div>
        <div class="mid">
          <span class="name">{{ item.name }}</span>
        </div>
        <div class="right">
          <svg v-if="item.mvid" t="1693228265998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="11330" width="32" height="32">
            <path
              d="M885.333333 938.666667H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334zM138.666667 128a10.666667 10.666667 0 0 0-10.666667 10.666667v746.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h746.666666a10.666667 10.666667 0 0 0 10.666667-10.666667V138.666667a10.666667 10.666667 0 0 0-10.666667-10.666667z m298.666666 597.286667a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
              fill="#000" p-id="11331"></path>
          </svg>
          <svg t="1693228293913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="12386" width="32" height="32">
            <path
              d="M238.933333 187.733333h204.8a34.133333 34.133333 0 0 1 34.133334 34.133334v204.8a34.133333 34.133333 0 0 1-34.133334 34.133333H238.933333a34.133333 34.133333 0 0 1-34.133333-34.133333V221.866667a34.133333 34.133333 0 0 1 34.133333-34.133334z m17.066667 34.133334a17.066667 17.066667 0 0 0-17.066667 17.066666v170.666667a17.066667 17.066667 0 0 0 17.066667 17.066667h170.666667a17.066667 17.066667 0 0 0 17.066666-17.066667V238.933333a17.066667 17.066667 0 0 0-17.066666-17.066666H256zM273.066667 529.066667h204.8a34.133333 34.133333 0 0 1 34.133333 34.133333v204.8a34.133333 34.133333 0 0 1-34.133333 34.133333H273.066667a34.133333 34.133333 0 0 1-34.133334-34.133333V563.2a34.133333 34.133333 0 0 1 34.133334-34.133333z m17.066666 34.133333a17.066667 17.066667 0 0 0-17.066666 17.066667v170.666666a17.066667 17.066667 0 0 0 17.066666 17.066667h170.666667a17.066667 17.066667 0 0 0 17.066667-17.066667V580.266667a17.066667 17.066667 0 0 0-17.066667-17.066667H290.133333zM546.133333 221.866667h204.8a34.133333 34.133333 0 0 1 34.133334 34.133333v204.8a34.133333 34.133333 0 0 1-34.133334 34.133333H546.133333a34.133333 34.133333 0 0 1-34.133333-34.133333V256a34.133333 34.133333 0 0 1 34.133333-34.133333z m17.066667 34.133333a17.066667 17.066667 0 0 0-17.066667 17.066667v170.666666a17.066667 17.066667 0 0 0 17.066667 17.066667h170.666667a17.066667 17.066667 0 0 0 17.066666-17.066667V273.066667a17.066667 17.066667 0 0 0-17.066666-17.066667H563.2zM580.266667 563.2h204.8a34.133333 34.133333 0 0 1 34.133333 34.133333v204.8a34.133333 34.133333 0 0 1-34.133333 34.133334H580.266667a34.133333 34.133333 0 0 1-34.133334-34.133334V597.333333a34.133333 34.133333 0 0 1 34.133334-34.133333z m17.066666 34.133333a17.066667 17.066667 0 0 0-17.066666 17.066667v170.666667a17.066667 17.066667 0 0 0 17.066666 17.066666h170.666667a17.066667 17.066667 0 0 0 17.066667-17.066666V614.4a17.066667 17.066667 0 0 0-17.066667-17.066667H597.333333z"
              fill="#000" p-id="12387"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter} from 'vue-router';
import {getSearchMusic} from '@/request/api/home'
import { useStore } from "vuex";
const router = useRouter();
const songlist =ref("")
const store = useStore()
onMounted(()=>{
  keyWordList.value=JSON.parse(localStorage.getItem('keyWordList'))
})

let keyWordList = ref(['周杰伦'])
let searchname = ""
let enterKey =async function () {
  let searchlist = await getSearchMusic(searchname.trim())
  songlist.value=searchlist.data.result.songs
  console.log(songlist.value);
  keyWordList.value.push(searchname.trim())
  keyWordList.value = [...new Set(keyWordList.value)]
  if (keyWordList.value.length > 3) {
    keyWordList.value.splice(0, 1)
  }
  localStorage.setItem('keyWordList',JSON.stringify(keyWordList.value))
}

let historysearch = async function(item){
  let searchlist = await getSearchMusic(item.trim())
  songlist.value=searchlist.data.result.songs
  console.log(songlist.value);
  keyWordList.value.push(searchname.trim())
  keyWordList.value = [...new Set(keyWordList.value)]
  if (keyWordList.value.length > 3) {
    keyWordList.value.splice(0, 1)
  }
  localStorage.setItem('keyWordList',JSON.stringify(keyWordList.value))
}

let play=function(item){
  item.al=item.album
  item.al.picUrl=item.album.artist.img1v1Url
  console.log(store.state.playList);
  store.commit("pushPlayList",item)
  store.commit("updateplayListIndex",store.state.playList.length-1)
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;

  padding: 0 10px;
  padding-bottom: 100px;

  .top {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    input {
      border: none;
      border-left: 2px solid #a7a6a6;
      margin-left: 20px;
      padding-left: 10px;
      font-size: 16px;
      height: 70%;
    }
  }

  .history {
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    justify-content: flex-start;;
    flex-wrap: wrap;
    .title {
      font-size: 20px;
      font-weight: 900;
      margin-right: 10px;
    }

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      height: 25px;
      border-radius: 40px;
      background-color: #a7a6a6;
      font-size: 18px;
      margin-left: 10px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    
    .content_top {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
          margin-right: 10px;
        }
        span {
          font-size: 14px;
          font-weight: 900;
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 40px;
        font-size: 18px;
        border-radius: 40px;
        color: #000;
      }

    }

    .item {
      margin-top: 10px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;

      .left {
        width: 30px;
        height: 100%;
        font-size: 16px;
        display: flex;
      align-items: center;

      }

      .mid {
        width: 250px;
        display: flex;
        flex-direction: column;

        .name {
          font-size: 16px;
          font-weight: bold;
        }

        .arname {
          font-size: 14px;
          color: #7f7f7f;
        }
      }

      .right {
        position: absolute;
        right: 0;
      }
    }
  }


}

.history {
  width: 100%;
  height: 50px;
}</style>