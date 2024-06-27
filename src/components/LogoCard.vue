<template>
    <div class="card">
        <div
            v-if="props.title"
            class="title text-xxsmall"
        >
            {{ sentenceCase(props.title) }}
        </div>
        <div class="content grid">
            <div
                v-for="item in props.items"
                :key="item.name"
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
    title?: string,
    items: Array<LogoItem>
}>()

function sentenceCase(str: string) {
    return str
        .replace(/([A-Z])/g, " $1")
        .toUpperCase()
}
</script>

<style scoped>
.card {
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    box-shadow: none;
}

.title {
    font-weight: bold;
    margin-bottom: 16px;
}

.content {
    padding: 12px 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.grid > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.grid > div > img {
    margin-bottom: 4px;
    width: 50px;
    height: 50px;
    object-fit: contain;
}
</style>