<template>
    <footer class="flex-row justify-center text-xxsmall">
        <span>© {{ year }} Seacoast Technical Partners, LLC</span>
    </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
    margin-top: auto;
    width: 100%;
    padding: 24px 0;
    height: fit-content;
}
</style>