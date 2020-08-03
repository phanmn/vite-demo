<template lang="pug">
.authen-layout.flex.flex-col.items-center.h-screen.pt-4
  img.mb-3(src='/@/assets/icons/logo.png' style='width: 200px')
  router-view
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const AuthenLayout = defineComponent({

});

export default AuthenLayout;
</script>

<style lang="stylus" scoped>
.authen-layout
  background-color #f5faff
</style>