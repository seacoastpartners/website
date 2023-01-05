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
  padding: 12px 100px 12px 100px;
}

.example-section-heading {
  font-size: 36px;
}

.example-tiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 830px) {
  .example-section {
    padding: 12px;
  }
}
</style>
