<template>
  <div class="work-tile">
    <a :href="props.url" target="_blank">
      <span class="link"></span>
    </a>
    <h3 class="work-title">
      {{ props.title
      }}<span class="link-span"><img src="../assets/link.png" /></span>
    </h3>
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
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  object-fit: cover;
  height: auto;
  width: 200px;
}

.work-title {
  margin: 0;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.link-span {
  padding-left: 12px;
}

.work-tile:hover {
  background-color: rgba(0, 0, 0, 0.628);

  transition: all 0.3s;
}
</style>
