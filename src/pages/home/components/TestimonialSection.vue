<template>
    <section class="max-width">
        <header class="fade-in-on-scroll">
            <h2 class="text-large font-heavy">
                What Our Clients Say
            </h2>
        </header>
        <div class="container">
            <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :class="['card', getPositionClass(index), 'fade-in-on-scroll']"
                :style="{ 'background-image': `url(${testimonial.background})` }"
            >
                <div class="content fade-in-on-scroll">
                    <blockquote class="text-xsmall">
                        {{ testimonial.testimonial }}
                    </blockquote>
                    <h3 class="client">
                        — {{ testimonial.name }}, <span class="title">{{ testimonial.title }}</span>
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const testimonials = [
    {
        name: "Juan Manuel Segura",
        title: "CEO, CardioSpeed",
        testimonial: "\"What we had to do was very complicated. We were taking a proprietary computer vision algorithm developed by PHDs at the University of Notre Dame\
        and we brought in Chris and Shane to build us a prototype that we could demo to our initial users. Really glad we were able to rely on STP to build the tech \
        quickly and cleanly.\"",
        background: "./cardiospeed.png"
        // image: "/testimonials-images/juan-manuel-segura.jpeg",
    },
    {
        name: "Andrew Pemberton",
        title: "CEO, BasisPoint+",
        testimonial: "\"Chris and Shane are the best. They are rock solid devs that will exceed your expectations with consistent open, honest communication throughout their development\
        so that you have the peace of mind that you will be able to deliver to your customers and clients on time.\"",
        background: "./basispoint+.png"
    },
    {
        name: "Antonio Cucciniello",
        title: "Founder, Investarters",
        testimonial: "\"Working with the STP Team was phenomenal. They actually took the time to truly understand each of the requirements and the real reasoning behind them to build my platform properly. \
        They built a tool that cut my time running a service by 83% (nearly a full hour every time.) Can’t thank them enough. I'm excited to work with STP on future projects as well! They understand what it’s\
         like to be a start up and get you production level software quickly.\"",
        background: "./investarters.jpeg"
    }
]
function getPositionClass(index: number) {
    return index % 2 === 0 ? "left" : "right"
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--section-padding);
}

header {
    padding: 30px;
}

.container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
}

.card {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: 20px 30px;
    background-color: var(--card-bg-color);
    background-position: 97.5% 90%;
    background-size: 25%;
    background-blend-mode: color-burn;
    background-repeat: no-repeat;
    border-radius: var(--border-radius);
    box-shadow: none;
    transition: margin var(--transition-duration) ease-in-out;
}

blockquote {
    border-left: 6px solid rgba(255, 255, 255, 0.1);
    padding: 1em;
    margin-left: 0;
}

.card.left {
    margin-right: 10%;
}

.card.right {
    margin-left: 10%;
}

.content {
    display: flex;
    flex-direction: column;
}

.content > p {
    margin-top: 0;
}

.client {
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    margin-bottom: 2px;
}

.title {
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    color: #CCC;
}

@media (max-width: 768px) {
    header {
        padding: 30px 0;
    }

    .testimonial {
        max-width: calc(100% - 40px);
        padding: 20px;
    }

    .testimonial.left,
    .testimonial.right {
        margin: 0 auto;
    }

    .client {
        font-size: 16px;
        margin-bottom: 2px;
    }

    .title {
        font-size: 14px;
    }
}
</style>
