import logo from './logo.svg';
import './App.css';

import Navegacion from './components/Navegacion';
import Home from './components/Home';
import Products from './components/Products';
import Nosotros from './components/Nosotros';





import { Routes, Route } from 'react-router-dom'
import CardEstilo from './components/Banners';

function App() {
  return (
    <div className="App">
      <Navegacion />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactanos' />

      </Routes>


    </div>
  );
}

export default App;
