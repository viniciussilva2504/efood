import React from 'react'

function SimpleHome() {
  const [message, setMessage] = React.useState('Loading...')
  const [restaurants, setRestaurants] = React.useState<{
    id: number
    titulo: string
    capa: string
    descricao: string
    avaliacao: number
    tipo: string
  }[]>([])

  React.useEffect(() => {
    setMessage('Fetching restaurants...')
    
    // Timeout to ensure something appears
    const timeout = setTimeout(() => {
      setMessage('⚠️ Timeout - but at least React is working!')
    }, 5000)

    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then(data => {
        clearTimeout(timeout)
        // Map API data to expected shape if needed
        const mapped = (data || []).map((r: any) => ({
          id: r.id,
          titulo: r.titulo,
          capa: r.capa,
          descricao: r.descricao || '',
          avaliacao: r.avaliacao || 0,
          tipo: r.tipo || ''
        }))
        setRestaurants(mapped)
        setMessage(`✅ Sucesso! ${mapped.length || 0} restaurantes carregados.`)
      })
      .catch(error => {
        clearTimeout(timeout)
        setMessage(`❌ Error: ${error.message}`)
        console.error('Fetch error:', error)
      })

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <h1 style={{
        color: '#e66465',
        textAlign: 'center',
        fontSize: '2em',
        marginBottom: '20px'
      }}>
        🍕 eFood - TESTE ABSOLUTO
      </h1>
      
      <div style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <h2>{message}</h2>
        <p>Timestamp: {new Date().toLocaleString('en-US')}</p>
        <p>URL: {window.location.href}</p>
      </div>

      {restaurants.length > 0 && (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ color: '#e66465' }}>
            Restaurants found: {restaurants.length}
          </h3>
          {restaurants.slice(0, 3).map((restaurant, index) => (
            <div key={index} style={{
              border: '2px solid #e66465',
              padding: '15px',
              margin: '10px 0',
              borderRadius: '8px',
              backgroundColor: '#fff'
            }}>
              <h4 style={{ color: '#e66465', margin: '0 0 10px 0' }}>
                {restaurant?.titulo || `Restaurant ${index + 1}`}
              </h4>
              <p style={{ margin: '0 0 5px 0' }}>
                {restaurant?.descricao || 'No description'}
              </p>
              <small style={{ color: '#666' }}>
                ⭐ {restaurant?.avaliacao || 'N/A'} | {restaurant?.tipo || 'N/A'}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SimpleHome