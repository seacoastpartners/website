<template>
    <div
        id="banner"
        @click="$router.push(mvpLink)"
    >
        <div class="content flex-row align-center justify-center">
            <RocketLaunchIcon class="icon-xsmall" />
            <div class="text-xsmall">
                Build your MVP in <span class="underline">45 days for $5k</span>
            </div>
            <ArrowRightIcon class="icon-xsmall" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import RocketLaunchIcon from "@heroicons/vue/16/solid/RocketLaunchIcon"
import ArrowRightIcon from "@heroicons/vue/16/solid/ArrowRightIcon"

const mvpLink = { name: "mvp" }
</script>

<style scoped>
#banner {
    top: 0;
    position: sticky;
    position: -webkit-sticky;
    display: block;
    z-index: 20000;
    background-color: var(--quinary-color);
    width: 100%;
    cursor: pointer;
    transition: filter var(--transition-duration) ease-in-out;
}

#banner:hover {
    filter: brightness(105%);
}

.content {
    padding: 0 var(--layout-padding-x);
    gap: calc(var(--item-gap) / 2);
}

#banner, .content {
    height: 36px;
}
</style>