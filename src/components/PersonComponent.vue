<template>
  <div class="person-container">
    <a
      :href="props.url"
      target="_blank"
    >
      <span class="link" />
    </a>

    <img
      class="image"
      :src="require(`@/assets/${props.image}`)"
      height="150"
      width="150"
    >
    <h3 class="name">
      {{ props.name }}
    </h3>
    <p class="description">
      {{ props.des }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    name: String,
    image: String,
    book: String,
    url: String,
    des: String,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-container {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    position: relative;
    gap: 12px;
}

.name {
    margin: 0px;
    font-size: 24px;
}

.description {
    margin: 0;
}

.link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}

.image {
  border-radius: 50%;
}
</style>
