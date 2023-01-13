import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Palavra Secreta</h1>
        <button className='play-btn' onClick={startGame} >Começar o jogo</button>
    </div>
  )
}

export default StartScreen