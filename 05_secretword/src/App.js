// CSS
import './App.css';

// Data
import { wordsList } from "./data/Word"

// React
import { useCallback, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const guessesAty = 5

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([null])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesAty)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)]

    return { category, word }
  }, [words])

  const startGame = useCallback(() => {

    clearLetterStates()

    const { category, word } = pickedWordAndCategory()
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickedWordAndCategory])

  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const retry = () => {

    setScore(0)
    setGuesses(guessesAty)

    setGameStage(stages[0].name)
  }

  const clearLetterStates = () => {
    setGuessedLetters([null])
    setWrongLetters([])
  }

  useEffect(() => {

    if (guesses === 0) {

      toast('🦄 Game Over!', {
        theme: "dark",
      })

      setTimeout(() => {
        setGameStage(stages[2].name)
      }, 4000);

      clearLetterStates()
    }

  }, [guesses])

  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)
     
      toast('🥳 🎉 YES!')
      
      setTimeout(() => {
        startGame()
      }, 3000);
    }


  }, [guessedLetters, letters, startGame])

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}

      {gameStage === 'game' && (
        <>
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />

          <ToastContainer>
            toast()
          </ToastContainer>
        </>
      )}

      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
