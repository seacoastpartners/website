<template>
    <Component
        :is="DefaultLayout"
    >
        <RouterView />
    </Component>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import { useAnimations } from "@/composables/animations"

const { handleScroll } = useAnimations()

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>