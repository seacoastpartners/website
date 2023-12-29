<template>
  <div class="footer-container">
    <div class="footer">
      © {{ year }} Seacoast Technical Partners, LLC
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-container {
    max-width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    height: fit-content;
    justify-content: center;
}
</style>
