import './App.css';
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
    </div>
  );
}

export default App;