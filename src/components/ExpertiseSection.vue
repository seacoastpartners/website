<template>
    <section class="max-width">
        <article class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Expertise
            </h2>
            <p class="text-xsmall">
                We use a full stack of tools to solve many technical challenges.
            </p>
        </article>
        <div class="grid">
            <LogoCard 
                v-for="[key, value] in Object.entries(technologyMap)"
                :key="key"
                :title="key"
                :items="value"
                class="fade-in-on-scroll"
            />
        </div>
    </section>
</template>

<script lang="ts" setup>
import LogoCard from "@/components/LogoCard.vue"

const technologyMap = {
    webAndMobileApplications: [
        { name: "React", src: "./react.webp" },
        { name: "Vue", src: "./vue.webp" },
        { name: "Angular", src: "./angular.webp" }
    ],
    dataPipelinesAndServices: [
        { name: "Python", src: "./python.webp" },
        { name: "SQL", src: "./sql.svg" },
        { name: "Node", src: "/node.png" }
    ],
    businessIntegrations: [
        { name: "Shopify", src: "./shopify.png" },
        { name: "Stripe", src: "./stripe.svg" },
        { name: "Salesforce", src: "./salesforce.png" }
    ],
    cloudDeployments: [
        { name: "AWS", src: "/aws.png" },
        { name: "GCP", src: "/gcp.svg" },
        { name: "Azure", src: "./azure.png" }
    ],
    hardwareAndEmbeddedSystems: [
        { name: "Rasberry Pi", src: "./raspberrypi.png" },
        { name: "SolidWorks", src: "./solidworks.png" },
        { name: "C", src: "./c.png" }
    ],
    scalableInfrastructure: [
        { name: "Docker", src: "./docker.png" },
        { name: "Kubernetes", src: "./kubernetes.png" },
        { name: "Terraform", src: "./terraform.png" }
    ]
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 5vh 24px 10vh 24px;
}

article {
    padding: 30px;
    width: 50%;
    text-align: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.grid > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

@media (max-width: 768px) {
    article {
        padding: 30px 0;
        width: 100%;
        text-align: left;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 24px;
    }
}
</style>
