<template>
    <div class="who-we-are-section">
        <h2 class="about-section-heading">Who we are</h2>
        <div class="who-we-are-tiles">
            <PersonComponent name="Ian" image="ian.png" url="https://ianherri.github.io"
                des="Ian is chief designer, front-end guru, and full time philosophizer." />
            <PersonComponent name="Chris" image="chris.jpg" url="https://github.com/ccali11"
                des="Chris is chief executive, full stack guru, and part time philosophizer." />
            <PersonComponent name="Shane" image="shane.jpg" url="https://shanejearley.github.io"
                des="Shane is chief technical genius, full stack guru, and part time philosophizer." />
        </div>
    </div>
</template>

<script setup>
import PersonComponent from './PersonComponent.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.who-we-are-section {
    max-width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000),
        url('../assets/example-section-bg.png');
    background-size: cover;
    background-position: top;
    padding: 60px 18% 60px 18%;
}

.who-we-are-tiles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: left;
}

.about-section-heading {
    margin: 0px 0px 80px 0px;
    font-size: 48px;
    font-family: 'Times New Roman', serif;
}

@media (max-width: 830px) {
    .who-we-are-section {
        padding: 40px 12px 40px 12px;
    }

    .about-section-heading {
        font-size: 36px;
    }
}
</style>
