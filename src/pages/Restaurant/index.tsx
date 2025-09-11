import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../../components/RestaurantCard'
import MenuCard from '../../components/MenuCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModal'
import Loading from '../../components/Loading'
import ErrorState from '../../components/ErrorState'
import { 
  Container, 
  BannerContainer, 
  BannerImage, 
  BannerInfo, 
  RestaurantType, 
  RestaurantName, 
  MenuContainer, 
  MenuGrid 
} from './styles'
import { api } from '../../services/api'
import { convertApiRestaurantToRestaurant, convertApiMenuItemToMenuItem } from '../../utils/converters'

export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  serves?: string
}

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const loadRestaurant = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const restaurantId = parseInt(id || '1')
      const apiRestaurant = await api.getRestaurant(restaurantId)
      
      if (apiRestaurant) {
        const convertedRestaurant = convertApiRestaurantToRestaurant(apiRestaurant)
        setRestaurant(convertedRestaurant)
        
        const convertedMenuItems = apiRestaurant.cardapio.map(convertApiMenuItemToMenuItem)
        setMenuItems(convertedMenuItems)
      } else {
        setError('Restaurante não encontrado')
      }
    } catch (error) {
      console.error('Erro ao carregar restaurante:', error)
      setError('Erro ao carregar restaurante')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    loadRestaurant()
  }, [loadRestaurant])

  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProduct(null)
  }

  if (loading) {
    return (
      <>
        <Header />
        <Container>
          <div className="container">
            <Loading message="Carregando restaurante..." />
          </div>
        </Container>
        <Footer />
      </>
    )
  }

  if (!restaurant || error) {
    return (
      <>
        <Header />
        <Container>
          <div className="container">
            <ErrorState 
              title="Restaurante não encontrado"
              message="Não foi possível encontrar as informações deste restaurante."
              onRetry={loadRestaurant}
            />
          </div>
        </Container>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <BannerContainer>
        <BannerImage src={restaurant.image} alt={restaurant.name} />
        <BannerInfo>
          <div className="container">
            <RestaurantType>{restaurant.tags.join(', ')}</RestaurantType>
            <RestaurantName>{restaurant.name}</RestaurantName>
          </div>
        </BannerInfo>
      </BannerContainer>
      
      <MenuContainer>
        <div className="container">
          <MenuGrid>
            {menuItems.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onClick={() => handleProductClick(item)}
              />
            ))}
          </MenuGrid>
        </div>
      </MenuContainer>

      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
      
      <Footer />
    </>
  )
}

export default RestaurantPage