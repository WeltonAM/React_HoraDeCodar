import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    const { id } = useParams()

    const url = 'http://localhost:3000/products/' + id

    const { data: product, loading, errors } = useFetch(url)

    return (
        <>
            {errors && <p>Something went wrong...</p>}

            {loading && <p>Loading...</p>}

            {product && (
                <div>
                    
                    <h3>{product.name}</h3>
                    
                    <p>$: {product.price}</p>

                    <Link to={`/products/${product.id}/info`}>More information</Link>
                </div>
            )}
        </>
    )
}

export default Product