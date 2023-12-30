<template>
    <div>
        <NavigationBar />
        <Hero />
        <TechStack />
        <OurWork />
        <Testimonials />
        <AboutUs />
        <FooterComponent />
    </div>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar.vue"
import Hero from "@/components/Hero.vue"
import TechStack from "@/components/TechStack.vue"
import OurWork from "@/components/OurWork.vue"
import Testimonials from "@/components/Testimonials.vue"
import AboutUs from "@/components/AboutUs.vue"
import FooterComponent from "@/components/FooterComponent.vue"
</script>
