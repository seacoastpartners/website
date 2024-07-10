<template>
    <section class="max-width">
        <header class="text-left">
            <h1 class="title text-large font-heavy">
                {{ props.service.name }}
            </h1>
            <p class="text-xsmall">
                {{ props.service.summary }}
            </p>
        </header>
        <div
            v-for="item in props.service.items"
            :key="item.name"
        >
            <div class="item">
                <h2 class="text-medium">
                    {{ item.name }}
                </h2>
                <p class="text-xsmall">
                    {{ item.summary }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Service } from "@/types"

const props = defineProps<{
    service: Service
}>()
</script>

<style scoped>
section {
    padding: var(--section-padding);
    padding-top: 48px;
}
</style>