<template>
    <div
        class="card"
        @click="handleClick"
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
                    v-for="item in items"
                    :key="item.name"
                    class="flex-column align-center"
                >
                    <img
                        :src="item.src"
                        :alt="item.name"
                    >
                    <div class="text-xxsmall">
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="button text-right">
                <ArrowRightIcon class="icon-small" />
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { ArrowRightIcon } from "@heroicons/vue/16/solid"
import { Service } from "@/types/index"
import useServices from "@/composables/services"

const props = defineProps<{
    service: Service
}>()

const { getServiceLink } = useServices()
const router = useRouter()

function handleClick() {
    router.push(getServiceLink(props.service).to)
}

const items = [
    { name: "React", src: "./react.webp" },
    { name: "Vue", src: "./vue.webp" },
    { name: "Angular", src: "./angular.webp" },
    { name: "Swift", src: "./swift.png" },
    { name: "Flutter", src: "./flutter.png" },
    { name: "Figma", src: "./figma.png" }
]
</script>

<style scoped>
.card {
    padding: 24px 28px;
    background-color: var(--card-bg-color);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: none;
    transition: filter var(--transition-duration) ease-in-out;
}

.card:hover {
    filter: brightness(125%)
}

.description {
    padding: 12px 0;
}

h2 {
    margin-block: 0.5em;
}

ul {
    padding-inline-start: 28px;
}

li {
    margin-bottom: 8px;
}

.button {
    margin-top: 48px;
    width: 100%;
}

.grid {
    padding: 24px 28px;
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

header {
    margin-bottom: auto;
}

.content {
    margin-bottom: 24px;
}

footer {
    margin-top: auto;
}
</style>