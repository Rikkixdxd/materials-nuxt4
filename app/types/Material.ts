import type { OutputBlockData } from "@editorjs/editorjs/types/data-formats/output-data"

export type MaterialRaw = {
    id: number
    title: string
    short_description?: string
    datetime: string
    description_html?: string
    description_json?: string
}

export type Material = {
    id: number
    title: string
    description: string
    createdAt: number
    html: string
    blocks: Block[]
}

export type Block = OutputBlockData