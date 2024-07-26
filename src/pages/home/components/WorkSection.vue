<template>
    <section class="max-width">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Work
            </h2>
            <div class="slider">
                <div
                    v-for="index in 2"
                    :key="index"
                    class="track"
                >
                    <div
                        v-for="c in companies"
                        :key="c.name"
                        class="slide"
                    >
                        <div class="flex-column align-center">
                            <img
                                :src="c.src"
                                :alt="c.name"
                            >
                            <span class="text-xxsmall">{{ c.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="content flex-column align-center">
            <CaseCard 
                v-for="c in cases"
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

const companies = [
    { name: "Booz Allen", src: "/boozallen.png" },
    { name: "Notre Dame", src: "/notredame.png" },
    { name: "VitalView", src: "./vitalview.png" },
    { name: "Consensus Networks", src: "/consensusnetworks.png" },
    { name: "BasisPoint+", src: "./basispointplus.png" },
    { name: "Investarters", src: "./investarters.svg" },
    { name: "WealthFeed", src: "./wealthfeed.png" },
    { name: "Viewtique", src: "./viewtique.svg" },
    { name: "Otter Therapies", src: "./ottertherapies.png" },
    { name: "Tattoo Studio Pro", src: "./tattoostudiopro.png" },
    { name: "CardioSpeed", src: "./cardiospeed.png" }
]
</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
}

@keyframes slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.slider {
    margin-top: 24px;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.slider:before, .slider:after {
    position: absolute;
    top: 0;
    content: '';
    width: 55px;
    height: 100%;
    z-index: 2;
}

.slider:before {
    left: -5px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.slider:after {
    right: -5px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.track {
    display: inline-block;
    animation: 35s slide infinite linear;
}

.slide {
    margin: 0 24px;
    display: inline-block;
}

.slide > div > img {
    margin-bottom: 4px;
    height: 50px;
    width: 50px;
    object-fit: contain;
}

.content {
    gap: var(--item-gap);
}

@media (max-width: 640px) {
    section {
        flex-direction: column;
    }

    section > header {
        padding: 32px 0;
        width: 100%;
    }
}
</style>