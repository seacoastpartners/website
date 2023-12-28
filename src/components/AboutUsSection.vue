<template>
  <section class="who-we-are-section">
    <h2 class="about-section-heading">
      Who we are
    </h2>
    <div class="who-we-are-tiles">
      <PersonComponent
        name="Chris"
        image="chris.jpg"
        url="https://github.com/ccali11"
        des="Chris is chief executive, full stack guru, and part time philosophizer."
      />
      <PersonComponent
        name="Shane"
        image="shane.jpg"
        url="https://shanejearley.github.io"
        des="Shane is chief technical genius, full stack guru, and part time philosophizer."
      />
      <PersonComponent
        name="Ian"
        image="ian.png"
        url="https://ianherri.github.io"
        des="Ian is chief designer, front-end guru, and full time philosophizer."
      />
    </div>
  </section>
</template>

<script setup>
import PersonComponent from "./PersonComponent.vue"
</script>

<style scoped>
.who-we-are-section {
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
    url('../assets/example-section-bg.png');
  background-size: cover;
  background-position: top;
}

.who-we-are-tiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
}
</style>
