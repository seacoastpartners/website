<template>
  <div class="hero-section">
    <div class="hero-text-container">
      <h1 class="hero-text">Build beautiful</h1>
      <p class="hero-paragraph">
        Seacoast Technical Partners is a team of East Coast located software
        product builders. We know and use the bleeding edge in web technologies.
      </p>
      <p class="hero-second-paragraph">
        <span><img src="../assets/flag.png" /> </span>All projects designed and
        engineered in the USA.
      </p>
      <ButtonComponent text="Book Meeting" />
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-section {
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 500px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
    url('../assets/chad-greiter--0gBnnMdQPw-unsplash.jpg');
  background-size: cover;
  background-position: center;
  margin-top: -75px;
  justify-content: flex-end;
  padding: 12px 100px 100px 100px;
  transition: all 0.3s;
}

.hero-text-container {
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 75px;
  animation: fade-in ease-in 1;
  animation-fill-mode: both;
  animation-duration: 1s;
}

.hero-text {
  font-weight: 900;
  font-size: 100px;
  margin: 0px;
  width: fit-content;
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
    padding: 12px 12px 80px 12px;
  }

  .hero-text {
    font-size: 64px;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
