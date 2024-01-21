import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './components/scrollBar.css';
import Navegacion from './components/Navegacion';
import Home from './components/Home';
import Products from './components/Products';
import Nosotros from './components/Nosotros';
import WhatsappButton from "./components/WhatsappButton";
import InstagramButton from "./components/InstagramButton";
import VerProducto from './components/VerProducto';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className='App'>
          <Navegacion handleLogout={handleLogout} />
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
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
