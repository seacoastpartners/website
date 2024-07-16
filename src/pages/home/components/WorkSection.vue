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
        <div
            v-for="c in cases"
            :key="c.name"
            class="card fade-in-on-scroll flex-row"
        >
            <div class="description flex-column justify-between">
                <header>
                    <a
                        target="_blank"
                        :href="c.link"
                        class="text-small font-heavy link"
                        :style="{ backgroundImage: `linear-gradient(90deg, ${c.color} 0%, ${c.color} 100%)` }"
                    >
                        {{ c.name }}
                        <ArrowTopRightOnSquareIcon class="icon-small" />
                    </a>
                    <ul class="flex-row uppercase">
                        <li
                            v-for="a in c.areas"
                            :key="a"
                            class="text-xxsmall"
                        >
                            {{ a }}
                        </li>
                    </ul>
                </header>
                <p class="text-xsmall">
                    {{ c.summary }}
                </p>
                <p class="text-xxsmall">
                    {{ c.details }}
                </p>
            </div>
            <div class="image flex-column align-center justify-center">
                <img
                    :src="c.src"
                    :alt="c.name"
                >
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/16/solid"

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

const cases = [
    {
        name: "BasisPoint+",
        color: "#7382FA",
        link: "https://basispointplus.com",
        areas: ["Product design", "Frontend", "Backend", "Startup planning"],
        src: "./basispointpluscase.svg",
        summary: "We built the initial prototype integrating an advanced analytics SDK to help BPP’s clients visualize their data via customized dashboards. BPP also contracted us as its sole development partner to enhance its full stack application, build new features, and address technical customer support issues.",
        details: "Named Best Sustainable Investing Tech Innovator of the Year by the Wealth and Finance International Ethical Finance Awards in 2024, BasisPointPlus provides fund managers the ability to track key metrics across their portfolio companies throughout its investment horizon."
    },
    {
        name: "WealthFeed",
        link: "https://wealthfeed.com",
        color: "#17AA89",
        areas: ["Data pipelines", "Infrastructure as Code", "CI/CD", "Application monitoring"],
        src: "./wealthfeedcase.png",
        summary: "We built a data pipeline to ingest and process financial data from multiple sources, including APIs and web scraping. We also implemented Infrastructure as Code to deploy and manage the application on AWS, and set up CI/CD pipelines to automate the deployment process.",
        details: "WealthFeed is a spin-off of Catalyze AI, which has served over 1,700 real estate and financial services customers. It provides an AI-powered Money-in-Motion platform empowering Financial Advisors to grow their book of business, increase client retention and grow wallet-share with current clients. The company raised $2M in 2024."
    },
    {
        name: "HealthNet",
        color: "#FF6B6B",
        link: "https://consensusnetworks.com/healthnet",
        areas: ["Product design", "Frontend", "Backend", "Data Architecture", "API Design", "Serverless", "IoT"],
        src: "./healthnetcase.svg",
        summary: "As part of Consensus Networks, we helped architect and build the full stack web application that ultimately received a $1.5M grant from the US Navy to develop an IoT-enabled medical supply chain logistics platform to help track and allocate its supplies (e.g., blood products) to its various medical and field locations more efficiently.",
        details: "Consensus Networks specializes in designing, building, and securing decentralized communications solutions, such as HealthNet, which integrates logistics systems and real-time data for tracking medical supplies, and ensures secure global connectivity through IoT and satellite communications."
    },
    {
        name: "CardioSpeed",
        color: "#817FBC",
        link: "https://www.linkedin.com/company/cardiospeed",
        areas: ["Frontend", "Backend", "AI/ML Integration", "Startup planning"],
        src: "./cardiospeedcase.png",
        summary: "STP built the cross-platform prototype that embedded the core AI / computer vision technology into a desktop app that CardioSpeed used for initial customer validation and feedback. The prototype was critical to acquire feedback from customers.",
        details: "Based in Washington DC, CardioSpeed was a spinout of a technology developed in partnership between Securiport (a federal contractor) and AI researchers at the University of Notre Dame. The technology used computer vision to measure and track the heart rate of people in view of a web camera. CardioSpeed ceased operations for strategic reasons, largely due to competitive and market-driven forces."
    },
    {
        name: "Investarters",
        color: "#0A12CA",
        link: "https://investarters.com",
        areas: ["Product design", "Frontend", "Backend", "Startup planning"],
        src: "./investarterscase.png",
        summary: "Test short summary of things done. Goals accomplished. Challenges, failures, and ultimate success. Test short summary of things done. Goals accomplished. Challenges, failures, and ultimate success.",
        details: "Test item detail 1. Test item detail 2. Test item detail 3. Test item detail 1. Test item detail 2. Test item detail 3."
    },
    {
        name: "VitalView",
        color: "#38C2D5",
        link: "https://vitalviewtech.com",
        areas: ["Product design", "Algorithms", "Hardware systems", "Startup planning"],
        src: "./vitalviewcase.svg",
        summary: "Test short summary of things done. Goals accomplished. Challenges, failures, and ultimate success. Test short summary of things done. Goals accomplished. Challenges, failures, and ultimate success.",
        details: "Test item detail 1. Test item detail 2. Test item detail 3. Test item detail 1. Test item detail 2. Test item detail 3."
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

.slider:hover .track {
    animation-play-state: paused;
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

.card {
    padding: 24px 28px;
    background-color: var(--card-bg-color);
    border-radius: var(--border-radius);
}

.card:not(:last-of-type) {
    margin-bottom: var(--grid-gap);
}

.card > .description,
.card > .image {
    width: 50%;
}

.card > .description > header > ul {
    list-style-type: none;
    padding: 0;
    gap: 4px;
    flex-wrap: wrap;
}

.card > .description > header > ul > li {
    padding: 4px 8px;
    border-radius: 16px;
    border: 1px solid white;
    display: inline-block;
}

.card > .image > img {
    height: 80%;
    width: 80%;
    object-fit: contain;
}

.link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background-image: linear-gradient(90deg,
        var(--primary-color) 0%,
        var(--primary-color) 100%);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 2px;
}

@media (max-width: 640px) {
    section {
        flex-direction: column;
    }

    section > header {
        padding: 32px 0;
        width: 100%;
    }

    .card {
        flex-direction: column;
        gap: var(--grid-gap);
    }

    .card > .description,
    .card > .image {
        width: 100%;
    }
}
</style>