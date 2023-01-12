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
import Message from './components/Message';
import ChangeMsgState from './components/ChangeMsgState';
import ShowUserName from './components/ShowUserName';
import UserDetail from './components/UserDetail';

function App() {

  const cars = [
    { id: 1, brand: "Ford", color: "Yellow", km: 10, newCar: false },
    { id: 2, brand: "VW", color: "Blue", km: 110, newCar: false },
    { id: 3, brand: "Chav", color: "Black", km: 11230, newCar: false },
    { id: 4, brand: "Renault", color: "Red", km: 0, newCar: true },
  ]

  const people = [
    { id: 1, name: "Juliana", age: 27, job: "Nut" },
    { id: 2, name: "Karla", age: 28, job: "Designer" },
    { id: 3, name: "Maria", age: 5, job: "Study" },
    { id: 4, name: "Gohan", age: 1, job: "Eater" },
  ]

  function showMessage() {
    alert('Father event')
  }

  const [message, setMessage] = useState("")

  const handleMsg = (msg) => {
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

      {/* Use props */}
      <ShowUserName name="Juliana" />

      {/* Destructuring props */}
      <CarDetails brand="Chav" km={100.000} color="Blue" newCar={false} />

      {/* Reuse comp */}
      <CarDetails brand="Ford" km={0} color="Blue" newCar={true} />

      {/* Reuse comp by loop */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* Component direct to the "App" */}
      <Fragment />

      {/* Children concept */}
      <Container>
        <p>Child component</p>
      </Container>

      {/* Executing func from parent */}
      <ExecutingFunc myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message} />
      <ChangeMsgState handleMsg={handleMsg} />

      {/* Module Challenge */}
      <UserDetail people={people} />

    </div>
  );
}

export default App;
