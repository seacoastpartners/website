<template>
  <div @click="handleClick" class="button">{{ props.text }}</div>
</template>

<script setup>
import router from '@/router'

import { defineProps } from 'vue'

const props = defineProps({
  text: String,
})

function handleClick() {
  router.push({ name: 'form' })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  width: fit-content;
  font-size: 16px;
  font-weight: 900;
  background-color: rgb(17, 134, 52);
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.25s;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
}
</style>
