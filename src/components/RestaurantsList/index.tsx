        import React, { useEffect, useState } from 'react'
        import RestaurantCard, { Restaurant } from '../RestaurantCard'
        import Loading from '../Loading'
        import ErrorState from '../ErrorState'
        import { Container, RestaurantsGrid } from './styles'
        import { api } from '../../services/api'
        import { convertApiRestaurantToRestaurant } from '../../utils/converters'

        const RestaurantsList: React.FC = () => {
        const [restaurants, setRestaurants] = useState<Restaurant[]>([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState<string | null>(null)

        const loadRestaurants = async () => {
            try {
            setLoading(true)
            setError(null)
            const apiRestaurants = await api.getRestaurants()
            const convertedRestaurants = apiRestaurants.map(convertApiRestaurantToRestaurant)
            setRestaurants(convertedRestaurants)
            } catch (error) {
            console.error('Erro ao carregar restaurantes:', error)
            setError('Erro ao carregar restaurantes')
            } finally {
            setLoading(false)
            }
        }

        useEffect(() => {
            loadRestaurants()
        }, [])

        if (loading) {
            return (
            <Container>
                <div className="container">
                <Loading message="Carregando restaurantes..." />
                </div>
            </Container>
            )
        }

        if (error) {
            return (
            <Container>
                <div className="container">
                <ErrorState 
                    message="Não foi possível carregar a lista de restaurantes."
                    onRetry={loadRestaurants}
                />
                </div>
            </Container>
            )
        }

        return (
            <Container>
            <div className="container">
                <RestaurantsGrid>
                {restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
                </RestaurantsGrid>
            </div>
            </Container>
        )
        }

        export default RestaurantsList