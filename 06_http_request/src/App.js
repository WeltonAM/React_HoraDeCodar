import './App.css';

import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch';

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const url = "http://localhost:3000/products"

  // Getting data
  // useEffect(() => {
  //   async function fetchData(){
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)

  //   }

  //   fetchData()
  // }, [])

  const { data: items, httpConfig } = useFetch(url)

  // Posting data
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // // Dynamic loading
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // Refactoring Product
    httpConfig(product, "POST")

    setName("")
    setPrice("")

  }

  return (
    <div className="App">
      <h1>Products list</h1>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>

      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Price:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>

          <input type="submit" value="Create" />
        </form>
      </div>

    </div>
  );
}

export default App;
