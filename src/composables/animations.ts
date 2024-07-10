import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"

export default function useAnimations() {
    const route = useRoute()

    function handleScroll() {
        const navElement = document.querySelector("nav")
        if (window.scrollY > 10) {
            navElement.style.backgroundColor = "black"
        } else {
            navElement.style.backgroundColor = "transparent"
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
        window.addEventListener("scroll", handleScroll)
    })

    watch(() => route, () => {
        console.log(route)
        handleScroll()
    })
}

