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
        areas: ["Product design", "Frontend", "Backend", "Startup strategy"],
        src: "./basispointpluscase.png",
        summary: "We built the initial prototype for BasisPoint+, integrating an advanced analytics SDK to enable clients to visualize their data through customized dashboards. BasisPoint+ also entrusted us as their exclusive development partner to enhance their full-stack application, build new features, and address technical customer support issues.",
        details: "BasisPoint+, recognized as the Best Sustainable Investing Tech Innovator of the Year by the Wealth and Finance International Ethical Finance Awards in 2024, empowers fund managers to track key metrics across their portfolio companies throughout the investment horizon from due diligence to exit."
    },
    {
        name: "WealthFeed",
        link: "https://wealthfeed.com",
        color: "#46DAA8",
        areas: ["Data pipeline", "Infrastructure as code", "CI/CD", "Application monitoring"],
        src: "./wealthfeedcase.png",
        summary: "We helped analyze and integrate multiple new event sources to the core WealthFeed data pipeline. We also completed the migration of their critical AWS resources (like VPCs, databases, EKS clusters, and security groups) from the console to Terraform infrastructure as code, and set up GitHub Actions CI/CD automation to test, version, and deploy app services.",
        details: "WealthFeed is a spin-off of Catalyze AI, which has served over 1,700 real estate and financial services customers. It provides an AI-powered Money-in-Motion platform empowering Financial Advisors to grow their book of business, increase client retention and grow wallet-share with current clients. The company raised $2M in 2024."
    },
    {
        name: "HealthNet",
        color: "#FF6B6B",
        link: "https://consensusnetworks.com/healthnet",
        areas: ["Product design", "Frontend", "Backend", "Data architecture", "API design", "Serverless", "IoT"],
        src: "./healthnetcase.png",
        summary: "As part of Consensus Networks, we helped architect and build a full-stack web application and secured a $1.5M grant from the US Navy to develop an IoT-enabled medical supply chain logistics platform. This platform enhances the tracking and allocation of supplies, such as blood products, across various medical and field locations, significantly improving efficiency.",
        details: "Consensus Networks specializes in designing, building, and securing decentralized communications solutions such as HealthNet, a globally secure logistics system using real-time data to track medical supplies through IoT and satellite communications."
    },
    {
        name: "VitalView",
        color: "#38C2D5",
        link: "https://vitalviewtech.com",
        areas: ["Product design", "Digital signal processing", "Hardware systems", "Startup strategy"],
        src: "./vitalviewcase.png",
        summary: "We founded VitalView by developing the business case, raising capital, recruiting the initial team, and building the first hardware prototype. This prototype required complex algorithm development to handle high bandwidth signal processing.",
        details: "In partnership with the University of Notre Dame, VitalView was established to create a scalable solution for monitoring and addressing the symptoms of heart failure patients, thereby reducing hospital readmissions. The company's core technology and intellectual property were developed by Dr. Tom Pratt at the University of Notre Dame. VitalView has successfully raised over $5M in funding to date."
    },
    {
        name: "CardioSpeed",
        color: "#817FBC",
        link: "https://www.linkedin.com/company/cardiospeed",
        areas: ["Frontend", "Backend", "AI/ML", "Computer vision", "Startup strategy"],
        src: "./cardiospeedcase.png",
        summary: "We developed a cross-platform prototype that packaged CardioSpeed's core AI and computer vision technology into a cross-platform desktop app. This prototype was essential for CardioSpeed's initial customer validation and feedback, playing a critical role in gathering valuable insights from users and informing launch strategy.",
        details: "Based in Washington, DC, CardioSpeed originated as a spinout from a partnership between Securiport, a federal contractor, and AI researchers at the University of Notre Dame. The technology utilized computer vision to measure and track heart rates of individuals captured by a web camera. Despite the innovative approach, CardioSpeed ceased operations due to strategic reasons, influenced primarily by competitive and market-driven forces."
    },
    {
        name: "Investarters",
        color: "#012B65",
        link: "https://mentoring.investarters.com",
        areas: ["Product design", "Frontend", "Backend", "Startup strategy"],
        src: "./investarterscase.png",
        summary: "We partnered with startup founder, social media personality, and content creator Antonio Cucciniello to develop a service that helps his clients find and invest in real estate properties. We built a backend process that streamlined his previously manual workflow with a series of integrations, including Google Cloud and OpenAI APIs, to automate the creation of personalized investment plans for his clients.",
        details: "Antonio Cucciniello is a social media personality and content creator with close to 1M followers on TikTok and Instagram. Antonio founded Investarters to give his social media following the tools they need to successfully invest in their first real estate investment properties."
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
    margin-bottom: var(--item-gap);
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
        gap: var(--item-gap);
    }

    .card > .description,
    .card > .image {
        width: 100%;
    }
}
</style>