<template>
    <section
        id="pricing"
        class="max-width"
    >
        <header class="fade-in-on-scroll">
            <h1 class="text-large font-heavy">
                Pricing
            </h1>
        </header>
        <div class="grid">
            <div
                v-for="price in prices"
                :key="price.name"
                class="card fade-in-on-scroll"
            >
                <header>
                    <h2 class="text-small font-heavy">
                        {{ price.name }}
                    </h2>
                    <p class="text-small">
                        {{ price.price }}
                    </p>
                </header>
                <ul>
                    <li
                        v-for="item in price.items"
                        :key="item"
                        class="text-xsmall"
                    >
                        {{ item }}
                    </li>
                </ul>
                <footer>
                    <div
                        v-for="note in price.notes"
                        :key="note"
                        class="text-xxsmall"
                    >
                        {{ note }}
                    </div>
                </footer>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import usePrices from "@/composables/prices"

const { prices } = usePrices()
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
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

.card {
    padding: 24px 28px;
    border-radius: var(--border-radius);
}

.card:nth-of-type(1) {
    background-color: var(--tertiary-color);
}

.card:nth-of-type(2) {
    background-color: var(--secondary-color);
}

.card:nth-of-type(3) {
    background-color: var(--primary-color);
}

ul {
    padding-inline-start: 28px;
}

li {
    margin-bottom: 4px;
}

footer {
    margin-top: auto;
}
</style>