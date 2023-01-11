import './App.css';

import CountryPhoto from './assets/img/pic1.jpg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">

      <h2>Advancing</h2>

      <div>
        <img src={CountryPhoto}/>
      </div>

      <ManageData />

    </div>
  );
}

export default App;
