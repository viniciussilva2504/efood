import React, { useEffect, useState } from 'react'

function SimpleHome() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then(response => response.json())
      .then(result => {
        setData(result || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error)
        setLoading(false)
      })
  }, [])

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  }

  const titleStyle = {
    textAlign: 'center' as const,
    color: '#e66465',
    marginBottom: '20px'
  }

  if (loading) {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>⏳ Carregando...</h1>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🍕 eFood - {data.length} Restaurantes</h1>
      
      {data.map((item: any, index: number) => (
        <div key={index} style={{
          margin: '20px 0',
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9'
        }}>
          <h3 style={{ color: '#e66465', margin: '0 0 10px 0' }}>
            {item?.titulo || `Restaurante ${index + 1}`}
          </h3>
          <p style={{ color: '#333', margin: '0 0 5px 0' }}>
            {item?.descricao || 'Sem descrição'}
          </p>
          <small style={{ color: '#666' }}>
            ⭐ {item?.avaliacao || 'N/A'} | {item?.tipo || 'Tipo não especificado'}
          </small>
        </div>
      ))}
    </div>
  )
}

export default SimpleHome