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
                >
                    <div class="step fade-in-on-scroll">
                        <h3 class="text-small">
                            {{ step.name }}
                        </h3>
                        <p class="text-xsmall">
                            {{ step.summary }}
                        </p>
                    </div>
                </li>
            </ol>
            <div class="flex-column align-center justify-center fade-in-on-scroll">
                <RouterLink
                    class="button text-small"
                    :to="bookMeetingLink"
                >
                    Apply Now
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const bookMeetingLink = { name: "book-meeting" }
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
    --spacing: 0.5rem;
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
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    box-sizing: border-box;
    border: var(--circle-border-width) solid var(--primary-color);
    background-color: var(--primary-color);
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
    top: calc(var(--circle-size) + var(--spacing));
    bottom: var(--spacing);
    z-index: -1;
    transform: translateX(calc(var(--circle-size) / 2));
    width: 2px;
    background-color: var(--primary-color);
}

.button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: white;
    border: 1px solid var(--primary-color);
    background-image: linear-gradient(90deg,
        var(--quinary-color) 0%,
        var(--quaternary-color) 20%,
        var(--tertiary-color) 40%,
        var(--secondary-color) 60%,
        var(--primary-color) 100%);
    background-position: right top;
    background-size: 100% auto;
    transition: background-size var(--transition-duration) ease-in-out;
}

.button:hover {
    background-size: 400% auto;
    background-color: var(--secondary-color);
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .stepper {
        --circle-size: 1.75rem;
        --circle-border-width: 0.25rem;
        --spacing: 0.25rem;
    }
}
</style>