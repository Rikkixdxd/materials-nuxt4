import { defineStore } from 'pinia';
import { g as useRuntimeConfig } from './server.mjs';

const ApiClient = () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBaseUrl;
  const token = config.public.token;
  const commonHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  const GET = async (path, id) => {
    let requestUrl = path;
    requestUrl = requestUrl.replace("{alias}", token);
    if (id && requestUrl.includes("id}")) {
      requestUrl = requestUrl.replace("{id}", id.toString());
    }
    const response = await fetch(`${baseUrl}${requestUrl}`, {
      method: "GET",
      headers: commonHeaders
    });
    return await response.json();
  };
  const POST = async (path, data) => {
    let requestUrl = path;
    requestUrl = requestUrl.replace("{alias}", token);
    const response = await fetch(`${baseUrl}${requestUrl}`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify(data)
    });
    return response.json();
  };
  return {
    GET,
    POST
  };
};
const Utilities = () => {
  function escapeHtml(s = "") {
    return s.replace(/<(?!\/?br\s*\/?>)[^>]+>/gi, "");
  }
  function convertToHTML(blocks, allowHtmlInText = false) {
    const esc = (str) => allowHtmlInText ? str : escapeHtml(str);
    return blocks.map((b) => {
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
  function validateTextLength(text, minLength, maxLength) {
    return text.trim().length <= maxLength && text.trim().length >= minLength;
  }
  function convertDate(miliseconds) {
    return new Date(miliseconds).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  }
  function makeMaterialType2(materialRaw) {
    return {
      id: materialRaw.id,
      title: materialRaw.title,
      description: materialRaw.short_description ?? "",
      createdAt: Date.parse(materialRaw.datetime),
      html: materialRaw.description_html ?? "",
      blocks: materialRaw.description_json ? JSON.parse(materialRaw.description_json) : []
    };
  }
  function makeMaterialRawType2(material) {
    return {
      id: material.id,
      title: material.title,
      datetime: new Date(material.createdAt ?? Date.now()).toISOString(),
      ...material.blocks && {
        description_html: convertToHTML(material.blocks),
        description_json: JSON.stringify(material.blocks)
      },
      ...material.description && {
        short_description: material.description
      }
    };
  }
  return {
    escapeHtml,
    validateTextLength,
    convertToHTML,
    convertDate,
    makeMaterialType: makeMaterialType2,
    makeMaterialRawType: makeMaterialRawType2
  };
};
const { makeMaterialType, makeMaterialRawType } = Utilities();
const UseMaterial = defineStore("UseMaterial", {
  state: () => ({
    materials: [],
    apiClient: null,
    editingMaterial: null
  }),
  actions: {
    getApiClient() {
      if (!this.apiClient) {
        this.apiClient = ApiClient();
      }
      return this.apiClient;
    },
    async getMaterialById(id) {
      const cachedMaterial = this.materials.find(
        (material2) => material2.id === id
      );
      if (cachedMaterial) {
        return cachedMaterial;
      }
      await this.fetchAllMaterials();
      const material = this.materials.find((m) => m.id === id);
      if (!material) {
        return Promise.reject(new Error());
      }
      return material;
    },
    async fetchAllMaterials() {
      const api = this.getApiClient();
      const data = await api.GET("/materials/{alias}");
      this.materials = data.map((item) => makeMaterialType(item));
    },
    async saveMaterial(material) {
      const api = this.getApiClient();
      await api.POST("/materials/{alias}/save", makeMaterialRawType(material));
      await this.fetchAllMaterials();
    }
  }
});

export { UseMaterial as U, Utilities as a };
//# sourceMappingURL=UseMaterial-Cg4tTuec.mjs.map
