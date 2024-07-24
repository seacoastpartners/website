<template>
    <section class="max-width flex-column justify-center align-center">
        <header>
            <h1 class="text-large text-center font-heavy fade-in-on-scroll">
                Founders
            </h1>
        </header>
        <div class="grid">
            <div
                v-for="person in founders"
                :key="person.name"
                class="card fade-in-on-scroll"
            >
                <header>
                    <img
                        :src="person.image"
                        :alt="person.name"
                    >
                    <h2 class="text-center text-medium">
                        {{ person.name }}
                    </h2>
                </header>
                <p class="text-xsmall">
                    {{ person.summary }}
                </p>
                <footer>
                    <a
                        :href="person.linkedin"
                        target="_blank"
                    >
                        <img
                            :src="'./linkedin.png'"
                            alt="linkedin"
                        >
                    </a>
                    <a
                        :href="person.github"
                        target="_blank"
                    >
                        <img
                            :src="'./github.png'"
                            alt="github"
                        >
                    </a>
                </footer>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const people = [
    {
        name: "Chris",
        image: "./chris.jpg",
        github: "https://github.com/ccali11",
        linkedin: "https://www.linkedin.com/in/christophercali",
        summary: "Chris started his career at Booz Allen Hamilton where he would eventually serve as Chief of Staff. A self-taught engineer, he built an \
            internal knowledge management tool that the firm still uses today. Since then, Chris has launched multiple companies, collectively raising over \
            $5M in funding. He has transitioned to a full-time software developer, startup advisor, and co-founder of STP. While he contributes as a full \
            stack developer on client projects, he is ultimately responsible for STP's project management and assuring maximum client satisfaction.",
        founder: true
    },
    {
        name: "Shane",
        image: "./shane.jpg",
        github: "https://github.com/shanejearley",
        linkedin: "https://www.linkedin.com/in/shanejearley",
        summary: "With over a decade of experience as a full stack developer, Shane has played the lead engineer role for multiple startups. \
            Shane's expertise spans a wide range of technologies making him a true Swiss army knife in the software world. His remarkable ability to quickly learn and \
            implement cutting-edge technologies sets him apart as an exceptional engineer. As a co-founder of STP, Shane drives technology architecture decisions and provides technical \
            thought leadership ensuring that STP clients receive the best possible solutions to their technical challenges.",
        founder: true
    },
    {
        name: "Ian",
        image: "./ian.png",
        github: "https://ianherri.github.io",
        linkedin: "https://www.linkedin.com/in/ian-herrington-16939693/",
        summary: "",
        founder: false
    }
    // {
    //     name: "Steve",
    //     image: "steve.jpg",
    //     github: "",
    //     linkedin: "",
    //     summary: "Steve is chief designer, front-end guru, and full time philosophizer.",
    //     founder: false
    // },
    // {
    //     name: "Hawyar",
    //     image: "hawyar.jpg",
    //     github: "",
    //     linkedin: "",
    //     summary: "Hawyar is chief designer, front-end guru, and full time philosophizer.",
    //     founder: false
    // }
]

const founders = people.filter(person => person.founder)
// const nonFounders = people.filter(person => !person.founder).slice(0, 4)  // Limiting to max 4 non-founders
</script>

<style scoped>
section {
    padding: var(--section-padding);
}

section > header {
    padding: 32px 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-min), 1fr));
    gap: var(--item-gap);
}

.card {
    padding: 24px 28px;
    background-color: var(--dark-color);
    border-radius: var(--border-radius);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.card:nth-of-type(1) {
    background: linear-gradient(145deg, var(--primary-color) 0%, var(--dark-color) 40%);
}

.card:nth-of-type(2) {
    background: linear-gradient(315deg, var(--primary-color) 0%, var(--dark-color) 40%);
}

.card > header > img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.card > p {
    margin-top: 0;
}

.card > footer {
    margin-top: auto;
    display: flex;
    gap: var(--item-gap);
    justify-content: center;
    cursor: pointer;
}

.card > footer > a > img {
    height: 24px;
    cursor: pointer;
}
</style>
