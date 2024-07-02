<template>
    <section class="max-width">
        <article class="fade-in-on-scroll text-center">
            <h2 class="text-large font-heavy">
                Our Services
            </h2>
            <p class="text-xsmall">
                We'll help you prove a concept, launch a minimum awesome product, then harden and scale your offering.
            </p>
        </article>
        <div class="grid">
            <LinkCard
                v-for="service in services"
                :key="service.name"
                :title="service.name"
                :description="service.summary"
                :items="service.items.map(i => i.name)"
                class="fade-in-on-scroll"
            />
        </div>
    </section>
</template>

<script setup>
import LinkCard from "./LinkCard.vue"
import useServices from "@/composables/services"

const { services } = useServices()
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: var(--section-padding);
}

article {
    padding: 30px;
    width: 50%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.grid > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

@media (max-width: 768px) {
    article {
        padding: 30px 0;
        width: 100%;
        text-align: left;
    }

    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>