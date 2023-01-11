// CSS
import './App.css';
import Events from './components/Events';

// Components
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions'

function App() {
  return (
    <div className="App">
      <h1>Hello, Juliana</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;