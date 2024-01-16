<template>
    <section>
        <h2 class="text-large font-heavy fade-in-on-scroll">
            What Our Clients Say
        </h2>
        <div class="testimonials-container">
            <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :class="['testimonial', getPositionClass(index), 'fade-in-on-scroll']"
            >
                <div class="testimonial-content fade-in-on-scroll">
                    <p class="text-xsmall font-italic">
                        {{ testimonial.testimonial }}
                    </p>
                    <h3 class="client-name">
                        {{ testimonial.name }}
                    </h3>
                    <p class="client-title">
                        {{ testimonial.title }}
                    </p>
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
        quickly and cleanly.\""
        // image: "/testimonials-images/juan-manuel-segura.jpeg",
    },
    {
        name: "Andrew Pemberton",
        title: "President, Pemberton Advisory",
        testimonial: "\"Chris and Shane are the best. They are rock solid devs that will exceed your expectations with consistent open, honest communication throughout their development\
        so that you have the peace of mind that you will be able to deliver to your customers and clients on time.\""
    },
    {
        name: "Antonio Cucciniello",
        title: "Founder, Investarters",
        testimonial: "\"Working with the STP Team was phenomenal. They actually took the time to truly understand each of the requirements and the real reasoning behind them to build my platform properly. \
        They built a tool that cut my time running a service by 83% (nearly a full hour every time.) Can’t thank them enough. I'm excited to work with STP on future projects as well! They understand what it’s\
         like to be a start up and get you production level software quickly.\""
    }
]
function getPositionClass(index) {
    return index % 2 === 0 ? "left" : "right"
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10vh 24px;
}

.testimonials-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    margin: 24px 0;
}

.testimonial {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    box-shadow: none;
    transition: margin 500ms ease-in-out;
}

.testimonial.left {
    margin-right: 10%;
}

.testimonial.right {
    margin-left: 10%;
}

.testimonial-content {
    display: flex;
    flex-direction: column;
}

.client-name {
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    margin-bottom: 2px;
}

.client-title {
    font-size: 18px;
    color: #CCC;
}

@media (max-width: 768px) {
    .testimonial {
        max-width: calc(100% - 40px);
        padding: 20px;
    }

    .testimonial.left,
    .testimonial.right {
        margin: 0 auto;
    }

    .client-name {
        font-size: 16px;
        margin-bottom: 2px;
    }

    .client-title {
        font-size: 14px;
    }
}
</style>
