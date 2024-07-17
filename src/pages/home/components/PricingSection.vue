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
                <div class="content">
                    <div class="text-xsmall">
                        {{ price.deliverable }}
                    </div>
                    <ul>
                        <li
                            v-for="item in price.items"
                            :key="item"
                            class="text-xsmall"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
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
        price: "$15k / mo.*",
        deliverable: "Build your MVP to onboard users",
        items: [
            "Landing page",
            "User auth management",
            "Secure server and database",
            "Data model (SQL or NoSQL)",
            "Multiple cloud environments",
            "Your differentiating feature",
            "Fully documented, portable code",
            "30 days post completion support"
        ],
        notes: [
            "*$30k for 60 day delivery",
            "*$40k for 30 day rush delivery"
        ]
    },
    {
        name: "Monthly Development",
        price: "$20k / mo.*",
        deliverable: "Crush your feature backlog",
        items: [
            "Project management lead",
            "Unlimited features and revisions",
            "Direct comms and daily updates",
            "Weekly syncs",
            "Fully documented, portable code",
            "Pause or cancel anytime (monthly)"
        ],
        notes: [
            "*$18k / mo for 3 months (save $6k)",
            "*$15k / mo for 6 months (save $30k)"
        ]
    },
    {
        name: "Fractional CTO",
        price: "$40k / mo.*",
        deliverable: "Get your entire technical team",
        items: [
            "Project management lead",
            "1 frontend engineer",
            "1 backend engineer",
            "1 devops engineer",
            "UI/UX design (as needed)",
            "Unlimited features and revisions",
            "Direct comms and daily updates",
            "Weekly syncs",
            "Fully documented, portable code",
            "Pause or cancel anytime (monthly)"
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