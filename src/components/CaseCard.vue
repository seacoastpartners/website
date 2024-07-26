<template>
    <div
        class="card flex-row"
    >
        <div class="description flex-column justify-between">
            <header>
                <a
                    target="_blank"
                    :href="props.case.link"
                    class="text-small font-heavy link"
                    :style="{ 
                        backgroundImage: `linear-gradient(90deg, ${props.case.color} 0%, ${props.case.color} 100%)`
                    }"
                >
                    {{ props.case.name }}
                    <ArrowTopRightOnSquareIcon class="icon-small" />
                </a>
                <ul class="flex-row uppercase">
                    <li
                        v-for="a in props.case.areas"
                        :key="a"
                        class="text-xxsmall"
                    >
                        {{ a }}
                    </li>
                </ul>
            </header>
            <p class="text-xsmall">
                {{ props.case.summary }}
            </p>
            <p class="text-xxsmall">
                {{ props.case.details }}
            </p>
        </div>
        <div class="image flex-column align-center justify-center">
            <img
                :src="props.case.image"
                :alt="props.case.name"
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/16/solid"
import { Case } from "@/types"

const props =defineProps<{
    case: Case
}>()
</script>

<style scoped>
.description,
.image {
    width: 50%;
}

.description > header > ul {
    list-style-type: none;
    padding: 0;
    gap: 4px;
    flex-wrap: wrap;
}

.description > header > ul > li {
    padding: 4px 8px;
    border-radius: 16px;
    border: 1px solid white;
    display: inline-block;
}

.image > img {
    height: 80%;
    width: 80%;
    object-fit: contain;
}

.link {
    display: inline-flex;
    gap: calc(var(--item-gap) / 2);
    text-decoration: none;
    color: white;
    background-image: linear-gradient(90deg,
        var(--primary-color) 0%,
        var(--primary-color) 100%);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 2px;
}

@media (max-width: 640px) {
    .card {
        flex-direction: column;
        gap: var(--item-gap);
    }

    .description,
    .image {
        width: 100%;
    }
}
</style>