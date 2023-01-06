<template>
  <div class="divider">
    <h3>Set up a free 30 minute meeting</h3>
    <ButtonComponent />
  </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divider {
  max-width: 100%;
}

@media (max-width: 830px) {
  .divider {
    margin: 30px 12px 30px 12px;
  }
}
</style>
