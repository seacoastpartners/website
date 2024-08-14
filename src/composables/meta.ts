import { useSeoMeta } from "@unhead/vue"

type MetaOptions = {
    page: string
    path?: string
}

export function useMeta(options: MetaOptions) {
    const title = `STP | ${options.page}`
    const description = "Full stack software studio founded by serial entrepreneurs on a mission to make the world more entrepreneurial."
    return useSeoMeta({
        title,
        ogTitle: title,
        description: description,
        ogDescription: description,
        ogUrl: `https://seacoast.partners${options.path || ""}`,
        twitterCard: "summary_large_image"
    })
}