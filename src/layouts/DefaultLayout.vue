<template>
    <div>
        <NavBar />
        <slot />
        <FooterSection />
    </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue"
import FooterSection from "@/components/FooterSection.vue"
</script>