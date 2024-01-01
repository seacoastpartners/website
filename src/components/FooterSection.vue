<template>
    <section class="footer-container">
        <div class="footer">
            © {{ year }} Seacoast Technical Partners, LLC
        </div>
    </section>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<style scoped>
section {
    max-width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    height: fit-content;
    justify-content: center;
}
</style>
