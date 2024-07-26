<template>
    <section class="max-width flex-column align-center">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Client Testimonials
            </h2>
        </header>
        <div class="content flex-column align-center">
            <TestimonialCard
                v-for="t in mvpTestimonials"
                :key="t.name"
                :testimonial="t"
                class="fade-in-on-scroll flex-column"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import TestimonialCard from "@/components/TestimonialCard.vue"
import { useTestimonials } from "@/composables/testimonials"

const { testimonials } = useTestimonials()
const mvpTestimonials = testimonials.filter(t => t.tags.includes("mvp"))
</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 30px 0;
}

.content {
    gap: var(--item-gap);
    width: 100%;
}
</style>
