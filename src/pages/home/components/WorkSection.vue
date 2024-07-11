<template>
    <section class="max-width">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Work
            </h2>
            <p class="text-xsmall">
                We have worked with a wide range of clients, from startups to
                enterprises. We have helped clients take their product from idea to MVP, and we have helped
                others grow their product to meet increased demand or integrate new features.
            </p>
        </header>
        <div class="card fade-in-on-scroll">
            <LogoCard
                :title="'Current and Past Clients'"
                :items="companies"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import LogoCard from "@/components/LogoCard.vue"

const companies = [
    { name: "Booz Allen", src: "/boozallen.png" },
    { name: "Notre Dame", src: "/notredame.png" },
    { name: "VitalView", src: "./vitalview.png" },
    { name: "Consensus Networks", src: "/consensusnetworks.png" },
    { name: "BasisPoint+", src: "./basispoint+.png" },
    { name: "WealthFeed", src: "./wealthfeed.png" },
    { name: "Otter Therapies", src: "./ottertherapies.png" },
    { name: "Tattoo Studio Pro", src: "./tattoostudiopro.png" },
    { name: "CardioSpeed", src: "./cardiospeed.png" }
]
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: var(--section-padding);
}

header {
    padding: 32px 32px 32px 0;
    width: 75%;
}

@media (max-width: 768px) {
    section {
        flex-direction: column;
    }

    header {
        padding: 32px 0;
        width: 100%;
    }

    .card {
        max-width: 100%;
    }
}
</style>