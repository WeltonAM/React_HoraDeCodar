import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = 'http://localhost:3000/products?' + searchParams

    const { data: items, loading, errors } = useFetch(url)

    return (
        <div>
            <h3>Result</h3>

            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>

                        <h3>{item.name}</h3>

                        <p>$: {item.price}</p>

                        <Link to={`/products/${item.id}`}>Details</Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search