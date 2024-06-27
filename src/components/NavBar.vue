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
            <!-- TODO Add back with services -->
            <!-- <li>
                <LinkDropdown
                    title="Services"
                    :items="services"
                />
            </li> -->
        </ul>
    </nav>
</template>

<script lang="ts" setup>
// TODO Add back with services
// import LinkDropdown from "@/components/LinkDropdown.vue"
// const services = [
//     {
//         name: "Test 1",
//         to: { name: "service", params: { name: "test-1" } }
//     },
//     {
//         name: "Test 2",
//         to: { name: "service", params: { name: "test-2" } }
//     },
//     {
//         name: "Test 3",
//         to: { name: "service", params: { name: "test-3" } }
//     },
//     {
//         name: "Test Long Name to See What Happens",
//         to: { name: "service", params: { name: "test-3" } }
//     }
// ]
</script>

<style scoped>
nav {
    position: fixed;
    height: 48px;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 500ms linear;
}

ul {
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