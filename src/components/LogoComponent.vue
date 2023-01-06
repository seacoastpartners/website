<template>
  <div @click="handleClick" class="logo-container">
    <div class="logo">STP</div>
    <div class="logo-subscript">SEACOAST TECHNICAL PARTNERS</div>
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
}
.logo {
  max-width: fit-content;
  font-size: 30px;
  font-weight: 900;
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
