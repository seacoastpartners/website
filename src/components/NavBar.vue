<template>
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
            <li>
                <NavDropdown
                    title="Services"
                    :items="serviceItems"
                />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import NavDropdown from "@/components/NavDropdown.vue"
import useServices from "@/composables/services"

const { services } = useServices()
const serviceItems = services.map(service => {
    return {
        name: service.name,
        to: { name: "service", params: { name: service.name } }
    }
})
</script>

<style scoped>
nav {
    position: fixed;
    height: 48px;
    width: 100%;
    z-index: 1;
    background-color: unset;
    transition: background-color 500ms linear;
}

ul {
    max-height: 100%;
    padding-inline-start: 0px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
}

li {
    list-style-type: none;
    display: inline-block;
}

.logo {
    height: 24px;
    margin: 12px 0;
}
</style>