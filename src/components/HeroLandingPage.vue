<template>
  <div class="hero-section">
    <div class="hero-text-container">
      <h1 class="hero-text">Build beauty</h1>
      <p class="hero-paragraph">
        We are a mission driven team of three East Coast-based software product
        builders.
      </p>
      <p class="hero-second-paragraph">
        <span><img src="../assets/flag.png" /> </span>All projects designed and
        engineered in the USA.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-section {
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 675px;
  background-image: url('../assets/brian-yurasits-XKDSu-qvYqU-unsplash.jpg');
  background-size: cover;
  background-position: center;
  margin-top: -75px;
  justify-content: end;
}

.hero-text-container {
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero-text {
  font-weight: 900;
  font-size: 48px;
  margin: 0px;
}

.hero-paragraph {
  margin: 0px;
}

.hero-second-paragraph {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
</style>
