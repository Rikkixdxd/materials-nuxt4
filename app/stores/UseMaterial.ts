
import { defineStore } from 'pinia'
import type { Material } from '~/types/Material'
import { ApiClient } from '~/composables/ApiClient'

export const UseMaterial = defineStore('UseMaterial', {
  state: () => ({
    materials: [] as Material[],
    apiClient: null as ReturnType<typeof ApiClient> | null
  }),
  actions: {

    getApiClient() {
      if (!this.apiClient) {
        this.apiClient = ApiClient()
      }
      return this.apiClient
    },

    async getMaterialById(id: number): Promise<Material> {
      const cachedMaterial = this.materials.find(material => material.id === id)
      if (cachedMaterial) {
        return cachedMaterial
      }

      const api = this.getApiClient()
      const material = await api.GET('/materials/{alias}/{id}', id) 

      this.materials.push(material)
      return material
    },

    async getAllMaterials(): Promise<Material[]> {
      if (!this.materials.length) {
        const api = this.getApiClient()
        this.materials = await api.GET('/materials/{alias}')
      }
      return this.materials
    },

    async createMaterial(material: Material): Promise<Material> {
      const api = this.getApiClient()
      const createdMaterial = await api.POST('/materials/{alias}/save', material)

      this.materials.push(createdMaterial)
      return createdMaterial
    }
  }
})