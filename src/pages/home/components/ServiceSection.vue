<template>
    <section
        id="services"
        class="max-width"
    >
        <header class="fade-in-on-scroll">
            <h1 class="text-large font-heavy">
                Our Services
            </h1>
        </header>
        <div class="grid">
            <div
                v-for="service in services"
                :key="service.name"
                class="card flex-column fade-in-on-scroll"
            >
                <header>
                    <h2 class="text-small font-heavy">
                        {{ service.name }}
                    </h2>
                    <p class="text-small">
                        {{ service.summary }}
                    </p>
                </header>
                <div class="content">
                    <ul class="flex-column">
                        <li
                            v-for="item in service.items"
                            :key="item"
                            class="text-xsmall flex-row align-center"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const services = [
    {
        name: "MVP Development",
        summary: "Build and launch your MVP",
        items: [
            "Landing page",
            "User auth management",
            "Secure server and database",
            "Data model (SQL or NoSQL)",
            "Multiple cloud environments",
            "Your differentiating feature",
            "Fully documented, portable code",
            "30 days post completion support"
        ]
    },
    {
        name: "Monthly Development",
        summary: "Crush your feature backlog",
        items: [
            "Project management lead",
            "Unlimited features and revisions",
            "Direct comms and daily updates",
            "Weekly syncs",
            "Fully documented, portable code",
            "Pause or cancel anytime (monthly)"
        ]
    },
    {
        name: "Fractional CTO",
        summary: "Scale your tech team",
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

.card > header > p {
    margin-block: 0.5em;
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

.content > ul {
    list-style: none;
    padding-inline-start: 0;
    gap: var(--item-gap);
}

.content > ul > li {
    gap: calc(var(--item-gap) / 2);
}

.content > ul > li:before {
    content: "";
    background-image: url("/check.svg");
    flex: 0 0 var(--font-xsmall);
    height: var(--font-xsmall);
    width: var(--font-xsmall);
}
</style>