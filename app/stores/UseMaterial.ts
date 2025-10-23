import { defineStore } from "pinia";
import type { Material, MaterialRaw } from "~/types/Material";
import { ApiClient } from "~/composables/ApiClient";
import { Utilities } from "~/composables/Utility";

const { makeMaterialType, makeMaterialRawType } = Utilities();

export const UseMaterial = defineStore("UseMaterial", {
  
  state: () => ({
    materials: [] as Material[],
    apiClient: null as ReturnType<typeof ApiClient> | null,
    editingMaterial: null as Material | null,
  }),

  actions: {

    getApiClient() {
      if (!this.apiClient) {
        this.apiClient = ApiClient();
      }
      return this.apiClient;
    },

    async getMaterialById(id: number): Promise<Material> {

      const cachedMaterial = this.materials.find(
        (material) => material.id === id
      );

      if (cachedMaterial) {
        return cachedMaterial;
      }
      console.log(this.materials);
      
      await this.fetchAllMaterials();
      console.log(this.materials);
      const material = this.materials.find(m => m.id === id);
      
      if(!material) {
        return Promise.reject(new Error());
      }

      return material;
    },

    async fetchAllMaterials(): Promise<Material[]> {
      const api = this.getApiClient();
      const data = await api.GET("/materials/{alias}");
      this.materials = data.map((item: MaterialRaw) => makeMaterialType(item));
    },

    async saveMaterial(material: Material): Promise<void> {

      const api = this.getApiClient();
      await api.POST("/materials/{alias}/save", makeMaterialRawType(material));
      
      await this.fetchAllMaterials();
    },
  },
});
