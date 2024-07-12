<template>
    <section class="max-width flex-column">
        <header class="fade-in-on-scroll text-center">
            <h2 class="text-large font-heavy">
                Our Services
            </h2>
            <p class="text-xsmall">
                We'll help you prove a concept, launch a minimum awesome product, then harden and scale your offering.
            </p>
        </header>
        <div class="grid">
            <ServiceCard
                v-for="service in services"
                :key="service.name"
                :service="service"
                class="fade-in-on-scroll"
            />
        </div>
    </section>
</template>

<script setup>
import ServiceCard from "./ServiceCard.vue"
import useServices from "@/composables/services"

const { services } = useServices()
</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
    width: 50%;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-min), 1fr));
    gap: var(--grid-gap);
}

.grid > div {
    display: flex;
    flex-direction: column;
}

@media (max-width: 640px) {
    section > header {
        width: 100%;
        text-align: left;
    }
}
</style>