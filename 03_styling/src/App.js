import './App.css';
import Inline from './components/Inline';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      
      {/* CSS global */}
      <h1>CSS in React</h1>

      {/* CSS Component */}
      <MyComponent />

      {/* CSS inline */}
      <Inline />

      {/* CSS module */}
      <Title />
    </div>
  );
}

export default App;
