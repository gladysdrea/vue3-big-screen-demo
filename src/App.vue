<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>
<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
}
</style>
