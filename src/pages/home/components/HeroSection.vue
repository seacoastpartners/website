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
            <p class="actions flex-row">
                <RouterLink
                    class="button text-small font-bold"
                    :to="pricingLink"
                >
                    View Pricing
                </RouterLink>
                <RouterLink
                    class="button text-small font-bold"
                    :to="bookMeetingLink"
                >
                    Book Meeting
                </RouterLink>
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
const pricingLink = { name: "home", hash: "#pricing" }
const bookMeetingLink = { name: "book-meeting" }
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

.actions {
    gap: 12px;
}

.button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: white;
}

.button:first-child {
    border: 1px solid var(--primary-color);
    background-image: linear-gradient(90deg,
            var(--quinary-color) 0%,
            var(--quaternary-color) 20%,
            var(--tertiary-color) 40%,
            var(--secondary-color) 60%,
            var(--primary-color) 100%);
    background-position: right top;
    background-size: 100% auto;
    transition: background-size var(--transition-duration) ease-in-out;
}

.button:first-child:hover {
    background-size: 400% auto;
    background-color: var(--secondary-color);
}

.button:last-child {
    border: 1px solid white;
    transition: color var(--transition-duration) ease-in-out;
    transition: background-color var(--transition-duration) ease-in-out;
}

.button:last-child:hover {
    color: black;
    background-color: white;
}

@media (max-width: 640px) {
    header > * {
        max-width: 100%;
        text-align: left;
    }
}
</style>
