import { useState, useRef } from 'react'

import './Game.css'

const Game = ({
    verifyLetter,
    pickedCategory,
    pickedWords,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => {

    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter("")

        letterInputRef.current.focus()
    }

    return (
        <div className='game'>

            <p className='points'>
                <span>Pontuação: {score}</span>
            </p>

            <h1>Qual é a palavra?</h1>

            <h3 className='tip'>
                Dica: <span>{pickedCategory}</span>
            </h3>
            <p>Você tem {guesses} tentativa(s)</p>

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

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        pattern="[A-Za-zç]" 
                        title="Somente letras"
                        name="letter"
                        maxLength="1"
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button className='play-btn' type="">Jogar</button>
                </form>
            </div>

            <div className='wrongLettersContainer'>
                <p>Letras já utilizadas:</p>

                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>

        </div>
    )
}

export default Game