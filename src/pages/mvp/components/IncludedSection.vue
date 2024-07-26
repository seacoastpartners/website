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
                class="card flex-column fade-in-on-scroll"
            >
                <header>
                    <h2 class="text-small font-heavy">
                        {{ deliverable.name }}
                    </h2>
                    <p class="text-small">
                        {{ deliverable.summary }}
                    </p>
                </header>
                <div class="content">
                    <ul class="flex-column">
                        <li
                            v-for="detail in deliverable.details"
                            :key="detail"
                            class="text-xsmall flex-row align-center"
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
        name: "Live MVP",
        summary: "Onboard your first users",
        details: [
            "Minimum awesome product",
            "Secure server/database",
            "Privacy-first user management"
        ]
    },
    {
        name: "Quality Codebase",
        summary: "Avoid technical debt",
        details: [
            "Documented code/workflows",
            "Reusable components/libraries",
            "Extensible infrastructure"
        ]
    },
    {
        name: "Extended Support",
        summary: "Respond to critical requests",
        details: [
            "Cost/performance optimization",
            "Hot bug fixes",
            "Developer onboarding"
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

.card > header > p {
    margin-block: 0.5em;
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