import { onMounted } from "vue"

export default function useAnimations() {
    function handleScroll() {
        const navElement = document.querySelector("nav")
        if (window.scrollY > 10) {
            navElement.style.backgroundColor = "var(--primary-bg-color)"
        } else {
            navElement.style.backgroundColor = "rgba(0,0,0,0)"
        }
        
        const fadableElements = document.querySelectorAll(".fade-in-on-scroll") as NodeListOf<HTMLElement>
        fadableElements.forEach(element => {
            const rect = element.getBoundingClientRect()
            const buffer = 100
            if (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
                rect.bottom >= -buffer
            ) {
                element.style.opacity = "1"
            } else {
                element.style.opacity = "0"
            }
        })
    }
    
    onMounted(() => {
        setTimeout(handleScroll, 100)
        window.addEventListener("scroll", handleScroll)
    })
}

