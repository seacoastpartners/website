<template>
    <section>
        <video
            playsinline
            autoplay
            muted
            loop
            poster="/seacoast.png"
        >
            <source
                src="/seacoast.mp4"
                type="video/mp4"
            >
        </video>
        <article class="max-width fade-in">
            <h1 class="title text-xlarge font-heavy">
                Build beautiful.
            </h1>
            <p class="text-small font-bold">
                We're a team of full stack software engineers, designers, and product developers
                who help you build new products and features to delight your customers.
            </p>
            <p class="text-xsmall">
                <img
                    class="flag"
                    src="@/assets/flag.png"
                >Based in the USA.
            </p>
            <p>
                <router-link
                    class="button text-small font-bold"
                    to="/book-meeting"
                >
                    Book Meeting
                </router-link>
            </p>
        </article>
    </section>
</template>

<style scoped>
section {
    padding-top: 48px;
    position: relative;
    height: 100vh;
    background-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.25) 50%,
            rgba(0, 0, 0, 1));
    transition: all 0.3s;
}

video {
    object-fit: cover;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: -1;
}

article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
}

.flag {
    margin: 0 6px -2px 0;
}

.subheader {
    margin: 0px;
    font-size: 24px;
    font-weight: 600;
    padding-right: 100px;
}

.note {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    gap: 12px;
}

.button {
    color: white;
    background: linear-gradient(
        90deg, 
        rgba(115, 208, 159, 1) 0%, 
        rgba(31, 192, 166, 1) 25%, 
        rgba(40, 178, 191, 1) 75%, 
        rgba(57, 130, 171, 1) 100%
    );
    font-family: 'Open Sans Hebrew', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 6px 12px;
    cursor: pointer;
    transition: background .25s;
    border-radius: 4px;
    border-width: 0;
    text-decoration: none;
}

.button:hover {
    background: rgb(57, 130, 171);
}

@media (max-width: 768px) {
    .hero-text-container {
        max-width: 100%;
    }

    .hero-section {
        padding: 12px 12px 80px 12px;
    }

    .hero-text-subheader {
        padding-right: 50px;
    }

    .hero-text-header {
        font-size: 64px;
        line-height: 70px;
        margin: 0px 0px 10px 0px;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>