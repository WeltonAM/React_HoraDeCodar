import './App.css';

// Config Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
