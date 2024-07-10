import { FunctionalComponent } from "vue"
import { RouteLocationNamedRaw } from "vue-router"

export interface Link {
    name: string
    to: RouteLocationNamedRaw
}

export interface Work {
    icon: FunctionalComponent
    name: string
    summary: string
}

export interface Service extends Work {
    items: Work[]
}