<template>
    <router-view />
</template>

<script lang="ts" setup>
import useAnimations from "@/composables/animations"
useAnimations()
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/opensanshebrew.css);
@import url(https://fonts.googleapis.com/earlyaccess/opensanshebrewcondensed.css);

:root {
    --primary-font-family: 'Open Sans Hebrew', serif;
    --primary-font-color: #fff;
    --primary-bg-color: #000;
    --secondary-bg-color: #1A1A1A;
    --tertiary-bg-color: #313131;
    --section-padding: 5vh 24px 10vh 24px;
}

body {
    background-color: var(--primary-bg-color);
    margin: 0px;
}

#app {
    font-family: var(--primary-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--primary-font-color);
    overflow-x: hidden;
}

h1, h2, h3 {
    margin: 0;
}

.flex {
    display: flex;
}

.inline-block {
    display: inline-block;
}

.max-width {
    max-width: 80%;
    margin: auto;
}

.text-left {
    text-align: left;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
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
    .max-width {
        max-width: 100%;
    }

    .text-xlarge {
        font-size: 48px;
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