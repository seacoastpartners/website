<template>
    <section class="our-work-section">
        <!-- Logo Grid -->
        <div class="tech-grid">
            <div
                v-for="company in companies"
                :key="company.name"
                class="tech-item fade-in-on-scroll"
            >
                <img
                    :src="company.logo"
                    :alt="company.name"
                    class="tech-logo"
                >
                <span class="tech-name">{{ company.name }}</span>
            </div>
        </div>

        <!-- Text Section  -->
        <div class="text-section fade-in-on-scroll">
            <h2>Our Work</h2>
            <p>
                We have worked with a wide range of clients, from startups to
                enterprises. We have helped our clients build web and mobile
                applications, and we have also helped them migrate their applications to
                the cloud.
            </p>
        </div>
    </section>
</template>

<script lang="ts" setup>
const companies = [
    { name: "Booz Allen", logo: "/booz-allen.webp" },
    { name: "Notre Dame", logo: "/notre-dame.jpeg" },
    { name: "Consensus Networks", logo: "/consensus.webp" }
    // { name: "Shopify", logo: "./shopify.webp" },
]
</script>

<style scoped>
.our-work-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.text-section {
    max-width: 480px;
    text-align: left;
    margin-bottom: 20px;
    /* Initially, the text section comes first on mobile */
    order: -1;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    width: 100%;
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.tech-logo {
    width: 75px;
    height: 75px;
    object-fit: contain;
}

.tech-name {
    margin-top: 5px;
    font-size: 0.9rem;
}

/* Adjustments for mobile screens */
@media (max-width: 768px) {
    .tech-grid {
        /* Adjust the grid for a single column layout on smaller screens */
        grid-template-columns: repeat(1, 1fr);
    }
}

/* Adjustments for larger screens */
@media (min-width: 768px) {
    .our-work-section {
        flex-direction: row;
        justify-content: space-between;
        gap: 60px;
    }

    .tech-grid {
        /* Ensure the tech grid appears first (to the left) on larger screens */
        order: -1;
    }

    /* Reset the order for the text section so it appears second (to the right) */
    .text-section {
        order: 0;
    }
}
</style>