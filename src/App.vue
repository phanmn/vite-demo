<template lang="pug">
img.mb-3(src='/@/assets/icons/logo.png' data-src='/@/assets/icons/logo.png' style='width: 200px')
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '/@/styles/style.css';
import '/@/styles/style.styl';
import store from './store/index';
import router from './router';

export default defineComponent({
  name: 'App',
  setup(props) {
  }
});
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>