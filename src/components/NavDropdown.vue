<template>
    <div class="dropdown">
        <div class="button text-xsmall flex-row">
            {{ props.title }}
            <ChevronDownIcon class="icon-small" />
        </div>
        <div class="container">
            <div class="content">
                <router-link
                    v-for="link in props.links"
                    :key="link.name"
                    :to="link.to"
                >
                    {{ link.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ChevronDownIcon } from "@heroicons/vue/16/solid"
import { Link } from "@/types"

const props = defineProps<{
    title?: string,
    links: Link[]
}>()
</script>

<style scoped>
.dropdown {
    display: inline-block;
    position: relative;
}

.button {
    border-radius: 4px;
    height: 24px;
    padding: 12px;
    border-width: 0;
    color: white;
    transition: background-color var(--transition-duration) ease-in-out;
}

.dropdown:hover > .button {
    text-decoration: underline;
    background-color: var(--card-bg-color);
}

.container {
    display: none;
    position: absolute;
    right: 0;
    padding-top: 8px;
}

.content {
    border-radius: 4px;
    min-width: 200px;
    background-color: var(--card-bg-color);
    transition: background-color var(--transition-duration) ease-in-out;
}

.content a {
    color: #fff;
    padding: 12px;
    text-decoration: none;
    display: block;
    background-color: var(--card-bg-color);
    transition: filter var(--transition-duration) ease-in-out;
}

.content a:hover {
    filter: brightness(125%)
}

.dropdown:hover .container {
    display: block;
}
</style>