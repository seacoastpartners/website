<template>
    <section class="fade-in-on-scroll max-width">
        <article>
            <h2 class="text-large font-heavy">
                Founders
            </h2>
            <div class="founders">
                <div
                    v-for="person in founders"
                    :key="person.name"
                    class="person"
                >
                    <img
                        class="image"
                        :src="`${person.image}`"
                        alt="Profile Picture"
                    >
                    <h3 class="text-medium">
                        {{ person.name }}
                    </h3>
                    <p class="description text-xsmall">
                        {{ person.des }}
                    </p>
                    <div class="social-links">
                        <a
                            :href="person.linkedin"
                            target="_blank"
                        >
                            <img
                                class="icon"
                                src="/linkedin.png"
                            >
                        </a>
                        <a
                            :href="person.github"
                            target="_blank"
                        >
                            <img
                                class="icon"
                                src="/github.png"
                            >
                        </a>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script lang="ts" setup>
const people = [
    {
        name: "Chris",
        image: "chris.jpg",
        github: "https://github.com/ccali11",
        linkedin: "https://www.linkedin.com/in/christophercali/",
        des: "Chris started his career in consulting for Booz Allen Hamilton where he would eventually serve as Chief of Staff. While there he led a team \
         of engineers to build internal knowledge management tools. Since then he's launched multiple companies that have raised over $5M in funding and has\
          been coding full stack for the better part of the last 10 years",
        founder: true
    },
    {
        name: "Shane",
        image: "shane.jpg",
        github: "https://shanejearley.github.io",
        linkedin: "https://www.linkedin.com/in/shanejearley/",
        des: "Shane has been a full stack developer for over 10 years. He has helped build prototypes for companies that have gone on to raise over $5M in funding.\
         Shane is a true swiss army knife when it comes to software; he has demonstrated the ability to learn and implement bleeding edge technologies \
         very quickly.",
        founder: true
    },
    {
        name: "Ian",
        image: "ian.png",
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
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
        url('../assets/example-section-bg.png');
    background-size: cover;
    background-position: top;
    padding: 60px 24px;
}

article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

section > article > h2 {
    margin: 48px 0;
}

.founders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 36px;
}

.person {
    width: 400px;
    min-width: 250px;
    min-height: 400px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

.description {
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
    height: 32px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .founders {
        flex-direction: column;
    }

    .person {
        width: 300px;
    }
}
</style>
