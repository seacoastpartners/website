<template>
    <div class="client-testimonials-section fade-in-on-scroll">
        <h2 class="testimonials-section-header">What Our Clients Say</h2>
        <div class="testimonials-container">
            <div v-for="(testimonial, index) in testimonials" :key="index"
                :class="['testimonial', getPositionClass(index)]">
                <div class="testimonial-content">
                    <p class="testimonial-text">{{ testimonial.testimonial }}</p>
                    <h3 class="client-name">{{ testimonial.name }}</h3>
                    <p class="client-title">{{ testimonial.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const testimonials = [
    {
        name: "Juan Manuel Segura",
        title: "CEO, CardioSpeed",
        testimonial: "\"What we had to do was very complicated. We were taking a proprietary computer vision algorithm developed by PHDs at the University of Notre Dame\
        and we brought in Chris and Shane to build us a prototype that we could demo to our initial users. Really glad we were able to rely on STP to build the tech \
        quickly and cleanly.\"",
        // image: "/testimonials-images/juan-manuel-segura.jpeg",
    },
    {
        name: "Andrew Pemberton",
        title: "President, Pemberton Advisory",
        testimonial: "\"Chris and Shane are the best. They are rock solid devs that will exceed your expectations with consistent open, honest communication throughout their development\
        so that you have the peace of mind that you will be able to deliver to your customers and clients on time.\"",
    },
    {
        name: "Antonio Cucciniello",
        title: "Founder, Investarters",
        testimonial: "\"I don't know what I would have done if not for STP. I got so much value for working with reasonable guys who understand startups, and where nothing gets lost in \
        translation. STP worked with my constraints and built me production-ready software products that I am now actively monetizing. It's awesome.\"",
    }
]
function getPositionClass(index) {
    return index % 2 === 0 ? "left" : "right"
}
</script>

<style scoped>
.client-testimonials-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px 20px;
    color: #DDD;
}

.testimonials-section-header {
    margin-bottom: 80px;
    /* Space between header and testimonials */
    color: #FFF;
    /* Bright color for the header */
}

.testimonials-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
}

.testimonial {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    /* Adjusted width for a more rectangular shape */
    padding: 20px 40px;
    /* Adjusted padding for better proportions */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    box-shadow: none;
    margin: 20px auto;
    /* Centering testimonials */
    transition: margin 0.3s ease;
    /* Smooth transition for margin changes */
}

.testimonial.left {
    margin-right: 10%;
    /* Pushes left testimonials a bit to the left */
}

.testimonial.right {
    margin-left: 10%;
    /* Pushes right testimonials a bit to the right */
}

.testimonial-content {
    display: flex;
    flex-direction: column;
}

.testimonial-text {
    font-size: 24px;
    line-height: 1.4;
    color: #EEE;
    margin-bottom: 8px;
    /* Decreased space between testimonial and client name */
    font-style: italic;
    /* Italicized text */
}

.client-name {
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    margin-bottom: 2px;
    /* Decreased spacing between name and title */
}

.client-title {
    font-size: 18px;
    color: #CCC;
}

/* Mobile-friendly adjustments */
@media (max-width: 768px) {
    .testimonials-section-header {
        font-size: 28px;
        /* Adjusted font size for the header */
        margin-bottom: 40px;
        /* Reduced space between header and testimonials */
    }

    .testimonial {
        max-width: calc(100% - 40px);
        /* Adjusting the width to account for padding */
        padding: 20px;
        /* Reduced padding */
        margin: 20px 20px;
        /* Adjust margin to prevent overflow */
    }

    /* On mobile, don't stagger; stack them normally */
    .testimonial.left,
    .testimonial.right {
        margin-left: auto;
        margin-right: auto;
    }

    .testimonial-text {
        font-size: 18px;
        /* Smaller font size for the testimonial text */
    }

    .client-name {
        font-size: 16px;
        /* Smaller font size for the client's name */
        margin-bottom: 2px;
        /* Adjusted spacing between name and title */
    }

    .client-title {
        font-size: 14px;
        /* Smaller font size for the client's title */
    }

    .illustration-background {
        background-size: cover;
        /* Cover the entire background; adjust as needed */
        opacity: 0.5;
        /* Make it more subtle; adjust as needed */
    }
}</style>
