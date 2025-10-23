import type { Block, Material, MaterialRaw } from "~/types/Material";


export const Utilities = () => {

    function escapeHtml(s: string = ""): string {
        // Убираем все HTML теги, кроме <br> и <br/>
        return s.replace(/<(?!\/?br\s*\/?>)[^>]+>/gi, '');
    }

    function convertToHTML(blocks: Block[], allowHtmlInText = false): string {
        // Функция для экранирования HTML, смотрит еще на allowHtmlInText
        const esc = (str: string) =>
        allowHtmlInText ? str : escapeHtml(str);

        return blocks
            .map((b) => {
                switch (b.type) {
                case "paragraph": {
                    return `<p>${esc(b.data.text)}</p>`;
                }

                case "header": {
                    const lvl = b.data.level;
                    return `<h${lvl}>${esc(b.data.text)}</h${lvl}>`;
                }

                case "quote": {
                    const cite = b.data.caption ? `<cite>${esc(b.data.caption)}</cite>` : "";
                    return `<blockquote>${esc(b.data.text)}${cite}</blockquote>`;
                }
                }
            }).join("");
    }

    function validateTextLength(text: string, minLength: number, maxLength: number): boolean {
        return text.trim().length <= maxLength && text.trim().length >= minLength;
    }

    function convertDate(miliseconds: number): string {
        return new Date(miliseconds).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
    }

    function makeMaterialType(materialRaw: MaterialRaw): Material {
        return {
            id: materialRaw.id!,
            title: materialRaw.title,
            description: materialRaw.short_description ?? '',
            createdAt: Date.parse(materialRaw.datetime),
            html: materialRaw.description_html ?? '',
            blocks: materialRaw.description_json ? JSON.parse(materialRaw.description_json) : []
        }
    }
    
    function makeMaterialRawType(material: Material): MaterialRaw {
        
        return {
            id: material.id,
            title: material.title,
            datetime: new Date(material.createdAt ?? Date.now()).toISOString(),
            ...(material.blocks && {
                description_html: convertToHTML(material.blocks),
                description_json: JSON.stringify(material.blocks)
            }),
            ...(material.description && {
                short_description: material.description
            })
        }
    }

    return {
        escapeHtml,
        validateTextLength,
        convertToHTML,
        convertDate,
        makeMaterialType,
        makeMaterialRawType
    };
}