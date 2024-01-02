<template>
    <div>
        <nav>
            <ul class="max-width">
                <li>
                    <router-link to="/">
                        <img
                            class="logo"
                            src="/logo-white.svg"
                            alt="Seacoast Technical Partners"
                        >
                    </router-link>
                </li>
            </ul>
        </nav>
        <slot />
        <footer>
            <span>© {{ year }} Seacoast Technical Partners, LLC</span>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<style scoped>
nav {
    position: absolute;
    height: 48px;
    width: 100%;
    z-index: 1;
}

ul {
    padding-inline-start: 0px;
    padding: 0 24px;
}

li {
    list-style-type: none;
    display: inline-block;
}

.logo {
    height: 24px;
    margin: 12px 0;
}

footer {
    width: 100%;
    padding: 24px 0;
    display: flex;
    height: fit-content;
    justify-content: center;
}
</style>