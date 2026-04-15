// @ts-nocheck
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(data => {
        console.log('API Response:', data)
        setRestaurants(data || [])
        setLoading(false)
      })
      .catch(err => {
        console.error('API Error:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fff', minHeight: '100vh' }}>
        <h1 style={{ color: '#e66' }}>Carregando restaurantes...</h1>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#e66', marginBottom: '10px' }}>
        🍽️ eFood - Restaurantes
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Total de restaurantes carregados: {restaurants.length}
      </p>
      
      {restaurants.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#666' }}>
          <p>Nenhum restaurante encontrado ou erro na API</p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gap: '20px', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant?.id || index}
              style={{ 
                border: '2px solid #e66', 
                padding: '20px', 
                borderRadius: '8px',
                backgroundColor: '#fafafa',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ color: '#e66', margin: '0 0 10px 0' }}>
                {restaurant?.titulo || 'Title not found'}
              </h3>
              <p style={{ color: '#333', margin: '0 0 10px 0' }}>
                {restaurant?.descricao || 'Description not available'}
              </p>
                <p style={{ color: '#e66', fontWeight: 'bold', margin: '0' }}>
                  ⭐ {restaurant?.avaliacao || 'N/A'} • {restaurant?.tipo || 'Type not specified'}
                </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home

export default Home