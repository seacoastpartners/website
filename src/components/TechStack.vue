<template>
    <section class="tech-stack-section">
        <!-- Text Section -->
        <div class="text-section fade-in-on-scroll">
            <h2>Our Expertise</h2>
            <p>
                We are a team of highly skilled developers with expertise in a wide
                range of technologies. We have experience in developing web and mobile
                applications, and we are also well versed in cloud technologies.
            </p>
        </div>

        <!-- Tech Stack Grid -->
        <div class="tech-grid">
            <div
                v-for="tech in technologies"
                :key="tech.name"
                class="tech-item fade-in-on-scroll"
            >
                <img
                    :src="tech.logo"
                    :alt="tech.name"
                    class="tech-logo"
                >
                <span class="tech-name">{{ tech.name }}</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import useScrollEffects from "../composables/scrollEffects"

const { runOnScroll } = useScrollEffects()
const technologies = [
    { name: "AWS", logo: "/aws.png" },
    { name: "Google Cloud", logo: "/google-cloud.svg" },
    { name: "Firebase", logo: "./firebase.svg" },
    { name: "JavaScript", logo: "/javascript.png" },
    { name: "NodeJs", logo: "./node-js.webp" },
    { name: "Python", logo: "./python.webp" },
    { name: "React", logo: "./react.webp" },
    { name: "Vue", logo: "./vue.webp" },
    { name: "Angular", logo: "./angular.webp" },
    { name: "MySql", logo: "./mysql.svg" }
]

window.addEventListener("scroll", runOnScroll)
</script>

<style scoped>
.text-section {
    max-width: 480px;
    text-align: left;
    margin-bottom: 20px;
}

.tech-stack-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

@media (min-width: 768px) {
    .tech-stack-section {
        flex-direction: row;
        justify-content: space-between;
        gap: 60px;
    }
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
</style>
