<template>
  <div class="who-we-are-section">
    <h2>Who we are</h2>
    <PersonComponent name="Ian Herrington" />
    <PersonComponent name="Chris Cali" />
    <PersonComponent name="Shane Earley" />
  </div>
</template>

<script setup>
import PersonComponent from './PersonComponent.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.who-we-are-section {
  max-width: 100%;
  padding: 12px 100px 100px 100px;
}

@media (max-width: 830px) {
  .who-we-are-section {
    padding: 40px 12px 80px 12px;
  }
}
</style>
