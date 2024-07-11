import { FunctionalComponent } from "vue"
import { RouteLocationNamedRaw } from "vue-router"

export interface Link {
    name: string
    to: RouteLocationNamedRaw
}

export interface Logo {
    name: string
    src: string
}

export interface Work {
    name: string
    summary: string
    icon?: FunctionalComponent
    logos?: Logo[]
}

export interface Service extends Work {
    items: Work[]
}