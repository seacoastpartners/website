<template>
    <section class="max-width flex-column">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Expertise
            </h2>
        </header>
        <div class="grid">
            <div
                v-for="expertise in domains"
                :key="expertise.name"
                class="card fade-in-on-scroll"
            >
                <header>
                    <Component
                        :is="expertise.icon"
                        class="icon-large"
                    />
                    <h2 class="font-bold text-small">
                        {{ expertise.name }}
                    </h2>
                </header>
                <div class="content">
                    <ul class="flex-column">
                        <li
                            v-for="item in expertise.items"
                            :key="item.name"
                            class="text-xsmall flex-row align-center"
                        >
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <footer>
                    <div class="grid">
                        <div
                            v-for="logo in expertise.logos"
                            :key="logo.name"
                            class="flex-column align-center"
                        >
                            <img
                                :src="logo.src"
                                :alt="logo.name"
                            >
                            <div class="text-xxsmall">
                                {{ logo.name }}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </section>
</template>

<script setup>
import { BuildingOffice2Icon, UserGroupIcon, WrenchScrewdriverIcon } from "@heroicons/vue/16/solid"

const domains = [
    {
        icon: UserGroupIcon,
        name: "Frontend and Design",
        summary: "We draw inspiration from Frank Lloyd Wright’s masterpiece, Fallingwater. This iconic house, seamlessly integrated with its natural surroundings, symbolizes our approach to frontend and design: harmonizing aesthetics with functionality to create stunning, user-centric digital experiences.",
        items: [
            {
                name: "Web and mobile UI/UX design",
                summary: "Just as Wright designed Fallingwater to blend perfectly with the landscape, we craft intuitive, visually appealing user interfaces that fit seamlessly into the lives of our users. Our designs prioritize user engagement and satisfaction, ensuring every interaction is both meaningful and delightful."
            },
            {
                name: "Cross-platform app development",
                summary: "Fallingwater’s design adapts beautifully to its environment, much like our responsive web designs adapt to any device. By utilizing reusable code and theming, we ensure consistency, efficiency, and ease of maintenance across all your digital assets, mirroring Wright’s commitment to enduring quality."
            },
            {
                name: "Responsive themes and styling",
                summary: "Wright chose the best materials for Fallingwater, just as we select the most suitable frameworks for your projects. Whether it’s React, Angular, Vue, or Flutter, our framework-agnostic approach ensures we meet your unique needs with the most appropriate technology, creating digital structures as timeless and reliable as Fallingwater."
            }
        ],
        logos: [
            { name: "React", src: "./react.png" },
            { name: "Vue", src: "./vue.webp" },
            { name: "Angular", src: "./angular.webp" },
            { name: "Swift", src: "./swift.png" },
            { name: "Flutter", src: "./flutter.png" },
            { name: "Figma", src: "./figma.png" }
        ]
    },
    {
        icon: WrenchScrewdriverIcon,
        name: "Backend and Data",
        summary: "Some service item summary.",
        items: [
            {
                name: "API development and integration",
                summary: "Some work item summary."
            },
            {
                name: "SQL/NoSQL database modeling",
                summary: "Some work item summary."
            },
            {
                name: "Advanced analytics pipelines",
                summary: "Some work item summary."
            }
        ],
        logos: [
            { name: "Python", src: "./python.webp" },
            { name: "Node", src: "/node.png" },
            { name: "Go", src: "./go.png" },
            { name: "MongoDB", src: "./mongodb.svg" },
            { name: "PostgreSQL", src: "./postgresql.svg" },
            { name: "Snowflake", src: "./snowflake.png" }
        ]
    },
    {
        icon: BuildingOffice2Icon,
        name: "Infrastructure and Cloud",
        summary: "Some service item summary.",
        items: [
            {
                name: "Automated test/deploy workflows",
                summary: "Some work item summary."
            },
            {
                name: "Autoscaling resource workloads",
                summary: "Some work item summary."
            },
            {
                name: "Infrastructure as code",
                summary: "Some work item summary."
            }
        ],
        logos: [
            { name: "AWS", src: "./aws.png" },
            { name: "GCP", src: "./gcp.png" },
            { name: "Azure", src: "./azure.png" },
            { name: "Docker", src: "./docker.png" },
            { name: "Kubernetes", src: "./kubernetes.png" },
            { name: "Terraform", src: "./terraform.png" }
        ]
    }
]
</script>

<style scoped>
section {
    padding: var(--section-padding);
    padding-top: 0;
}

section > header {
    padding: 32px 0;
}

section > .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-min), 1fr));
    gap: var(--item-gap);
}

section > .grid > div {
    display: flex;
    flex-direction: column;
}

.card > header > h2 {
    margin-block: 0.5em;
}

.card > .content {
    margin-bottom: 24px;
}

.content > ul {
    list-style: none;
    padding-inline-start: 0;
    gap: var(--item-gap);
}

.content > ul > li {
    gap: calc(var(--item-gap) / 2);
}

.content > ul > li:before {
    content: "";
    background-image: url("/bolt.svg");
    flex: 0 0 var(--font-xsmall);
    height: var(--font-xsmall);
    width: var(--font-xsmall);
}

.card > footer {
    margin-top: auto;
}

.card > footer > .grid {
    max-width: 95%;
    margin: 12px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--item-gap);
}

.card > footer > .grid > div > img {
    margin-bottom: 4px;
    width: 50px;
    height: 50px;
    object-fit: contain;
}
</style>