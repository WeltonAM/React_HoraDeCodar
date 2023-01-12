import styles from './Challenge.module.css'

const Challenge = () => {

    const cars = [
        { id: 1, brand: "Ford", color: "Yellow", km: 10, newCar: false },
        { id: 2, brand: "VW", color: "Blue", km: 110, newCar: false },
        { id: 3, brand: "Chav", color: "Black", km: 11230, newCar: false },
        { id: 4, brand: "Renault", color: "Red", km: 0, newCar: true },
    ]

    return (
        <div>
            <hr />
            <h3>Module challenge</h3>

            <ul className={styles['cars']}>
                {cars.map((car) => (
                    <li key={car.id}>
                        Brand: {car.brand} |
                        Color: {car.color} |
                        Km: {car.km}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Challenge