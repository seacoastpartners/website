<template>
  <div class="hero-section">
    <div class="hero-text-container">
      <h1 class="hero-text">Build beautiful</h1>
      <p class="hero-paragraph">
        <span class="inline-logo">Seacoast Technical Partners</span> is a team
        of East Coast located software product builders. We know and use the
        bleeding edge in web technologies.
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
  min-height: 600px;
  background-image: linear-gradient(270deg, rgba(0, 0, 0, 0), #000000e2),
    url('../assets/chad-greiter--0gBnnMdQPw-unsplash.jpg');
  background-size: cover;
  background-position: center;
  margin-top: -84px;
  justify-content: flex-end;
  padding: 12px 18% 12px 18%;
  transition: all 0.3s;
}

.hero-text-container {
  max-width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 150px;
  animation: fade-in ease-in 1;
  animation-fill-mode: both;
  animation-duration: 1s;
}

.hero-text {
  font-weight: 900;
  font-size: 120px;
  line-height: 100px;
  margin: 0px;
  font-family: 'Times New Roman', serif;
  width: fit-content;
}

.hero-paragraph {
  margin: 0px;
  font-size: 18px;
  font-weight: 600;
  padding-right: 100px;
}

.hero-second-paragraph {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  gap: 12px;
}

.inline-logo {
  background-color: rgb(15, 100, 1);
  padding: 2px 8px 2px 8px;
}

@media (max-width: 830px) {
  .hero-text-container {
    max-width: 100%;
  }
  .hero-section {
    padding: 12px 12px 80px 12px;
  }

  .hero-paragraph {
    padding-right: 50px;
  }

  .hero-text {
    font-size: 64px;
    line-height: 70px;
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
