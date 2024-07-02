<template>
    <div class="card">
        <div
            v-if="props.title"
            class="title font-bold text-small"
        >
            {{ props.title }}
        </div>
        <div class="description text-left">
            {{ props.description }}
        </div>
        <ul class="list text-left">
            <li
                v-for="item in props.items"
                :key="item"
            >
                {{ item }}
            </li>
        </ul>
        <div class="button text-right">
            <ArrowRightIcon class="icon" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/16/solid"

const props = defineProps<{
    title: string,
    description: string,
    items: string[]
}>()
</script>

<style scoped>
.card {
    padding: 20px 30px;
    background: var(--secondary-bg-color);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: none;
}

.card:hover {
    background: var(--tertiary-bg-color);
}

.title {
    margin-bottom: 16px;
}

.description {
    padding: 12px 0;
}

.list {
    width: 100%;
}

.button {
    width: 100%;
}

.icon {
    height: 18px;
    width: 18px;
    margin: auto;
}
</style>