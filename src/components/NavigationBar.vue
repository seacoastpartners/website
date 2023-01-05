<template>
  <div class="nav-bar">
    <LogoComponent />
    <ButtonComponent />
  </div>
</template>

<script setup>
import LogoComponent from './LogoComponent.vue'
import ButtonComponent from './ButtonComponent.vue'

import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const nav = document.querySelector('.nav-bar')
  if (window.scrollY > 0) {
    nav.classList.add('nav-bar-scrolled')
  } else {
    nav.classList.remove('nav-bar-scrolled')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 100px 12px 100px;

  transition: background-color 0.3s;
}

.nav-bar-scrolled {
  background-color: rgba(12, 12, 12, 0.5);
  backdrop-filter: blur(8px);
}

@media (max-width: 830px) {
  .nav-bar {
    padding: 12px;
  }

  .logo {
    font-size: 24px;
  }
}
</style>
