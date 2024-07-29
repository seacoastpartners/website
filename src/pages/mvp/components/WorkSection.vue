<template>
    <section class="max-width">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Case Studies
            </h2>
        </header>
        <div class="content flex-column align-center">
            <CaseCard 
                v-for="c in mvpCases"
                :key="c.name"
                :case="c"
                class="fade-in-on-scroll"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import CaseCard from "@/components/CaseCard.vue"
import { useCases } from "@/composables/cases"

const { cases } = useCases()
const mvpCases = cases.filter(c => c.tags.includes("mvp"))
</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
}

.content {
    gap: var(--item-gap);
}
</style>