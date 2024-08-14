<template>
    <div id="page">
        <HeroSection />
        <ExpertiseSection />
        <ServiceSection />
        <WorkSection />
        <TestimonialSection />
        <AboutSection />
    </div>
</template>

<script lang="ts" setup>
import HeroSection from "./components/HeroSection.vue"
import ExpertiseSection from "./components/ExpertiseSection.vue"
import ServiceSection from "./components/ServiceSection.vue"
import WorkSection from "./components/WorkSection.vue"
import TestimonialSection from "./components/TestimonialSection.vue"
import AboutSection from "./components/AboutSection.vue"
import { useHead } from "@unhead/vue"

const title = "STP | We build, deploy, and scale your software applications the right way."
useHead({
    title,
    meta: [
        {
            name: "og:title",
            content: title
        }
    ]
})
</script>
