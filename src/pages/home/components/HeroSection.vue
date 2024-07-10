<template>
    <section>
        <video
            playsinline
            autoplay
            muted
            loop
            poster="/seacoast.png"
        >
            <source
                src="/seacoast.mp4"
                type="video/mp4"
            >
        </video>
        <header class="max-width text-left">
            <h1 class="title text-xlarge font-heavy">
                Build beautiful.
            </h1>
            <p class="text-small font-bold">
                We're a team of full stack software engineers, designers, and product developers
                who help you build new products and features to delight your customers.
            </p>
            <p class="text-xsmall">
                <img
                    class="flag"
                    src="/flag.png"
                >Based in the USA.
            </p>
            <p>
                <router-link
                    class="button text-small font-bold"
                    to="/book-meeting"
                >
                    Book Meeting
                </router-link>
            </p>
        </header>
    </section>
</template>

<script lang="ts" setup>
const body = document.querySelector("body") as HTMLBodyElement
body.ontouchstart = () => {
    const video = document.querySelector("video") as HTMLVideoElement
    if (video.paused) {
        video.play()
    }
}
</script>

<style scoped>
section {
    position: relative;
    height: 100vh;
    min-height: 500px;
    background-image: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 1));
    transition: all var(--transition-duration) ease-in-out;
    padding: var(--section-padding);
    padding-top: 48px;
}

video {
    object-fit: cover;
    position: absolute;
    height: 100vh;
    min-height: 500px;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
}

header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

header > h1 {
   margin-left: -0.05em;
}

header > * {
    max-width: 60%;
}

.flag {
    margin: 0 6px -2px 0;
}

.subheader {
    margin: 0px;
    font-size: 24px;
    font-weight: 600;
    padding-right: 100px;
}

.note {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    gap: 12px;
}

.button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    border-width: 0;
    text-decoration: none;
    color: white;
    background-image: linear-gradient(90deg,
            rgba(115, 208, 159, 1) 0%,
            rgba(31, 192, 166, 1) 25%,
            rgba(40, 178, 191, 1) 75%,
            rgba(57, 130, 171, 1) 100%);
    background-position: right top;
    background-size: 100% auto;
    transition: background-size 250ms ease-in-out;
}

.button:hover {
    background-size: 400% auto;
}

@media (max-width: 768px) {
    header > * {
        max-width: 100%;
        text-align: left;
    }
}
</style>
