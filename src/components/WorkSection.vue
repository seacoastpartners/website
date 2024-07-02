<template>
    <section class="max-width">
        <article class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Work
            </h2>
            <p class="text-xsmall">
                We have worked with a wide range of clients, from startups to
                enterprises. We have helped clients take their product from idea to MVP, and we have helped
                others grow their product to meet increased demand or integrate new features.
            </p>
        </article>
        <div class="fade-in-on-scroll">
            <LogoCard
                :title="'Past Clients'"
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
    { name: "VitalView Technologies", src: "./vitalviewtechnologies.png" },
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

article {
    padding: 30px;
    width: 75%;
}

@media (max-width: 768px) {
    section {
        flex-direction: column;
    }

    article {
        padding: 30px 0;
        width: 100%;
    }
}
</style>