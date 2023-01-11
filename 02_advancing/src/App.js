import './App.css';

import CountryPhoto from './assets/img/pic1.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">

      <h2>Advancing</h2>

      <div>
        <img src={CountryPhoto}/>
      </div>

      <ManageData />

      <ListRender />

    </div>
  );
}

export default App;
