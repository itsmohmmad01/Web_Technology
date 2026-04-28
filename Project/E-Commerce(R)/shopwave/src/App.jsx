import React, { useState } from 'react'

const products = [
  { id: 1, name: 'Blue T-Shirt', price: 20, category: 'Clothing' },
  { id: 2, name: 'Black Jeans', price: 45, category: 'Clothing' },
  { id: 3, name: 'White Sneakers', price: 60, category: 'Shoes' },
  { id: 4, name: 'Brown Boots', price: 80, category: 'Shoes' },
  { id: 5, name: 'Leather Bag', price: 55, category: 'Bags' },
  { id: 6, name: 'Backpack', price: 40, category: 'Bags' },
  { id: 7, name: 'Sunglasses', price: 25, category: 'Accessories' },
  { id: 8, name: 'Watch', price: 90, category: 'Accessories' },
]

const categories = ['All', 'Clothing', 'Shoes', 'Bags', 'Accessories']

export default function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('All')
  const [showCart, setShowCart] = useState(false)

  const filtered = category === 'All' ? products : products.filter(p => p.category === category)

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id, qty) {
    if (qty < 1) { removeFromCart(id); return }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div>
      {/* Navbar */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #ddd', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Simple Shop</h1>
        <button
          onClick={() => setShowCart(!showCart)}
          style={{ background: '#333', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '14px' }}
        >
          Cart ({cartCount})
        </button>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px' }}>

        {/* Cart Panel */}
        {showCart && (
          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '6px', padding: '20px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Your Cart</h2>
            {cart.length === 0 ? (
              <p style={{ color: '#888' }}>Your cart is empty.</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <div>
                      <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</p>
                      <p style={{ color: '#888', fontSize: '13px' }}>${item.price}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ width: '28px', height: '28px', border: '1px solid #ddd', background: '#f5f5f5', borderRadius: '4px' }}>-</button>
                      <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ width: '28px', height: '28px', border: '1px solid #ddd', background: '#f5f5f5', borderRadius: '4px' }}>+</button>
                      <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none', fontSize: '13px', marginLeft: '8px' }}>Remove</button>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>Total: ${total}</strong>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => setCart([])} style={{ border: '1px solid #ddd', background: '#f5f5f5', padding: '8px 14px', borderRadius: '4px', fontSize: '13px' }}>Clear</button>
                    <button style={{ background: '#333', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', fontSize: '13px' }}>Checkout</button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: '6px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                background: category === c ? '#333' : '#fff',
                color: category === c ? '#fff' : '#333',
                fontSize: '14px'
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {filtered.map(product => (
            <div key={product.id} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '6px', padding: '16px' }}>
              <p style={{ fontSize: '13px', color: '#888', marginBottom: '4px' }}>{product.category}</p>
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{product.name}</p>
                <p style={{ color: '#333', marginBottom: '10px' }}>${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  style={{ width: '100%', background: '#333', color: '#fff', border: 'none', padding: '8px', borderRadius: '4px', fontSize: '14px' }}
                >
                  Add to Cart
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
