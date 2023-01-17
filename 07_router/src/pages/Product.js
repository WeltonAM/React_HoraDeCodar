import { useParams } from "react-router-dom"

const Product = () => {
    const { id } = useParams()

    return (
        <>
            <p>Product Id: {id}</p>
        </>
    )
}

export default Product