<template>
    <div class="dropdown">
        <div class="button text-xsmall">
            {{ props.title }}
        </div>
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
</template>

<script lang="ts" setup>
import { RouteLocationNamedRaw } from "vue-router"

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
}

.button {
    height: 24px;
    padding: 12px;
    cursor: pointer;
    border-radius: 4px;
    border-width: 0;
    color: white;
}

.button:hover {
    text-decoration: underline;
}

.content {
    border-radius: 4px;
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 160px;
}

.content a {
    color: #fff;
    padding: 12px;
    text-decoration: none;
    display: block;
}

.content a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.dropdown:hover .content {
    display: block;
}
</style>