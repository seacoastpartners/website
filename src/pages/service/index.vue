<template>
    <DefaultLayout>
        <HeaderSection :service="currentService" />
        <ProgressSection
            :previous-link="previousServiceLink"
            :next-link="nextServiceLink"
        />
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "@/layouts/Default.vue"
import HeaderSection from "@/pages/service/components/HeaderSection.vue"
import ProgressSection from "@/components/ProgressSection.vue"
import useServices from "@/composables/services"
import { useRoute } from "vue-router"
import { titleCase } from "@/utils/strings"
import { computed } from "vue"

const { services, getServiceLink } = useServices()
const route = useRoute()

const currentServiceIndex = computed(() => {
    return services.findIndex(service => service.name === titleCase(route.params.name as string))
})

const currentService = computed(() => {
    return services[currentServiceIndex.value]
})

const previousServiceLink = computed(() => {
    if (currentServiceIndex.value === 0) {
        return null
    }
    const service = services[currentServiceIndex.value - 1]
    return getServiceLink(service)
})

const nextServiceLink = computed(() => {
    if (currentServiceIndex.value === services.length - 1) {
        return null
    }
    const service = services[currentServiceIndex.value + 1]
    return getServiceLink(service)

})
</script>

<style scoped>

</style>