export function useAnimations() {
    function handleScroll() {
        const navElement = document.querySelector("nav")
        if (navElement) {
            if (window.scrollY > 10) {
                navElement.style.backgroundColor = "black"
            } else {
                navElement.style.backgroundColor = "transparent"
            }
        }
        
        const fadableElements = document.querySelectorAll(".fade-in-on-scroll") as NodeListOf<HTMLElement>
        console.log(fadableElements)
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

    return { handleScroll }
}

