<template>
  <div class="divider"></div>
</template>

<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divider {
  max-width: 100%;
  height: 1px;
  background-color: rgb(255, 255, 255);
  margin: 30px 100px 30px 100px;
}

@media (max-width: 830px) {
  .divider {
    margin: 30px 12px 30px 12px;
  }
}
</style>
