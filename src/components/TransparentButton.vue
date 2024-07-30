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
    border: 1px solid white;
    transition: color var(--transition-duration) ease-in-out;
    transition: background-color var(--transition-duration) ease-in-out;
}

.button:hover {
    color: black;
    background-color: white;
}
</style>