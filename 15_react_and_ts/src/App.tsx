import './App.css';

function App() {

  // 1 - variable
  const name: string = "Juliana"
  const age: number = 27
  const isWorking: boolean = true

  // 2 - functions
  const userGreeting = (name: String): String => {
    return `Hello, ${name}`
  }


  return (
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
    </div>
  );
}

export default App;
