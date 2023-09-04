import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/HomeView.vue')
  },
  {
    path: '/itemmusic',
    name: 'itemmusic',
    component: ()=> import('../views/ItemMusic.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: ()=> import('../views/Search.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/infouser',
    name: 'infouser',
    //路由守卫
    beforeEnter:(to,from,next) => {
      if(store.state.isLogin){
        next()
      }else{
        next('/login')
      }
    },
    component: ()=> import('../views/InfoUser.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from)=>{
  if(to.path=='/login'){
    store.state.isFooterMusic=false
  }else{
    store.state.isFooterMusic=true
  }
})

export default router
