<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style>
body {
  background-color: rgb(0, 0, 0);
  margin: 0px;
}

.app-container {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 48px;
  font-family: 'Times New Roman', serif;
  margin-bottom: 30px;
  font-weight: 900;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #efeddd;
  margin: 0px;
}
</style>
