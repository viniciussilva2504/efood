import React from 'react'

const TestPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', color: 'black' }}>
      <h1>TESTE - Se você vê isso, o React está funcionando</h1>
      <p>Data: {new Date().toLocaleString()}</p>
      <p>URL atual: {window.location.href}</p>
      <p>Process.env.PUBLIC_URL: {process.env.PUBLIC_URL}</p>
    </div>
  )
}

export default TestPage