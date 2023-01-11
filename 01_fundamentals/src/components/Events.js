const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)

        console.log('Clicked')
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click</button>
            </div>
        </div>
    )
}

export default Events