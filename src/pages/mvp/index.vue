<template>
    <div id="page">
        <IntroSection />
        <IncludedSection />
        <ProcessSection />
        <WorkSection />
        <TestimonialSection />
    </div>
</template>

<script lang="ts" setup>
import IntroSection from "./components/IntroSection.vue"
import IncludedSection from "./components/IncludedSection.vue"
import ProcessSection from "./components/ProcessSection.vue"
import WorkSection from "./components/WorkSection.vue"
import TestimonialSection from "./components/TestimonialSection.vue"
import { useHead } from "@unhead/vue"

const title = "STP | Build your MVP in 45 days for $5k. | Longer description to hit the 100 character minimum for LinkedIn preview."
useHead({
    title,
    meta: [
        {
            name: "title",
            content: title
        },
        {
            name: "og:title",
            content: title
        },
        {
            name: "description",
            content: title
        },
        {
            name: "og:description",
            content: title
        }
    ]
})
</script>