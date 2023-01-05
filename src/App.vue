<template>
  <div class="app-container">
    <HomeView />
  </div>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style>
body {
  background-color: #0c0c0c;
  margin: 0px;
}

.app-container {
  display: flex;
  flex-direction: column;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  margin: 0px;
}
</style>
