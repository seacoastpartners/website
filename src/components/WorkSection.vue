<template>
    <section class="max-width">
        <article class="grid">
            <div
                v-for="company in companies"
                :key="company.name"
                class="fade-in-on-scroll"
            >
                <img
                    :src="company.logo"
                    :alt="company.name"
                >
                <span class="text-xxsmall">{{ company.name }}</span>
            </div>
        </article>
        <article class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Work
            </h2>
            <p class="text-xsmall">
                We have worked with a wide range of clients, from startups to
                enterprises. We have helped our clients build web and mobile
                applications, and we have also helped them migrate their applications to
                the cloud.
            </p>
        </article>
    </section>
</template>

<script lang="ts" setup>
const companies = [
    { name: "Booz Allen", logo: "/booz-allen.webp" },
    { name: "Notre Dame", logo: "/notre-dame.jpeg" },
    { name: "Consensus Networks", logo: "/consensus.webp" }
    // { name: "Shopify", logo: "./shopify.svg" }
]
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 10vh 24px;
}

article {
    width: 50%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.grid > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.grid > div > img {
    margin-bottom: 4px;
    width: 50px;
    height: 50px;
    object-fit: contain;
}

@media (max-width: 768px) {
    section {
        flex-direction: column;
    }

    article {
        width: 100%;
    }

    article:nth-child(2) {
        order: -1;
    }

    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>