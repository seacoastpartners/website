<template>
  <div @click="handleClick" class="logo-container">
    <div class="logo">STP</div>
  </div>
</template>

<script setup>
import router from '@/router'

function handleClick() {
  router.push({ name: 'home' })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  color: rgb(0, 123, 174);
  background-color: black;
  padding: 6px 12px 6px 12px;
}
.logo {
  max-width: fit-content;
  font-size: 36px;
  font-weight: 900;
  cursor: pointer;
}

.logo-subscript {
  font-size: 12px;
}

@media (max-width: 830px) {
  .logo-subscript {
    font-size: 10px;
  }

  .logo {
    font-size: 24px;
  }
}
</style>
