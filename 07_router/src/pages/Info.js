import { useParams } from "react-router-dom"

const Info = () => {
    const { id } = useParams()

    return (
        <p>The product {id} ... </p>
    )
}

export default Info