<template>
  <section class="who-we-are-section fade-in-on-scroll">
    <!-- Founders Sub-Section -->
    <div class="founders-section">
      <h3 class="sub-section-heading">
        Founders
      </h3>
      <div class="founders">
        <div
          v-for="person in founders"
          :key="person.name"
          class="person-container"
        >
          <img
            class="image"
            :src="`${person.image}`"
            alt="Profile Picture"
          >
          <h3 class="name">
            {{ person.name }}
          </h3>
          <p class="description">
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
              class="github-logo"
            >
              <img
                class="icon"
                src="/github.png"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
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
    },
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
.who-we-are-section {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
        url('../assets/example-section-bg.png');
    background-size: cover;
    background-position: top;
}

.sub-section-heading {
    font-size: 36px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.founders-section {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.founders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.person-container {
    width: 400px;
    min-width: 250px;
    min-height: 400px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 60px;
}

.image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

.name {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 32px;
}

.description {
    word-break: break-word;
    /* Ensure long words don't cause overflow */
}

.social-links {
    margin-top: auto;
    /* Pushes the social links to the bottom */
    display: flex;
    gap: 40px;
    justify-content: center;
    cursor: pointer;
}

.icon {
    height: 32px;
    cursor: pointer;
}

.github-logo {}

@media (max-width: 768px) {
    .founders {
        flex-direction: column;
        /* Stack the items vertically on smaller screens */
    }

    .person-container {
        width: 100%;
        /* Full width on smaller screens */
        max-width: 300px;
        /* Maximum width to maintain consistency */
    }
}
</style>
