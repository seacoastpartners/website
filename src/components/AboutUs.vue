<template>
  <section class="who-we-are-section fade-in-on-scroll">
    <h2 class="about-section-heading">Our Team</h2>
    
    <div class="team-member">
      <div v-for="person in people" :key="person.name" class="person-container">
        <a :href="person.github" target="_blank">
          <span class="link" />
        </a>
        <img
          class="image"
          :src="require(`@/assets/${person.image}`)"
          height="150"
          width="150"
        >
        <h3 class="name">
          {{ person.name }}
        </h3>
        <p class="description">
          {{ person.des }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const people = [
    {
        name: "Chris",
        image: "chris.jpg",
        github: "https://github.com/ccali11",
        linkedin: "https://www.linkedin.com/in/christophercali/",
        des: "Chris is chief executive, full stack guru, and part time philosophizer.",
        founder: true
    },
    {
        name: "Shane",
        image: "shane.jpg",
        github: "https://shanejearley.github.io",
        linkedin: "https://www.linkedin.com/in/shanejearley/",
        des: "Shane is chief technical genius, full stack guru, and part time philosophizer.",
        founder: true
    },
    {
        name: "Ian",
        image: "ian.png",
        github: "https://ianherri.github.io",
        linkedin: "https://www.linkedin.com/in/ian-herrington-16939693/",
        des: "Ian is chief designer, front-end guru, and full time philosophizer.",
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
</script>

<style scoped>
.who-we-are-section {
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
    url('../assets/example-section-bg.png');
  background-size: cover;
  background-position: top;
}

.team-member {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
}

.person-container {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    position: relative;
    gap: 12px;
}

.name {
    margin: 0px;
    font-size: 24px;
}

.description {
}

/* .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
} */

.image {
  border-radius: 50%;
}
</style>
