import { ApiRestaurant, ApiMenuItem } from '../services/api'
import { Restaurant } from '../components/RestaurantCard'
import { MenuItem } from '../pages/Restaurant'

export const convertApiRestaurantToRestaurant = (apiRestaurant: ApiRestaurant): Restaurant => {
  return {
    id: apiRestaurant.id,
    name: apiRestaurant.titulo,
    rating: apiRestaurant.avaliacao,
    description: apiRestaurant.descricao,
    image: apiRestaurant.capa,
    tags: [
      ...(apiRestaurant.destacado ? ['Destaque da semana'] : []),
      apiRestaurant.tipo.charAt(0).toUpperCase() + apiRestaurant.tipo.slice(1)
    ]
  }
}

export const convertApiMenuItemToMenuItem = (apiMenuItem: ApiMenuItem): MenuItem => {
  return {
    id: apiMenuItem.id,
    name: apiMenuItem.nome,
    description: apiMenuItem.descricao,
    price: apiMenuItem.preco,
    image: apiMenuItem.foto,
    serves: apiMenuItem.porcao
  }
}
