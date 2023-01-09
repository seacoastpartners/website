<template>
  <div class="nav-bar">
    <LogoComponent />
    <ButtonComponent text="Get Started" />
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
  transition: all 0.3s;
}

.nav-bar-scrolled {
  backdrop-filter: saturate(80%) blur(12px);
  border-bottom: 1px solid rgb(17, 134, 52);
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
