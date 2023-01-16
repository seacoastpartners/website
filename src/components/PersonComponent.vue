<template>
  <div class="person-container">
    <a :href="props.url" target="_blank">
      <span class="link"></span>
    </a>
    <h3 class="name">{{ props.name }}</h3>
    <img
      class="image"
      :src="require(`@/assets/${props.image}`)"
      height="100"
      width="100"
    />
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
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 24px;
}

.name {
  margin: 0;
  font-size: 36px;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
