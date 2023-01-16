<template>
  <div class="work-tile">
    <a :href="props.url" target="_blank">
      <span class="link"></span>
    </a>
    <h3 class="work-title">{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  url: String,
  image: String,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work-tile {
  padding: 20px 20px 20px 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  object-fit: cover;
  height: auto;
  background-color: antiquewhite;
  width: 200px;
}

.work-title {
  margin: 0;
  font-size: 24px;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.work-tile:hover {
  background-color: rgba(0, 0, 0, 0.628);

  transition: all 0.3s;
}
</style>
