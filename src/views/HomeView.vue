<template>
  <div>
    <NavigationBar />
    <HeroLandingPage />
    <TechStack />
    <OurWork />
    <ClientTestimonials />
    <AboutUsSection />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue"
import HeroLandingPage from "@/components/HeroLandingPage.vue"
import TechStack from "@/components/TechStack.vue"
import OurWork from "@/components/OurWork.vue"
import ClientTestimonials from "@/components/ClientTestimonials.vue"
import AboutUsSection from "@/components/AboutUsSection.vue"
import FooterComponent from "@/components/FooterComponent.vue"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
