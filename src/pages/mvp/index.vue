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
import { useMeta } from "@/composables/meta"

useMeta({ page: "Build your MVP in 45 days for $5k.", path: "/mvp" })
</script>