import { useSeoMeta } from "@unhead/vue"

type MetaOptions = {
    page: string
    path?: string
}

export function useMeta(options: MetaOptions) {
    const title = `STP | ${options.page}`
    const description = "Startup-experienced full-stack software engineers committed to high-quality, fast delivery. Based in the USA."
    return useSeoMeta({
        title,
        ogTitle: title,
        description: description,
        ogDescription: description,
        ogUrl: `https://seacoast.partners${options.path || ""}`,
        twitterCard: "summary_large_image"
    })
}