import { getPhoneLogin } from '@/request/api/home'
import { getMusicLyric } from '@/request/api/item'
// import { getPhoneLogin } from '@/request/api/home'
import { createStore } from 'vuex'
export default createStore({
  state: {
    playList:[{
      al: {
        id: 150127127,
        name: '署前街少年',
        pic: 109951167805892380,
        picUrl: 'https://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg',
        pic_str: '109951167805892385'
      },
      id: 1974443814,
      name: '我记得',
      author: '赵雷'
    }],
    playListIndex: 0,
    isbtnShow: true,
    detailShow: false,
    lyric: {
      version: 11,
      lyric:
        '[00:00.00] 作词 : 赵雷\n[00:01.00] 作曲 : 赵雷\n[00:02.00] 制作人 : 赵雷\n[00:28.15]我带着比身体重的行李 游入尼罗河底  经过几道闪电  看到一堆光圈 不确定是不是这里\n[00:41.78]我看到几个人站在一起 他们拿着剪刀摘走我的行李 擦拭我的脑袋 没有机会返回去\n[00:54.05]\n[00:55.87]直到我听见一个声音 我确定是你\n[01:04.13]可你怎记得我\n[01:09.20]我带来了另界的消息 可我怎么告知你\n[01:17.94]注定失忆着相遇\n[01:22.15]\n[01:23.39]我记得这里是片树林 后面有个山坡 山坡上的枣树每当秋天到来 我们把枣装满口袋\n[01:37.27]我记得除了朋友我还 做过你的叔父 你总喜欢跟在我的屁股后面 只是为了那几个铜钱\n[01:50.96]我记得我们曾是恋人 后来战争爆发 你上战场后就再也没有回来 直到收不到你的信\n[02:04.54]我们总这样重复分离 却要重新开始 相互送别对方 说着来世再见 再次失忆着相聚\n[02:16.84]\n[02:18.54]呜 呜 呜 呜…\n[02:23.35]快来抱抱 快来抱抱我\n[02:31.68]呜 呜 呜 呜…\n[02:34.03]快来抱抱 快来抱抱我\n[02:41.30]\n[03:13.15]在路上我遇到了一位故去多年的人 她是如此年轻 扎着过肩马尾 露出和你一样的笑\n[03:26.78]她和我讲了很多关于你成长的故事 在星空另一端 思念从未停止 如同墓碑上的名字\n[03:39.23]\n[03:40.58]不要哭我最亲爱的人 我最好的玩伴 时空是个圆圈 直行或是转弯 我们最终都会相见\n[03:54.13]在城池的某个拐角处 在夕阳西下时 在万家灯火的某一扇窗纱里 人们失忆着相聚\n[04:06.47]\n[04:08.47]呜 快来抱抱 快来抱抱我\n[04:21.62]呜 快来抱抱 快来抱抱我 我终于找到你\n[05:03.42]呜 快来抱抱 快来抱抱我 我终于找到你\n[05:16.10]\n[05:18.08]\n[05:18.81] 编曲：赵雷\n[05:19.55] 电吉他：刘磊、谢星\n[05:20.29] 贝斯：Damien Banzigou\n[05:21.03] 鼓：Chris Trzcinski\n[05:21.77] 钢琴：姜伯虎\n[05:22.50] 打击乐：刘恒、Chris Trzcinski\n[05:23.24] Organ：赵雷\n[05:23.98] 口琴：赵雷\n[05:24.72] 和声：朱莉、旭东\n[05:25.46] 录音师：张俊\n[05:26.19] 混音师：时俊峰\n[05:26.93] 录音室：摩登天空、55TEC\n[05:27.67] 录音助理：陈彬彬、朱莉\n[05:28.41] 母带工程室：Sterling Sound\n[05:29.15] 母带工程师：Randy Merrill\n[05:29.88] 封面设计：韩东、小强、阿穆隆\n'
    },
    currentTime: 0,
    songs:[],
    duringTime:0,
    isLogin:false,//判断是否登录
    isFooterMusic:true,//
  },
  getters: {},
  mutations: {
    updateisFooterMusic:function(state){
      state.isFooterMusic=!state.isFooterMusic
    },
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    updateduringTime:function(state,value){
      state.duringTime=value
    },
    updatesongs: function (state, value) {
      state.songs=value
    },
    updateplayListIndex: function (state, value) {
      state.playListIndex=value
    },
    updateIsbtnShow: function (state) {
      state.isbtnShow = !state.isbtnShow
    },
    updatePlayList: function (state, value) {
      state.playList.al = value.al
      state.playList.id = value.id
      state.playList.name = value.name
      state.playList.author = value.ar[0].name
    },
    updatedetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyric: function (state, value) {
      state.lyric = value
    },
    updatecurrentTime: function (state, value) {
      state.currentTime = value
    }
  },
  actions: {
    getLyric: async function (context) {
      let res = await getMusicLyric(context.state.playList[context.state.playListIndex].id)
      context.commit('updateLyric', res.data.lrc)
    },
    getLogin: async function (context) {
      let res = await getPhoneLogin()
      return res
    }
  },
  modules: {}
})
