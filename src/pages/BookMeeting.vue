<template>
    <DefaultLayout>
        <div 
            class="form-container"
            data-tf-opacity="100"
            data-tf-inline-on-mobile
            data-tf-iframe-props="title=Lead Capture Form STP"
            data-tf-transitive-search-params
            data-tf-auto-focus
            data-tf-live="01HKFVE05H4YBC5HQ39DR5A0WM" 
        />
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "@/layouts/Default.vue"
; (() => {
    if (window.localStorage) {
        if (!localStorage.getItem("reload")) {
            localStorage["reload"] = true
            window.location.reload()
        } else {
            localStorage.removeItem("reload")
        }
    }
})()
</script>

<style scoped>
.form-container {
    min-width: 100%;
    height: 100vh;
}
</style>
