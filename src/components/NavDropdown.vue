<template>
    <div class="dropdown">
        <div class="button text-xsmall flex">
            {{ props.title }}
            <ChevronDownIcon class="icon" />
        </div>
        <div class="container">
            <div class="content">
                <router-link
                    v-for="item in props.items"
                    :key="item.name"
                    :to="item.to"
                >
                    {{ item.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouteLocationNamedRaw } from "vue-router"
import { ChevronDownIcon } from "@heroicons/vue/16/solid"

type LinkItem = {
    name: string
    to: RouteLocationNamedRaw
}

const props = defineProps<{
    title?: string,
    items: Array<LinkItem>
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
}

.icon {
    height: 18px;
    width: 18px;
    margin: auto;
}

.dropdown:hover > .button {
    text-decoration: underline;
    background: var(--secondary-bg-color);
}

.container {
    display: none;
    position: absolute;
    right: 0;
    padding-top: 8px;
}

.content {
    border-radius: 4px;
    background: var(--secondary-bg-color);
    min-width: 200px;
}

.content a {
    color: #fff;
    padding: 12px;
    text-decoration: none;
    display: block;
}

.content a:hover {
    background: var(--tertiary-bg-color);
}

.dropdown:hover .container {
    display: block;
}
</style>