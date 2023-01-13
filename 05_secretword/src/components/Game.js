import './Game.css'

const Game = ({ 
    verifyLetter, 
    pickedWords, 
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => {
    return (
        <div className='game'>

            <p className='points'>
                <span>Pontuação: {score}</span>
            </p>

            <h1>Qual é a palavra?</h1>

            <h3 className='tip'>
                Dica: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentaiva(s).</p>

            <div className='wordContainer'>
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className='letter'>{letter}</span>
                    ) : ( 
                        <span key={i} className='blankSquare'></span>
                    )
                ))}

            </div>

            <div className='letterContainer'>
                <p>Tente descobrir uma letra da palavra:</p>
                <input type="text" name="letter" maxLength="1" required />
                <button type="">Jogar</button>
            </div>

            <div className='wrongLettersContainer'>
                <p>Letras já utilizadas:</p>

                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter},</span>
                ))}
            </div>

        </div>
    )
}

export default Game