<template>
  <NavigationBar />
  <HeroLandingPage />
  <DividerArrow />
  <ExampleSection />
  <DividerArrow />
  <FooterComponent />
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import DividerArrow from '@/components/DividerArrow.vue'
import HeroLandingPage from '@/components/HeroLandingPage.vue'
import ExampleSection from '@/components/ExampleSection.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-image {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-image: url('../assets/brian-yurasits-XKDSu-qvYqU-unsplash.jpg');
  background-size: cover;
  background-position: center;
}
</style>
