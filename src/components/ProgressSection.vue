<template>
    <section class="max-width flex-row">
        <article
            v-if="props.previousLink"
            class="card left-card flex-column"
        >
            <div class="text-xxsmall flex-row justify-start">
                <ChevronLeftIcon class="icon-xsmall" />
                <span class="uppercase">Previous</span>
            </div>
            <div class="text-xsmall flex-row justify-start">
                {{ props.previousLink.name }}
            </div>
        </article>
        <article 
            v-if="props.nextLink"
            class="card right-card flex-column"
        >
            <div class="text-xxsmall flex-row justify-end">
                <span class="uppercase">Next</span>
                <ChevronRightIcon class="icon-xsmall" />
            </div>
            <div class="text-xsmall flex-row justify-end">
                {{ props.nextLink.name }}
            </div>
        </article>
    </section>
</template>

<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/16/solid"
import { Link } from "@/types"

const props = defineProps<{
    previousLink?: Link
    nextLink?: Link
}>()
</script>

<style scoped>
article {
    width: 50%;
}

.card {
    padding: 24px 28px;
    background-color: var(--card-bg-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    box-shadow: none;
    transition: background-color var(--transition-duration) ease-in-out;
}

.card:hover {
    background-color: var(--card-hover-bg-color);
}

.left-card {
    justify-self: flex-start;
    margin-right: 16px;
}

.right-card {
    justify-self: flex-end;
    margin-left: 16px;
}
</style>