import { onMounted } from "vue"

export default function useScrollEffects() {
    function isInViewport(element: HTMLElement) {
        const rect = element.getBoundingClientRect()
        const buffer = 100 // Extra space in pixels before elements fade out.
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
            rect.bottom >= -buffer // Adjust buffer as needed.
        )
    }

    function scrollListener() {
        const items = document.querySelectorAll(".fade-in-on-scroll") as NodeListOf<HTMLElement>
        items.forEach(item => {
            if (isInViewport(item)) {
                item.style.opacity = "1"
            } else {
                item.style.opacity = "0"
            }
        })
    }
    
    onMounted(() => {
        setTimeout(scrollListener, 100)
        window.addEventListener("scroll", scrollListener)
    })
}

