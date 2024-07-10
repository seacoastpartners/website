<template>
    <nav>
        <ul class="max-width flex-row justify-between">
            <li class="inline-block">
                <router-link :to="homeLink">
                    <img
                        class="logo"
                        src="/logo-white.svg"
                        alt="Seacoast Technical Partners"
                    >
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const homeLink = { name: "home" }
</script>

<style scoped>
nav {
    position: fixed;
    height: 48px;
    width: 100%;
    z-index: 20000;
    background-color: unset;
    transition: background-color var(--transition-duration) ease-in-out;
}

ul {
    max-height: 100%;
    padding-inline-start: 0px;
    padding: 0 var(--layout-padding-x);
}

li {
    list-style-type: none;
}

.logo {
    height: 24px;
    margin: 12px 0;
}
</style>