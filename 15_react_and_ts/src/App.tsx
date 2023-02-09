import { createContext } from 'react';
import './App.css';
import Context from './components/Content';
import Destructuring, { Category } from './components/Destructuring';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

type textOrNull = string | null

type fixed = "This" | "That"

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variable
  const name: string = "Juliana"
  const age: number = 27
  const isWorking: boolean = true

  // 2 - functions
  const userGreeting = (name: String): String => {
    return `Hello, ${name}`
  }

  const myText: textOrNull = "With value."
  let mySecondText: textOrNull = null
  // mySecondText = "Oops"

  // const fixed:fixed = "Hash"
  const fixed: fixed = "That"

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript in React</h1>

        <hr />
        <h2>Variables:</h2>

        <p>Name: {name}</p>

        <p>Age: {age}</p>

        <p>{isWorking && <>Is working!</>}</p>

        <hr />
        <h2>Functions:</h2>

        <h3>{userGreeting(name)}</h3>

        <hr />
        <FirstComponent />

        <hr />
        <SecondComponent name="Second" />

        <hr />
        <Destructuring
          title="First post"
          content="Content"
          commentsQty={10}
          tags={["Js", "Ts"]}
          category={Category.TS}
        />

        <hr />
        <h3>Hooks:</h3>
        <State />

        <hr />
        <h3>Types:</h3>
        {myText && <p>Variable with text</p>}
        {mySecondText && <p>Variable with text</p>}

        <hr />
        <h2>Context:</h2>
        <Context />

      </div>
    </AppContext.Provider>
  );
}

export default App;
