import './App.css';

import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([])
  
  const url = "http://localhost:3000/products"

  // Getting data
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url)
  
      const data = await res.json()
  
      setProducts(data)

    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Products list</h1>

      <ul style={{listStyle: 'none', padding: '0'}}>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$:{product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
