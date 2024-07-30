<template>
    <RouterLink
        class="button text-small"
        :to="bookMeetingLink"
    >
        Apply Now
    </RouterLink>
</template>

<script lang="ts" setup>
const bookMeetingLink = { name: "book-meeting" }
</script>

<style scoped>
.button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: white;
    border: 1px solid var(--primary-color);
    background-image: linear-gradient(90deg,
        var(--quinary-color) 0%,
        var(--quaternary-color) 20%,
        var(--tertiary-color) 40%,
        var(--secondary-color) 60%,
        var(--primary-color) 100%);
    background-position: right top;
    background-size: 100% auto;
    transition: background-size var(--transition-duration) ease-in-out;
}

.button:hover {
    background-size: 400% auto;
    background-color: var(--secondary-color);
}
</style>