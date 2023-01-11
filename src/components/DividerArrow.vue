<template>
  <div class="divider">
    <div class="divider-line"></div>
  </div>
</template>

<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divider {
  max-width: 100%;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 30px 30px 30px;
}

.divider-line {
  background-color: white;
  height: 1px;
  width: 300px;
}

@media (max-width: 830px) {
  .divider {
    margin: 30px 12px 30px 12px;
  }
}
</style>
