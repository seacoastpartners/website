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
        <video
            controls
        >
            <source
                src="/test.mp4"
                type="video/mp4"
            >
        </video>
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

video {
    object-fit: cover;
    width: 100%;
    border-radius: var(--border-radius);
}

.actions {
    padding-top: 32px;
}

.button {
    padding: 6px 12px;
    cursor: pointer;
    border-radius: var(--border-radius);
    text-decoration: none;
    color: white;
    border: 1px solid white;
    transition: color var(--transition-duration) ease-in-out;
    transition: background-color var(--transition-duration) ease-in-out;
}

.button:hover {
    color: black;
    background-color: white;
}
</style>