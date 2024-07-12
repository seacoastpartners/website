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
const prices = [
    {
        name: "MVP Development",
        price: "$20k / mo.*",
        items: [
            "Custom MVP development",
            "Multi-environment setup (dev, stage, prod)",
            "User auth management",
            "Cloud config and deployment",
            "Continuous integration testing",
            "Fully documented and portable code"
        ],
        notes: [
            "*$20k / mo. for 1 month",
            "*$10k / mo. for 2 months"
        ]
    },
    {
        name: "Monthly Development",
        price: "$20k / mo.*",
        items: [
            "Discrete task and project scoping",
            "Pay on task completion",
            "Dedicated project lead (Chris)",
            "Direct comms and daily updates",
            "Unlimited requests and revisions",
            "Weekly syncs",
            "Pause or cancel anytime (monthly plan)"
        ],
        notes: [
            "*$18k / mo for 3 months (save $6k)",
            "*$15k / mo for 6 months (save $30k)"
        ]
    },
    {
        name: "Fractional CTO",
        price: "$40k / mo.*",
        items: [
            "Full product tech stack development",
            "Dedicated project lead (Chris)",
            "1 frontend engineer",
            "1 backend engineer",
            "1 devops engineer",
            "UI/UX design (as needed)",
            "Fully documented and portable code",
            "Direct comms and daily updates",
            "Weekly syncs",
            "Pause or cancel anytime (monthly plan)"
        ],
        notes: [
            "*$35k / mo for 3-6 months (save up to $30k)",
            "*$30k / mo for 7-12 months (save up to $120k)"
        ]
    }
]
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    padding: var(--section-padding);
}

section>header {
    padding: 32px 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-min), 1fr));
    gap: var(--grid-gap);
}

.grid>div {
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