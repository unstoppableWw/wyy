<template>
  <router-view/>
  <FooterMusic v-show="store.state.isFooterMusic"/>
  
</template>
<script setup>
import FooterMusic from './components/item/FooterMusic.vue';
import store from './store';
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

</style>
