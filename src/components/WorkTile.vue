<template>
  <div
    class="work-tile"
    :style="{
      'background-image':
        'linear-gradient(to top, rgba(0, 0, 0, 0), #000000), url(\'' +
        imageRef +
        '\')',
    }"
  >
    <a :href="props.url" target="_blank">
      <span class="link"></span>
    </a>
    <h3 class="work-title">{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const imageRef = ref(require(`@/assets/${props.image}`))

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
  border-radius: 12px;
  padding: 12px 12px 20px 20px;
  background-size: cover;
  background-position: top;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  object-fit: cover;
  height: 250px;
}

.work-title {
  margin: 0;
  font-size: 36px;
  filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0));
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
