export default function useScrollEffects() {
    function isInViewport(element: HTMLElement) {
        const rect = element.getBoundingClientRect()
        const buffer = 100 // Extra space in pixels before elements fade out.
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
            rect.bottom >= -buffer // Adjust buffer as needed.
        )
    }
    
    function runOnScroll() {
        const items = document.querySelectorAll(".fade-in-on-scroll") as NodeListOf<HTMLElement>
        items.forEach(item => {
            if (isInViewport(item)) {
                item.style.opacity = "1"
                // item.style.transform = "translateY(0px)";
            } else {
                item.style.opacity = "0"
                // item.style.transform = "translateY(20px)";
            }
        })
    }

    return {
        runOnScroll
    }
}

