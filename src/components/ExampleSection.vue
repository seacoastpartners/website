<template>
  <div class="example-section">
    <div class="example-section-heading">
      <h2 class="example-section-h2">
        Some of our work
      </h2>
    </div>

    <div class="example-tiles">
      <WorkTile
        title="HeyThanks"
        image="heythanks-text.png"
        url="https://www.heythanks.io/"
        description="A Shopify application for tipping fulfillment workers."
      />
      <WorkTile
        title="Vital View Technologies"
        image=""
        url="https://ideacenter.nd.edu/commercialization-engine/startups/vitalview/"
        description="A smart health technology company that aims to seamlessly give people a greater understanding of 
        their overall health."
      />
      <WorkTile
        title="Otter Therapies"
        image=""
        url="https://ideacenter.nd.edu/commercialization-engine/startups/otter-therapies/"
        description="A platform that allows streamlined communication between all stakeholders involved in the special needs child's care, ensuring that clinicians and parents are working toward the same goals."
      />
    </div>
  </div>
</template>

<script setup>
import WorkTile from "./WorkTile.vue"
</script>

<style scoped>
.example-section {
  max-width: 100%;
  background-color: rgb(0, 0, 0);
  padding: 60px 18% 60px 18%;
}

.example-section-heading {
  margin: 0px 0px 80px 0px;
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
  justify-content: left;
}

@media (max-width: 830px) {
  .example-section {
    padding: 40px 12px 40px 12px;
  }
}
</style>
