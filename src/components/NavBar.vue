<template>
    <nav>
        <ul class="max-width flex-row justify-between">
            <li class="inline-block">
                <RouterLink :to="homeLink">
                    <img
                        class="logo"
                        src="/logo-white.svg"
                        alt="Seacoast Technical Partners"
                    >
                </RouterLink>
            </li>
            <li class="flex-row">
                <RouterLink
                    class="button text-xsmall"
                    :to="bookMeetingLink"
                >
                    Book Meeting
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const homeLink = { name: "home" }
const bookMeetingLink = { name: "book-meeting" }
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

.button {
    margin: auto 0;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: var(--border-radius);
    border: 1px solid white;
    text-decoration: none;
    color: white;
    transition: color var(--transition-duration) ease-in-out;
    transition: background-color var(--transition-duration) ease-in-out;
}

.button:hover {
    color: black;
    background-color: white;
}
</style>