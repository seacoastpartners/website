<template>
    <div id="page">
        <div 
            id="form"
            data-tf-opacity="100"
            data-tf-inline-on-mobile
            data-tf-iframe-props="title=Lead Capture Form STP"
            data-tf-transitive-search-params
            data-tf-auto-focus
            data-tf-live="01HKFVE05H4YBC5HQ39DR5A0WM" 
        />
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@unhead/vue"
import { onMounted, onUnmounted } from "vue"

useHead({
    title: "STP | Book a meeting with us."
})

function handleLoad() {
    const container: HTMLDivElement = document.querySelector("#form")
    container.style.opacity = "1"
}

const selector = "script[src*='typeform.com']"

onMounted(() => {
    let typeform: HTMLScriptElement = document.querySelector(selector)
    if (!typeform) {
        typeform = document.createElement("script")
        typeform.src = "//embed.typeform.com/next/embed.js"
        document.head.appendChild(typeform)
    }
    typeform.onload = handleLoad
})

onUnmounted(() => {
    const typeform = document.querySelector(selector)
    if (typeform) {
        typeform.remove()
    }
    document.body.style.overflow = "auto"
})
</script>

<style scoped>
#form {
    min-width: 100%;
    height: 100svh;
    opacity: 0;
    transition: opacity var(--transition-duration) ease-in-out;
}

#form div {
    z-index: 0;
}
</style>
