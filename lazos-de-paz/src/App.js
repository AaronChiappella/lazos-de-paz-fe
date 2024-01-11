import './App.css';

import Navegacion from './components/Navegacion';
import Home from './components/Home';
import Products from './components/Products';
import Nosotros from './components/Nosotros';
import WhatsappButton from "./components/WhatsappButton";
import InstagramButton from "./components/InstagramButton";




import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Navegacion />

      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactanos' />

      </Routes>
      <InstagramButton />
      <WhatsappButton />


    </div>
  );
}

export default App;
