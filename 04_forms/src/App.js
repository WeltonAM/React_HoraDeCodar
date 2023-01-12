import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>

      <MyForm user={{ name: 'Juliana', email: 'juht@gmail.com' }} />
    </div>
  );
}

export default App;
