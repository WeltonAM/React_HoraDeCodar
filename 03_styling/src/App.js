import './App.css';
import Challenge from './components/Challenge';
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

      {/* CSS challenge */}
      <Challenge/>
    </div>
  );
}

export default App;
