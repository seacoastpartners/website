<template>
  <div class="nav-bar" />
</template>

<script setup>
import { onMounted, onUnmounted } from "vue"

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

function handleScroll() {
    const nav = document.querySelector(".nav-bar")
    if (window.scrollY > 0) {
        nav.classList.add("nav-bar-scrolled")
    } else {
        nav.classList.remove("nav-bar-scrolled")
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  /* visibility: hidden; */
  max-width: 100%;
  /* position: sticky; */
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  padding: 12px 18% 12px 18%;
}

/* .nav-bar-scrolled {
  visibility: visible;
  backdrop-filter: saturate(80%) blur(12px);
  background-color: rgba(0, 0, 0, 0.8);
} */

@media (max-width: 830px) {
  .nav-bar {
    padding: 12px;
  }

  .logo {
    font-size: 24px;
  }
}
</style>
