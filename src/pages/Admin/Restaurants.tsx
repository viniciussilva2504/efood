// Use canonical types from supabaseData
import type { SupabaseRestaurant, CardapioItem } from '../../services/supabaseData'
import React, { useEffect, useState } from 'react'
import { getRestaurants, deleteRestaurant, insertRestaurant, updateRestaurant, updateCardapio } from '../../services/supabaseData'
import RestaurantForm from './RestaurantForm'
import CardapioForm from './CardapioForm'

export default function AdminRestaurants(): React.ReactElement {
  const [restaurants, setRestaurants] = useState<SupabaseRestaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editData, setEditData] = useState<SupabaseRestaurant | null>(null)
  const [cardapioEditId, setCardapioEditId] = useState<number | null>(null)
  const [showCardapioForm, setShowCardapioForm] = useState(false)
  const [cardapioEditItem, setCardapioEditItem] = useState<CardapioItem | null>(null)

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        setRestaurants(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Error loading restaurants')
        setLoading(false)
      })
  }, [])

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to remove this restaurant?')) {
      await deleteRestaurant(id)
      setRestaurants((prev) => prev.filter((r) => r.id !== id))
    }
  }

  // Accepts RestaurantFormData, converts to Partial<SupabaseRestaurant>
  const handleSave = async (data: import('./RestaurantForm').RestaurantFormData) => {
    // data is RestaurantFormData (from RestaurantForm)
    const restaurantData: Partial<SupabaseRestaurant> = {
      ...data,
      // If editing, preserve cardapio
      cardapio: editData?.cardapio ?? []
    }
    if (editData) {
      await updateRestaurant(editData.id, restaurantData)
      setRestaurants((prev) => prev.map((r) => (r.id === editData.id ? { ...r, ...restaurantData } : r)))
    } else {
      await insertRestaurant(restaurantData)
      const updated = await getRestaurants()
      setRestaurants(updated)
    }
    setShowForm(false)
    setEditData(null)
  }

  const handleCardapioSave = async (item: CardapioItem) => {
    if (cardapioEditId !== null) {
      const rest = restaurants.find(r => r.id === cardapioEditId)
      if (!rest) return
      let newCardapio = rest.cardapio ? [...rest.cardapio] : []
      if (cardapioEditItem) {
        // Editar item existente
        newCardapio = newCardapio.map((i) => i.id === cardapioEditItem.id ? { ...i, ...item } : i)
      } else {
        // Adicionar novo item
        const newId = Date.now()
        newCardapio.push({ ...item, id: newId })
      }
      try {
        await updateCardapio(cardapioEditId, newCardapio)
        // Buscar dados atualizados do backend para garantir persistência
        const updated = await getRestaurants()
        setRestaurants(updated)
      } catch (err) {
        alert('Error saving menu: ' + ((err as Error)?.message || err))
      }
      setShowCardapioForm(false)
      setCardapioEditItem(null)
      setCardapioEditId(null)
    }
  }

  const handleCardapioDelete = async (restId: number, itemId: number) => {
    const rest = restaurants.find(r => r.id === restId)
    if (!rest || !rest.cardapio) return
    const newCardapio = rest.cardapio.filter((i) => i.id !== itemId)
    await updateCardapio(restId, newCardapio)
    setRestaurants((prev) => prev.map((r) => r.id === restId ? { ...r, cardapio: newCardapio } : r))
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div style={{ maxWidth: 900, margin: '32px auto', padding: 16 }}>
      <h2>Restaurants</h2>
      {showForm && (
        <RestaurantForm
          onSave={handleSave}
          initialData={editData ? {
            titulo: editData.titulo,
            tipo: editData.tipo,
            capa: editData.capa,
            descricao: editData.descricao,
            foto: editData.foto,
            destacado: editData.destacado,
            avaliacao: editData.avaliacao
          } : undefined}
          onCancel={() => {
            setShowForm(false)
            setEditData(null)
          }}
        />
      )}
      {showCardapioForm && (
        <CardapioForm
          onSave={handleCardapioSave}
          initialData={cardapioEditItem ?? undefined}
          onCancel={() => {
            setShowCardapioForm(false)
            setCardapioEditItem(null)
            setCardapioEditId(null)
          }}
        />
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((r) => (
            <React.Fragment key={r.id}>
              <tr>
                <td>{r.id}</td>
                <td>{r.titulo}</td>
                <td>{r.tipo}</td>
                <td>
                  <button style={{ marginRight: 8 }} onClick={() => { setEditData(r); setShowForm(true) }}>Edit</button>
                  <button style={{ marginRight: 8 }} onClick={() => { setCardapioEditId(r.id); setCardapioEditItem(null); setShowCardapioForm(true) }}>Add Item</button>
                  <button onClick={() => handleDelete(r.id)}>Remove</button>
                </td>
              </tr>
              {r.cardapio && r.cardapio.length > 0 && (
                <tr>
                  <td colSpan={4}>
                    <b>Menu:</b>
                    <table style={{ width: '100%', margin: '8px 0', background: '#f9f9f9' }}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Serving</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {r.cardapio && r.cardapio.map((item: CardapioItem) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.preco}</td>
                            <td>{item.porcao}</td>
                            <td>
                              <button style={{ marginRight: 8 }} onClick={() => { setCardapioEditId(r.id); setCardapioEditItem(item); setShowCardapioForm(true) }}>Edit</button>
                              <button onClick={() => handleCardapioDelete(r.id, item.id)}>Remove</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <button style={{ marginTop: 24 }} onClick={() => { setEditData(null); setShowForm(true) }}>Add Restaurant</button>
    </div>
  )
}
