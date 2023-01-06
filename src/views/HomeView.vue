<template>
  <NavigationBar />
  <HeroLandingPage />
  <CTASection />
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
import CTASection from '@/components/CTASection.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
