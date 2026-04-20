// Buscar restaurante por id
import { supabase } from './supabase'
import { mockRestaurants } from './mockData'

const db = supabase!

export const getRestaurantById = async (id: number): Promise<SupabaseRestaurant> => {
  try {
    if (!supabase) throw new Error('offline')
    const { data, error } = await db
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .single()
    if (error) throw error
    return data as SupabaseRestaurant
  } catch {
    console.warn('Supabase indisponível, usando dados locais para restaurante', id)
    const mock = mockRestaurants.find((r) => r.id === id)
    if (!mock) throw new Error(`Restaurante ${id} não encontrado`)
    return mock
  }
}
// ==================== RESTAURANTES (SUPABASE) ====================

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  quantidade?: number
}

export type SupabaseRestaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  foto: string
  infos: string[]
  cardapio: CardapioItem[]
}

export const getRestaurants = async (): Promise<SupabaseRestaurant[]> => {
  try {
    if (!supabase) throw new Error('offline')
    const { data, error } = await db
      .from('restaurants')
      .select('*')
      .order('id', { ascending: true })
    if (error) throw error
    return data as SupabaseRestaurant[]
  } catch {
    console.warn('Supabase indisponível, usando dados locais')
    return mockRestaurants
  }
}

// ==================== FAVORITOS ====================

export const getFavorites = async (userId: string): Promise<number[]> => {
  if (!supabase) return []
  const { data, error } = await db
    .from('favorites')
    .select('restaurant_id')
    .eq('user_id', userId)

  if (error) throw error
  return data.map(f => f.restaurant_id)
}

export const toggleFavorite = async (userId: string, restaurantId: number): Promise<boolean> => {
  if (!supabase) return false
  const { data: existing } = await db
    .from('favorites')
    .select('id')
    .eq('user_id', userId)
    .eq('restaurant_id', restaurantId)
    .single()

  if (existing) {
    await db.from('favorites').delete().eq('id', existing.id)
    return false
  } else {
    await db.from('favorites').insert({ user_id: userId, restaurant_id: restaurantId })
    return true
  }
}

// ==================== REVIEWS ====================

export type Review = {
  id: string
  user_id: string
  restaurant_id: number
  rating: number
  comment: string
  user_name: string
  created_at: string
}

export const getReviews = async (restaurantId: number): Promise<Review[]> => {
  if (!supabase) return []
  const { data, error } = await db
    .from('reviews')
    .select('*')
    .eq('restaurant_id', restaurantId)
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) throw error
  return data as Review[]
}

export const addReview = async (
  userId: string,
  userName: string,
  restaurantId: number,
  rating: number,
  comment: string
): Promise<Review> => {
  const { data, error } = await db
    .from('reviews')
    .insert({
      user_id: userId,
      user_name: userName,
      restaurant_id: restaurantId,
      rating,
      comment
    })
    .select()
    .single()

  if (error) throw error
  return data as Review
}

// ==================== HISTÓRICO DE PEDIDOS ====================

export type OrderHistory = {
  id: string
  user_id: string
  restaurant_name: string
  items: { nome: string; quantidade: number; preco: number }[]
  total: number
  delivery_address: string
  created_at: string
}

export const getOrderHistory = async (userId: string): Promise<OrderHistory[]> => {
  if (!supabase) return []
  const { data, error } = await db
    .from('order_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) throw error
  return data as OrderHistory[]
}

export const saveOrder = async (
  userId: string,
  restaurantName: string,
  items: { nome: string; quantidade: number; preco: number }[],
  total: number,
  deliveryAddress: string
): Promise<void> => {
  if (!supabase) return
  const { error } = await db
    .from('order_history')
    .insert({
      user_id: userId,
      restaurant_name: restaurantName,
      items,
      total,
      delivery_address: deliveryAddress
    })

  if (error) throw error
}

// ==================== ADMIN ====================

export const deleteRestaurant = async (id: number): Promise<void> => {
  if (!supabase) return
  const { error } = await db.from('restaurants').delete().eq('id', id)
  if (error) throw error
}

export const insertRestaurant = async (data: Partial<SupabaseRestaurant>): Promise<void> => {
  if (!supabase) return
  const { error } = await db.from('restaurants').insert(data)
  if (error) throw error
}

export const updateRestaurant = async (id: number, data: Partial<SupabaseRestaurant>): Promise<void> => {
  if (!supabase) return
  const { error } = await db.from('restaurants').update(data).eq('id', id)
  if (error) throw error
}

export const updateCardapio = async (restaurantId: number, cardapio: CardapioItem[]): Promise<void> => {
  if (!supabase) return
  const { error } = await db.from('restaurants').update({ cardapio }).eq('id', restaurantId)
  if (error) throw error
}
