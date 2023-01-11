const Events = () => {

    const handleMyEvent = (e) => {
        console.log('Clicked')
    }

    const renderSomething = (x) => {
        if(x){
            return <h3>Render this</h3>
        } else {
            return <h3>Or render this</h3>
        }
    }

    return (
        <div>

            <div>
                <button onClick={handleMyEvent}>Click</button>
            </div>

            <div>
                <button onClick={() => console.log('Inline event')}>Different Click</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events