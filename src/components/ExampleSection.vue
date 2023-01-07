<template>
  <div class="example-section">
    <h2 class="example-section-heading">Some of our work</h2>
    <div class="example-tiles">
      <WorkTile />
      <WorkTile />
      <WorkTile />
      <WorkTile />
    </div>
  </div>
</template>

<script setup>
import WorkTile from './WorkTile.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example-section {
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
    url('../assets/example-section-bg.png');
  background-size: cover;
  background-position: top;
  padding: 40px 100px 100px 100px;
}

.example-section-heading {
  font-size: 48px;
  margin: 0px 0px 80px 0px;
}

.example-tiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

@media (max-width: 830px) {
  .example-section {
    padding: 40px 12px 80px 12px;
  }
}
</style>
