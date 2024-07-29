<template>
    <div
        class="card flex-column"
        :style="{ 'background-image': `url(${props.testimonial.image})` }"
    >
        <div class="content flex-column fade-in-on-scroll">
            <blockquote class="text-xsmall">
                {{ props.testimonial.quote }}
            </blockquote>
            <h3 class="text-xsmall">
                <span class="font-heavy">
                    — {{ props.testimonial.name }},
                </span>
                <span class="font-regular">
                    <i>{{ props.testimonial.title }}</i>
                </span>
            </h3>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Testimonial } from "@/types"

const props = defineProps<{
    testimonial: Testimonial
}>()
</script>

<style scoped>
.card {
    max-width: 650px;
    background-position: 97.5% 90%;
    background-size: 25%;
    background-blend-mode: color-burn;
    background-repeat: no-repeat;
    box-shadow: none;
    transition: margin var(--transition-duration) ease-in-out;
}

.card:nth-child(odd) {
    margin-right: 10%;
}

.card:nth-child(even) {
    margin-left: 10%;
}

blockquote {
    border-left: 6px solid rgba(255, 255, 255, 0.1);
    padding: 1em;
    margin-inline: 0;
}

.content > p {
    margin-top: 0;
}

@media (max-width: 640px) {
    .card {
        max-width: 100%;
    }

    .card:nth-child(odd) {
        margin-right: 0;
    }

    .card:nth-child(even) {
        margin-left: 0;
    }
}
</style>