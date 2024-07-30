<template>
    <RouterLink
        class="button text-small"
        :to="props.to"
    >
        {{ props.text }}
    </RouterLink>
</template>

<script lang="ts" setup>
import { RouteLocationNamedRaw } from "vue-router"

const props = defineProps<{
    text: string
    to: RouteLocationNamedRaw
}>()
</script>

<style scoped>
.button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: white;
    border: 1px solid var(--primary-color);
    background-image: linear-gradient(90deg,
        var(--quinary-color) 0%,
        var(--quaternary-color) 20%,
        var(--tertiary-color) 40%,
        var(--secondary-color) 60%,
        var(--primary-color) 100%);
    background-size: 100% auto;
    transition: background-size var(--transition-duration) ease-in-out;
}

.button:hover {
    background-size: 400% auto;
    background-color: var(--secondary-color);
}
</style>