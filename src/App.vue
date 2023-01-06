<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>
// import HomeView from './views/HomeView.vue'
</script>

<style>
body {
  background-color: rgb(12, 12, 12);
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
