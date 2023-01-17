import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import './Home.css'

const Home = () => {

  const url = 'http://localhost:3000/products'
  const { data: items, loading, errors } = useFetch(url)

  return (
    <div>
     
      <h2>Products</h2>

      {errors && <p>{errors}</p>}

      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>$: {item.price}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Home