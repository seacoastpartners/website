<template>
    <section class="max-width">
        <header class="flex-column align-center text-center">
            <h1 class="text-xlarge font-heavy">
                Build Your MVP
            </h1>
            <p class="text-small">
                Go from new idea to product launch in 45 days for $5k.
            </p>
        </header>
        <div class="video">
            <iframe
                frameborder="0"
                src="https://www.youtube.com/embed/fSj-2o2ttAE"
            />
        </div>
    </section>
</template>

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

.video {
    position: relative;
    padding-bottom: 56.25%;
}

.video > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
}
</style>