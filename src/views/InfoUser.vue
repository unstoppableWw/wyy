<template>
  <div id="app">
    <header>
      <h1>网易云个人中心</h1>
    </header>
    <div class="container">
      <div class="profile">
        <h2>个人信息</h2>
        <p>用户名：</p>
        <p>邮箱：</p>
        <p>性别：</p>
        <!-- 其他个人信息 -->
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

header h1 {
  font-size: 24px;
}

.profile {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile h2 {
  font-size: 20px;
}

.profile p {
  font-size: 16px;
}

</style>