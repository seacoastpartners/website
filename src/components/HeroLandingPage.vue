<template>
    <div class="hero-section">
        <video class="hero-bg" playsinline autoplay muted loop poster="/seabg.jpg">
            <source src="/seabg.mp4" type="video/mp4" />
        </video>
        <div class="hero-text-container">
            <h1 class="hero-text-header">Build beautiful</h1>
            <p class="hero-text-subheader">
                <span class="inline-logo">Seacoast Technical Partners</span> is a team
                of East Coast located software product builders. We know and use the
                bleeding edge in web technologies.
            </p>
            <p class="hero-text-note">
                <span><img src="@/assets/flag.png" /> </span>All projects designed and
                engineered in the USA.
            </p>
            <ButtonComponent text="Book Meeting" />
        </div>
    </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'
</script>

<style scoped>
.hero-section {
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 600px;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.25) 50%,
        rgba(0, 0, 0, 1)
    );
    margin-top: -84px;
    justify-content: flex-end;
    padding: 12px 18% 12px 18%;
    transition: all 0.3s;
}

.hero-bg {
    object-fit: cover;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
}

.hero-text-container {
    max-width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 120px;
    animation: fade-in ease-in 1;
    animation-fill-mode: both;
    animation-duration: 1s;
}

.hero-text-header {
    font-weight: 900;
    font-size: 120px;
    line-height: 100px;
    margin: 0px 0px 20px 0px;
    font-family: 'Times New Roman', serif;
    width: fit-content;
}

.hero-text-subheader {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    padding-right: 100px;
}

.hero-text-note {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    gap: 12px;
}

.inline-logo {
    background-color: rgb(0, 123, 174);
    padding: 2px 8px 2px 8px;
}

@media (max-width: 830px) {
    .hero-text-container {
        max-width: 100%;
    }

    .hero-section {
        padding: 12px 12px 80px 12px;
    }

    .hero-text-subheader {
        padding-right: 50px;
    }

    .hero-text-header {
        font-size: 64px;
        line-height: 70px;
        margin: 0px 0px 10px 0px;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
