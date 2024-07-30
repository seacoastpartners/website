import { ref, onMounted, onUnmounted } from "vue"

export function useWindowSize() {
    const isMobile = ref(window.innerWidth <= 640)

    const handleResize = () => {
        isMobile.value = window.innerWidth <= 640
    }

    onMounted(() => {
        window.addEventListener("resize", handleResize)
    })

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize)
    })

    return { isMobile }
}