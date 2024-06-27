<template>
    <div>
        <NavBar />
        <slot />
        <footer class="text-xxsmall">
            <span>© {{ year }} Seacoast Technical Partners, LLC</span>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue"

const year = new Date().getFullYear()
</script>

<style scoped>
footer {
    width: 100%;
    padding: 24px 0;
    display: flex;
    height: fit-content;
    justify-content: center;
}
</style>