import { useState } from 'react';

import './App.css';

import CountryPhoto from './assets/img/pic1.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecutingFunc from './components/ExecutingFunc';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const cars = [
    { id: 1, brand: "Ford", color: "Yellow", km: 10, newCar: false },
    { id: 2, brand: "VW", color: "Blue", km: 110, newCar: false },
    { id: 3, brand: "Chav", color: "Black", km: 11230, newCar: false },
    { id: 4, brand: "Renault", color: "Red", km: 0, newCar: true },
  ]

  function showMessage() {
    alert('Father event')
  }

  const [message, setMessage] = useState("")

  const handleMgs = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">

      <h2>Advancing</h2>

      <div>
        <img src={CountryPhoto} />
      </div>

      <ManageData />

      <ListRender />

      <ConditionalRender />

      <ShowUserName name="Juliana" />

      <CarDetails brand="Chav" km={100.000} color="Blue" newCar={false} />

      <CarDetails brand="Ford" km={0} color="Blue" newCar={true} />

      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      <Fragment />

      <Container>
        <p>Child component</p>
      </Container>

      

      <ExecutingFunc myFunction={showMessage} />

      {/* State lift */}

    </div>
  );
}

export default App;
