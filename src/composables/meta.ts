import { useSeoMeta } from "@unhead/vue"

type MetaOptions = {
    page: string
    path?: string
}

export function useMeta(options: MetaOptions) {
    const title = `STP | ${options.page}`
    return useSeoMeta({
        title,
        ogTitle: title,
        ogUrl: `https://seacoast.partners${options.path || ""}`,
        twitterCard: "summary_large_image"
    })
}