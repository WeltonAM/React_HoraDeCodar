const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <hr />
            <h3> Car Details: </h3>

            <ul>
                <li>Brand: {brand}</li>
                <li>Km: {km}</li>
                <li>Color: {color}</li>
            </ul>
            {newCar && <p>This is a new car</p>}
        </div>
    )
}

export default CarDetails