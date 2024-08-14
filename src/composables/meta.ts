import { useSeoMeta } from "@unhead/vue"

export function useMeta(titleSuffix: string) {
    const title = `STP | ${titleSuffix}`
    const description = "Full stack software studio founded by serial entrepreneurs on a mission to make the world more entrepreneurial."
    return useSeoMeta({
        title,
        ogTitle: title,
        description: description,
        ogDescription: description,
        twitterCard: "summary_large_image"
    })
}