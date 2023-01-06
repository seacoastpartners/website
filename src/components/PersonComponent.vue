<template>
  <div class="person-container">
    <div>{{ props.name }}</div>
    <div>{{ props.image }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  image: String,
  book: String,
  url: String,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-container {
  width: 300px;
  height: 300px;
  border: 1px solid white;
  background-color: aqua;
  border-radius: 12px;
}
</style>
