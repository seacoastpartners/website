<template>
  <div @click="handleClick" class="button">Get Started</div>
</template>

<script setup>
import router from '@/router'

function handleClick() {
  router.push({ name: 'form' })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  width: fit-content;
  font-size: 16px;
  font-weight: 300;
  border-bottom: 2px solid;
  border-color: rgb(17, 134, 52);
}
</style>
