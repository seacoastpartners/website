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
            <h1 class="title text-xxlarge font-heavy">
                Build beautiful apps fast.
            </h1>
            <p class="text-small">
                Team with us to build, launch, and scale quality apps that delight your users.
            </p>
            <p class="text-xsmall">
                <img
                    class="flag"
                    src="/flag.png"
                >Based in the USA.
            </p>
            <p class="actions flex-row">
                <GradientButton
                    text="Start Building"
                    :to="startBuildingLink"
                />
            </p>
        </header>
    </section>
</template>

<script lang="ts" setup>
import GradientButton from "@/components/GradientButton.vue"
import { onMounted, onUnmounted } from "vue"

const startBuildingLink = { name: "start-building" }

function handleTouchStart() {
    const video = document.querySelector("video") as HTMLVideoElement
    if (video.paused) {
        video.play()
    }
}

onMounted(() => {
    const body = document.querySelector("body") as HTMLBodyElement
    body.addEventListener("touchstart", handleTouchStart)
})

onUnmounted(() => {
    const body = document.querySelector("body") as HTMLBodyElement
    body.removeEventListener("touchstart", handleTouchStart)
})
</script>

<style scoped>
section {
    position: relative;
    height: 100svh;
    min-height: 500px;
    background-image: linear-gradient(to bottom,
        rgba(0, 0, 0, 0.25) 50%,
        rgba(0, 0, 0, 1));
    transition: all var(--transition-duration) ease-in-out;
    padding: var(--layout-padding-y) var(--layout-padding-x) 0 var(--layout-padding-x);
}

video {
    object-fit: cover;
    position: absolute;
    height: 100svh;
    width: 100svw;
    min-height: 500px;
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

.link {
    display: inline-block;
    text-decoration: none;
    color: white;
    background-image: linear-gradient(90deg,
        var(--quinary-color) 0%,
        var(--quaternary-color) 20%,
        var(--tertiary-color) 40%,
        var(--secondary-color) 60%,
        var(--primary-color) 100%);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 2px;
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

@media (max-width: 640px) {
    header > * {
        max-width: 100%;
        text-align: left;
    }
}
</style>
