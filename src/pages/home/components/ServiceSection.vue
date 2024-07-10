<template>
    <section class="max-width flex-column">
        <header class="fade-in-on-scroll text-center">
            <h2 class="text-large font-heavy">
                Our Services
            </h2>
            <p class="text-xsmall">
                We'll help you prove a concept, launch a minimum awesome product, then harden and scale your offering.
            </p>
        </header>
        <div class="grid">
            <ServiceCard
                v-for="service in services"
                :key="service.name"
                :service="service"
                class="fade-in-on-scroll"
            />
        </div>
    </section>
</template>

<script setup>
import ServiceCard from "./ServiceCard.vue"
import useServices from "@/composables/services"

const { services } = useServices()
// const technologyMap = {
//     webAndMobileApplications: [
//         { name: "React", src: "./react.webp" },
//         { name: "Vue", src: "./vue.webp" },
//         { name: "Angular", src: "./angular.webp" }
//     ],
//     dataPipelinesAndServices: [
//         { name: "Python", src: "./python.webp" },
//         { name: "SQL", src: "./sql.svg" },
//         { name: "Node", src: "/node.png" }
//     ],
//     apiIntegrations: [
//         { name: "Shopify", src: "./shopify.png" },
//         { name: "Stripe", src: "./stripe.svg" },
//         { name: "OpenAI", src: "./openai.webp" }
//     ],
//     cloudDeployments: [
//         { name: "AWS", src: "/aws.png" },
//         { name: "GCP", src: "/gcp.svg" },
//         { name: "Azure", src: "./azure.png" }
//     ],
//     scalableInfrastructure: [
//         { name: "Docker", src: "./docker.png" },
//         { name: "Kubernetes", src: "./kubernetes.png" },
//         { name: "Terraform", src: "./terraform.png" }
//     ],
//     hardwareAndEmbeddedSystems: [
//         { name: "Rasberry Pi", src: "./raspberrypi.png" },
//         { name: "SolidWorks", src: "./solidworks.png" },
//         { name: "C", src: "./c.png" }
//     ]
// }

</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
    width: 50%;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
}

.grid > div {
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {
    section > header {
        width: 100%;
        text-align: left;
    }

    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>