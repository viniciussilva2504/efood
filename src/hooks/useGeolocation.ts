import { useState, useEffect } from 'react'

type GeoPosition = {
  latitude: number
  longitude: number
} | null

type UseGeolocationReturn = {
  position: GeoPosition
  error: string | null
  loading: boolean
}

export const useGeolocation = (): UseGeolocationReturn => {
  const [position, setPosition] = useState<GeoPosition>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported by this browser')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    )
  }, [])

  return { position, error, loading }
}

// Fórmula Haversine — calcula distância entre dois pontos (km)
export const calcularDistancia = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371 // Raio da Terra em km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c * 10) / 10 // 1 decimal
}

// Coordenadas fictícias dos restaurantes da API (baseadas em São Paulo)
// Num projeto real, isto viria do backend
const RESTAURANT_COORDS: Record<number, { lat: number; lng: number }> = {
  1: { lat: -23.5505, lng: -46.6333 },  // Centro SP
  2: { lat: -23.5631, lng: -46.6544 },  // Jardins
  3: { lat: -23.5475, lng: -46.6361 },  // República
  4: { lat: -23.5587, lng: -46.6616 },  // Consolação
  5: { lat: -23.5733, lng: -46.6417 },  // Liberdade
  6: { lat: -23.5446, lng: -46.6295 },  // Luz
}

export const getRestaurantDistance = (
  restaurantId: number,
  userLat: number,
  userLng: number
): number | null => {
  const coords = RESTAURANT_COORDS[restaurantId]
  if (!coords) return null
  return calcularDistancia(userLat, userLng, coords.lat, coords.lng)
}
