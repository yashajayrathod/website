import React from 'react'
// pages/products.js

import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductsPage = () => {
  const router = useRouter()

  // Function to handle button click
  const handleProductClick = (product: string) => {
    // Explicitly define the type of 'product'
    router.push(`/pages/trailform`) // Redirect to the respective product page
  }

  return (
    <div>
      <h1>Choose a Product:</h1>
      <button
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: '16px'
        }}
        onClick={() => handleProductClick('taxi')}
      >
        Taxi
      </button>
      <button
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: '16px'
        }}
        onClick={() => handleProductClick('truck')}
      >
        Truck
      </button>
      <button
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: '16px'
        }}
        onClick={() => handleProductClick('healthcare')}
      >
        HealthCare
      </button>
      <button
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: '16px'
        }}
        onClick={() => handleProductClick('handyman')}
      >
        Handyman
      </button>
      <button
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          fontSize: '16px'
        }}
        onClick={() => handleProductClick('delivery')}
      >
        Delivery
      </button>
    </div>
  )
}

export default ProductsPage
