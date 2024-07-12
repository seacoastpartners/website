<template>
    <div class="card flex-column text-center">
        <div
            v-if="props.title"
            class="title font-heavy text-xxsmall uppercase"
        >
            {{ props.title }}
        </div>
        <div class="content grid">
            <div
                v-for="item in props.items"
                :key="item.name"
                class="flex-column align-center"
            >
                <img
                    :src="item.src"
                    :alt="item.name"
                >
                <span class="text-xxsmall">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
type LogoItem = {
    name: string
    src: string
}

const props = defineProps<{
    title: string,
    items: Array<LogoItem>
}>()
</script>

<style scoped>
.card {
    padding: 24px 28px;
    background-color: var(--card-bg-color);
    border-radius: var(--border-radius);
}

.title {
    margin-bottom: 16px;
}

.content {
    padding: 12px 0;
}

.grid {
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
</style>