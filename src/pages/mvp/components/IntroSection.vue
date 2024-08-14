<template>
    <section class="max-width">
        <header class="flex-column align-center text-center">
            <h1 class="text-xlarge font-heavy">
                Build Your MVP
            </h1>
            <p class="text-small">
                Go from idea to minimum viable product <span class="inline-block">in 45 days for $5k.</span>
            </p>
        </header>
        <div class="video">
            <iframe
                frameborder="0"
                src="https://www.youtube.com/embed/0a2uPyg_kXQ"
            />
        </div>
        <p class="actions flex-row align-center justify-center">
            <GradientButton
                text="Apply Now"
                :to="bookMeetingLink"
            />
        </p>
    </section>
</template>

<script lang="ts" setup>
import GradientButton from "@/components/GradientButton.vue"

const bookMeetingLink = { name: "book-meeting" }
</script>

<style scoped>
section {
    padding: 
        calc(var(--layout-padding-y) * 2)
        var(--layout-padding-x) 
        var(--layout-padding-y)
        var(--layout-padding-x);
}

section > header {
    padding: 32px 0;
}

section > header > p {
    margin-bottom: 0;
}

.video {
    position: relative;
    padding-bottom: 56.25%;
    border-radius: var(--border-radius);
}

.video > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
}

.actions {
    padding-top: 32px;
    margin-bottom: 0;
}

@media (max-width: 640px) {
    .video {
        width: 100%;
        height: 100%;
    }
}
</style>