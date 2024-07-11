<template>
    <div
        class="card"
    >
        <header
            v-if="props.service.name"
        >
            <component
                :is="props.service.icon"
                class="icon-large"
            />
            <h2 class="font-bold text-small">
                {{ props.service.name }}
            </h2>
        </header>
        <div class="content">
            <ul class="text-left">
                <li
                    v-for="item in props.service.items"
                    :key="item.name"
                    class="text-xsmall"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <footer>
            <div class="grid">
                <div
                    v-for="logo in props.service.logos"
                    :key="logo.name"
                    class="flex-column align-center"
                >
                    <img
                        :src="logo.src"
                        :alt="logo.name"
                    >
                    <div class="text-xxsmall">
                        {{ logo.name }}
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { Service } from "@/types/index"

const props = defineProps<{
    service: Service
}>()
</script>

<style scoped>
.card {
    padding: 24px 28px;
    background-color: var(--card-bg-color);
    border-radius: 4px;
}

h2 {
    margin-block: 0.5em;
}

ul {
    padding-inline-start: 28px;
}

li {
    margin-bottom: 4px;
}

.grid {
    max-width: 95%;
    margin: 12px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--grid-gap);
}

.grid > div > img {
    margin-bottom: 4px;
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.content {
    margin-bottom: 24px;
}

footer {
    margin-top: auto;
}

footer > .title {
    margin-bottom: 16px;
}
</style>