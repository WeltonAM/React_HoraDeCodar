const Events = () => {

    const handleMyEvent = (e) => {
        console.log('Clicked')
    }

    return (
        <div>

            <div>
                <button onClick={handleMyEvent}>Click</button>
            </div>

            <div>
                <button onClick={() => console.log('Inline event')}>Different Click</button>
            </div>
        </div>
    )
}

export default Events