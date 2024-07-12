<template>
    <Component
        :is="DefaultLayout"
    >
        <RouterView />
    </Component>
</template>

<script lang="ts" setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import useAnimations from "@/composables/animations"

useAnimations()
</script>