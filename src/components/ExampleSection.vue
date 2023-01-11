<template>
  <div class="example-section">
    <div class="example-section-heading">
      <h2 class="example-section-h2">Some of our work</h2>
    </div>

    <div class="example-tiles">
      <WorkTile
        title="HeyThanks"
        image="heythanks-text.png"
        url="https://www.heythanks.io/"
        description="A Shopify application for tipping fulfillment workers"
      />
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
  padding: 100px 100px 100px 100px;
}

.example-section-heading {
  margin: 0px 0px 80px 0px;
}

.example-section-h2 {
  font-size: 48px;
  margin: 0px 0px 12px 0px;
}
.example-section-h3 {
  margin: 0px 0px 8px 0px;
  font-size: 18px;
  font-weight: 300;
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
    padding: 80px 12px 80px 12px;
  }
}
</style>
