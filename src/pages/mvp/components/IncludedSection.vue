<template>
    <section class="max-width">
        <header class="fade-in-on-scroll text-center">
            <h2 class="text-large font-heavy">
                What's Included
            </h2>
        </header>
        <div class="grid">
            <div
                v-for="deliverable in deliverables"
                :key="deliverable.name"
                class="card fade-in-on-scroll"
            >
                <header>
                    <h2 class="text-small font-heavy">
                        {{ deliverable.name }}
                    </h2>
                </header>
                <div class="content">
                    <div class="text-xsmall">
                        {{ deliverable.summary }}
                    </div>
                    <ul>
                        <li
                            v-for="detail in deliverable.details"
                            :key="detail"
                            class="text-xsmall"
                        >
                            {{ detail }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const deliverables = [
    {
        name: "Test 1",
        summary: "Test summary",
        details: [
            "Detail 1",
            "Detail 2"
        ]
    },
    {
        name: "Test 2",
        summary: "Test summary",
        details: [
            "Detail 1",
            "Detail 2"
        ]
    },
    {
        name: "Test 3",
        summary: "Test summary",
        details: [
            "Detail 1",
            "Detail 2"
        ]
    }
]
</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-min), 1fr));
    gap: var(--item-gap);
}

.grid > div {
    display: flex;
    flex-direction: column;
}

.card {
    padding: 24px 28px;
    border-radius: var(--border-radius);
    background-color: var(--dark-color);
}
</style>