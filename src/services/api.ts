export interface ApiRestaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ApiMenuItem[]
}

export interface ApiMenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

class Api {
  private baseUrl = 'https://ebac-fake-api.vercel.app/api/efood'

  async getRestaurants(): Promise<ApiRestaurant[]> {
    try {
      const response = await fetch(`${this.baseUrl}/restaurantes`)
      if (!response.ok) {
        throw new Error('Erro ao buscar restaurantes')
      }
      return await response.json()
    } catch (error) {
      console.error('Erro na API:', error)
      throw error
    }
  }

  async getRestaurant(id: number): Promise<ApiRestaurant | null> {
    try {
      const restaurants = await this.getRestaurants()
      return restaurants.find(restaurant => restaurant.id === id) || null
    } catch (error) {
      console.error('Erro ao buscar restaurante:', error)
      throw error
    }
  }
}

export const api = new Api()
