<template>
    <div class="button" @click="handleClick">
        {{ props.text }}
    </div>
</template>

<script setup>
import router from "@/router"
import { defineProps } from "vue"

const props = defineProps({
    text: String,
})

function handleClick() {
    router.push({ name: "form" })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
    width: fit-content;
    font-size: 24px;
    font-weight: 900;
    padding: 6px 12px 6px 12px;
    cursor: pointer;
    background-color: black;
    transition: all 0.25s;
}

.button:hover {
    color: rgb(0, 123, 174);
}
</style>
