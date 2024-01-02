<template>
    <router-view />
</template>

<script lang="ts" setup>
import useScrollEffects from "@/composables/scroll-effects"
useScrollEffects()
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/opensanshebrew.css);
@import url(https://fonts.googleapis.com/earlyaccess/opensanshebrewcondensed.css);

body {
    background-color: black;
    margin: 0px;
}

#app {
    font-family: 'Open Sans Hebrew', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    overflow-x: hidden;
}

h1, h2, h3 {
    margin: 0;
}

.max-width {
    max-width: 900px;
    margin: auto;
}

.text-xlarge {
    font-size: 120px;
    line-height: 1;
}

.text-large {
    font-size: 48px;
    line-height: 1.5;
}

.text-medium {
    font-size: 36px;
    line-height: 1.5;
}

.text-small {
    font-size: 24px;
    line-height: 1.5;
}

.text-xsmall {
    font-size: 18px;
    line-height: 1.5;
}

.text-xxsmall {
    font-size: 12px;
    line-height: 1.5;
}

.font-heavy {
    font-weight: 900;
}

.font-bold {
    font-weight: 700;
}

.font-medium {
    font-weight: 500;
}

.font-light {
    font-weight: 300;
}

.font-italic {
    font-style: italic;
}

.fade-in-on-scroll {
    opacity: 0;
    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
}

@media (max-width: 768px) {
    .text-xlarge {
        font-size: 64px;
        line-height: 1;
    }

    .text-large {
        font-size: 36px;
        line-height: 1.5;
    }

    .text-medium {
        font-size: 24px;
        line-height: 1.5;
    }

    .text-small {
        font-size: 18px;
        line-height: 1.5;
    }

    .text-xsmall {
        font-size: 14px;
        line-height: 1.5;
    }
}
</style>