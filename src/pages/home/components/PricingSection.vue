<template>
    <section class="max-width">
        <header>
            <h1 class="text-large font-heavy">
                Pricing
            </h1>
        </header>
        <div class="grid">
            <div class="card">
                <header>
                    <h2 class="text-small font-heavy">
                        MVP Sprint Development
                    </h2>
                    <p class="text-small">
                        $20k / mo.*
                    </p>
                </header>
                <ul>
                    <li class="text-xsmall">
                        Custom MVP developed and deployed
                    </li>
                    <li class="text-xsmall">
                        Custom MVP developed and deployed
                    </li>
                </ul>
            </div>
            <div class="card">
                <header>
                    <h2 class="text-small font-heavy">
                        Monthly App Development
                    </h2>
                    <p class="text-small">
                        $20k / mo.*
                    </p>
                </header>
                <ul>
                    <li class="text-xsmall">
                        Custom MVP developed and deployed
                    </li>
                    <li class="text-xsmall">
                        Custom MVP developed and deployed
                    </li>
                </ul>
            </div>
            <div class="card">
                <header>
                    <h2 class="text-small font-heavy">
                        Fractional CTO and Team
                    </h2>
                    <p class="text-small">
                        $40k / mo.*
                    </p>
                </header>
                <ul>
                    <li class="text-xsmall">
                        Custom MVP developed and deployed
                    </li>
                    <li class="text-xsmall">
                        Custom MVP developed and deployed
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

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
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
}

.card {
    padding: 24px 28px;
    border-radius: 4px;
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

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>