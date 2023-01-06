<template>
  <div class="hero-section">
    <div class="hero-text-container">
      <h1 class="hero-text">Build beautiful</h1>
      <p class="hero-paragraph">
        We are a mission driven team of East Coast-based software product
        builders. We know and use the bleeding edge in web technologies and have
        started companies from scratch.
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
  background-image: url('../assets/chad-greiter--0gBnnMdQPw-unsplash.jpg');
  background-size: cover;
  background-position: center;
  margin-top: -75px;
  justify-content: flex-end;
  padding: 12px 100px 100px 100px;
}

.hero-text-container {
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero-text {
  font-weight: 900;
  font-size: 64px;
  margin: 0px;
}

.hero-paragraph {
  margin: 0px;
}

.hero-second-paragraph {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

@media (max-width: 830px) {
  .hero-section {
    padding: 12px 12px 30px 12px;
  }

  .hero-text {
    font-size: 48px;
  }
}
</style>
