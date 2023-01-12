const ChangeMsgState = ({ handleMsg }) => {

    const message = ['Hello!', 'Hi!', 'See you!']

    return (
        <div>
            <hr />

            <button onClick={() => handleMsg(message[0])}>1</button>
            <button onClick={() => handleMsg(message[1])}>2</button>
            <button onClick={() => handleMsg(message[2])}>3</button>
            
        </div>
    )
}

export default ChangeMsgState