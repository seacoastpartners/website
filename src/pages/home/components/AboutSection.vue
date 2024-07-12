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
                        class="image"
                        :src="`${person.image}`"
                        alt="Profile Picture"
                    >
                    <h2 class="text-center text-medium">
                        {{ person.name }}
                    </h2>
                </header>
                <p class="content text-xsmall">
                    {{ person.des }}
                </p>
                <div class="social-links">
                    <a
                        :href="person.linkedin"
                        target="_blank"
                    >
                        <img
                            class="icon"
                            :src="'./linkedin.png'"
                        >
                    </a>
                    <a
                        :href="person.github"
                        target="_blank"
                    >
                        <img
                            class="icon"
                            :src="'./github.png'"
                        >
                    </a>
                </div>
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
        des: "Chris started his career in consulting for Booz Allen Hamilton where he would eventually serve as Chief of Staff. While there he led a team \
         of engineers to build internal knowledge management tools. Since then he's launched multiple companies that have raised over $5M in funding and has\
          been coding full stack for the better part of the last 10 years.",
        founder: true
    },
    {
        name: "Shane",
        image: "./shane.jpg",
        github: "https://github.com/shanejearley",
        linkedin: "https://www.linkedin.com/in/shanejearley",
        des: "Shane has been a full stack developer for over 10 years. He has helped build prototypes for companies that have gone on to raise over $5M in funding.\
         Shane is a true swiss army knife when it comes to software; he has demonstrated the ability to learn and implement bleeding edge technologies \
         very quickly.",
        founder: true
    },
    {
        name: "Ian",
        image: "./ian.png",
        github: "https://ianherri.github.io",
        linkedin: "https://www.linkedin.com/in/ian-herrington-16939693/",
        des: "",
        founder: false
    }
    // {
    //     name: "Steve",
    //     image: "steve.jpg",
    //     github: "",
    //     linkedin: "",
    //     des: "Steve is chief designer, front-end guru, and full time philosophizer.",
    //     founder: false
    // },
    // {
    //     name: "Hawyar",
    //     image: "hawyar.jpg",
    //     github: "",
    //     linkedin: "",
    //     des: "Hawyar is chief designer, front-end guru, and full time philosophizer.",
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
    gap: var(--grid-gap);
}

.card {
    padding: 24px 28px;
    background-color: var(--card-bg-color);
    border-radius: var(--border-radius);
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.card:nth-of-type(1) {
    background: linear-gradient(145deg, var(--primary-color) 0%, var(--card-bg-color) 40%);
}

.card:nth-of-type(2) {
    background: linear-gradient(315deg, var(--primary-color) 0%, var(--card-bg-color) 40%);
}

.image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.content {
    word-break: break-word;
    margin: 0;
}

.social-links {
    margin-top: auto;
    display: flex;
    gap: 36px;
    justify-content: center;
    cursor: pointer;
}

.icon {
    height: 24px;
    cursor: pointer;
}
</style>
