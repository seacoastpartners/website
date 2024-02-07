<template>
    <section class="max-width">
        <article class="text-section fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                Our Expertise
            </h2>
            <p class="text-xsmall">
                We are a team of highly skilled developers with expertise in a wide
                range of technologies. We have experience in developing web and mobile
                applications, and we are also well versed in cloud technologies.
            </p>
        </article>
        <article class="grid">
            <div
                v-for="tech in technologies"
                :key="tech.name"
                class="fade-in-on-scroll"
            >
                <img
                    :src="tech.logo"
                    :alt="tech.name"
                >
                <span class="text-xxsmall">{{ tech.name }}</span>
            </div>
        </article>
    </section>
</template>

<script lang="ts" setup>
const technologies = [
    { name: "TypeScript", logo: "/typescript.png" },
    { name: "Python", logo: "./python.webp" },
    { name: "SQL", logo: "./sql.svg" },
    { name: "React", logo: "./react.webp" },
    { name: "Vue", logo: "./vue.webp" },
    { name: "Angular", logo: "./angular.webp" },
    { name: "Docker", logo: "./docker.png" },
    { name: "Kubernetes", logo: "./kubernetes.png" },
    { name: "Terraform", logo: "./terraform.png" },
    { name: "AWS", logo: "/aws.png" },
    { name: "GCP", logo: "/gcp.svg" },
    { name: "Azure", logo: "./azure.png" }
]
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 5vh 24px 10vh 24px;
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
}
</style>
