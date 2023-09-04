<template>
  <div class="login">
    <div class="container">
      <h1>登录</h1>
      <input type="text" placeholder="用户名" v-model="username">
      <input type="password" placeholder="密码" v-model="userpassword">
      <button @click="upload">登录</button>
    </div>
  </div>
</template>


<script setup>
import router from '@/router';
import { ref } from 'vue';
import { useStore } from 'vuex';
let username = ref('')
let userpassword = ref('')
let store = useStore()
let upload =async function () {
  let {data}=await store.dispatch("getLogin")
  if(data.code==200){
    store.state.isLogin=true
    router.push('/')
  }else{
    alert("密码错误")
  }
}
</script>

<style lang="less" scoped>
.login {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 90%;
    text-align: center;
  }

  h1 {
    font-size: 24px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }

}
</style>