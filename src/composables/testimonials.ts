import { Testimonial } from "@/types"

export function useTestimonials() {
    const testimonials: Testimonial[] = [
        {
            name: "Andrew Pemberton",
            title: "CEO, BasisPoint+",
            quote: "Chris and Shane are the best. They are rock solid devs that will exceed your expectations with consistent open, honest communication throughout their development \
                so that you have the peace of mind that you will be able to deliver to your customers and clients on time.",
            image: "./basispointplus.png",
            tags: ["mvp"]
        },
        {
            name: "Juan Manuel Segura",
            title: "CEO, CardioSpeed",
            quote: "What we had to do was very complicated. We were shipping a proprietary computer vision algorithm developed by PHDs at the University of Notre Dame \
                and we brought in Chris and Shane to build us a prototype that we could demo to our initial users. Really glad we were able to rely on STP to build the tech \
                quickly and cleanly.",
            image: "./cardiospeed.png",
            tags: ["mvp"]
        },
        {
            name: "Antonio Cucciniello",
            title: "Founder, Investarters",
            quote: "Working with the STP Team was phenomenal. They actually took the time to truly understand each of the requirements and the real reasoning behind them to build my platform properly. \
                They built a tool that cut my time running a service by 83% (nearly a full hour every time). Can't thank them enough. I'm excited to work with STP on future projects as well! They understand what it's \
                like to be a start up and get you production level software quickly.",
            image: "./investarters.svg",
            tags: ["mvp"]
        }
    ]

    return { testimonials }
}