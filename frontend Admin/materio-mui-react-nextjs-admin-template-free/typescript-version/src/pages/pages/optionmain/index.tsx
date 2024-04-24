import React from 'react'
import { useRouter } from 'next/router'

function MainPage() {
  const router = useRouter()

  const handleGenerateDemoClick = () => {
    // Navigate to the path where you want to add the file for generating demo
    router.push('/pages/product')
  }
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4CAF50' /* Green */,
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
  }

  const handleHistoryClick = () => {
    // Navigate to the path where you want to view history
    router.push('/pages/trail')
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleGenerateDemoClick}>
        Generate Demo
      </button>
      <button style={buttonStyle} onClick={handleHistoryClick}>
        History
      </button>
    </div>
  )
}

export default MainPage
