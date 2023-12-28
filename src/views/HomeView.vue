<template>
  <div>
    <NavigationBar />
    <HeroLandingPage />
    <!-- <TechStack /> -->
    <ExampleSection />
    <AboutUsSection />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue"
import HeroLandingPage from "@/components/HeroLandingPage.vue"
// import TechStack from "@/components/TechStack.vue"
import ExampleSection from "@/components/ExampleSection.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import AboutUsSection from "@/components/AboutUsSection.vue"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
