// App.js

import './App.css';
import './components/scrollBar.css'; // Importa el archivo CSS de estilos de la barra de desplazamiento

import Navegacion from './components/Navegacion';
import Home from './components/Home';
import Products from './components/Products';
import Nosotros from './components/Nosotros';
import WhatsappButton from "./components/WhatsappButton";
import InstagramButton from "./components/InstagramButton";
import VerProducto from './components/VerProducto';


import { Routes, Route } from 'react-router-dom';




function App() {



  return (
    <div className="App">
      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactanos' />
        <Route path="/ver-producto/:id" element={<VerProducto />} />


      </Routes>

      <InstagramButton />
      <WhatsappButton />




    </div>
  );
}

export default App;
