<template>
    <section class="max-width">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Get Started
            </h2>
        </header>
        <div class="grid">
            <ol class="stepper">
                <li
                    v-for="step in steps"
                    :key="step.name"
                    class="fade-in-on-scroll"
                >
                    <div class="step">
                        <h3 class="text-small">
                            {{ step.name }}
                        </h3>
                        <p class="text-xsmall">
                            {{ step.summary }}
                        </p>
                    </div>
                </li>
            </ol>
            <div 
                v-if="!isMobile"
                class="flex-column align-center justify-center fade-in-on-scroll"
            >
                <ApplyNowButton />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ApplyNowButton from "./ApplyNowButton.vue"
import { useWindowSize } from "@/composables/window"

const { isMobile } = useWindowSize()
const steps = [
    {
        name: "Apply",
        summary: "Fill out a very brief form to schedule your meeting with us."
    },
    {
        name: "Chat with Us",
        summary: "Have a 30 minute call to help us understand your product and strategy."
    },
    {
        name: "Kickoff the Project",
        summary: "We'll sign a money-back guarantee contract and kickoff the project."
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
    grid-template-columns: repeat(2, 1fr);
    gap: var(--item-gap);
}

.stepper {
    --circle-size: 3rem;
    --circle-border-width: 0.5rem;
    --line-width: 0.25rem;
    --line-spacing: 0.5rem;
    padding: 0;
    width: 100%;
}

.stepper > li {
    position: relative;
    display: flex;
    gap: 1rem;
}

.stepper > li:not(:last-child) {
    padding-bottom: 4rem;
}

.stepper > li:before {
    opacity: inherit;
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    box-sizing: border-box;
    border: var(--circle-border-width) solid var(--dark-color);
    background-color: var(--dark-color);
}

.stepper > li:nth-child(1):before {
    content: url("/paper-airplane.svg");
}

.stepper > li:nth-child(2):before {
    content: url("/video-camera.svg");
}

.stepper > li:nth-child(3):before {
    content: url("/rocket-launch.svg");
}

.stepper > li:not(:last-child):after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(var(--circle-size) + var(--line-spacing));
    bottom: var(--line-spacing);
    transform: translateX(calc(var(--circle-size) / 2));
    width: var(--line-width);
    border-radius: var(--border-radius);
    background-color: var(--dark-color);
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>