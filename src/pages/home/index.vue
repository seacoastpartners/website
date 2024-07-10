<template>
    <DefaultLayout>
        <HeroSection />
        <ServiceSection />
        <PricingSection />
        <WorkSection />
        <TestimonialSection />
        <AboutSection />
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "@/layouts/Default.vue"
import HeroSection from "./components/HeroSection.vue"
import ServiceSection from "./components/ServiceSection.vue"
import PricingSection from "./components/PricingSection.vue"
import WorkSection from "./components/WorkSection.vue"
import TestimonialSection from "./components/TestimonialSection.vue"
import AboutSection from "./components/AboutSection.vue"
</script>
