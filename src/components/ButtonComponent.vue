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
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid;
  transition: all 0.25s;
}

.button:hover {
  border: 1px solid white;
}
</style>
