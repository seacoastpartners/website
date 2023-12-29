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

section {
    padding: 50px 18% 50px 18%;
}

h2 {
    font-size: 48px;
    font-family: 'Times New Roman', serif;
    margin-bottom: 30px;
    font-weight: 900;
}

p {
    font-size: 24px;
    font-family: 'Times New Roman', serif;
    line-height: 1.5;
}

#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #efeddd;
    margin: 0px;
}

.fade-in-on-scroll {
    opacity: 0;
    /* Start elements as invisible */
    transition: opacity 1s ease-out, transform 1s ease-out;
    /* Increased duration for transform */
}
</style>
