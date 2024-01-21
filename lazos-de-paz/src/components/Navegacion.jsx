import React, { useState } from 'react';
import { Nav, Navbar, Modal, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carrito from './Carrito';
import Login from './Login';

import logo from '../assets/lana-logo.svg';
import carritoIcon from '../assets/carrito-compras.svg';
import menu from '../assets/menu.svg';
import './navegacion.css';

function Navegacion() {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, { ...product, cantidad: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} agregado al carrito`);
    window.location.reload();
  };

  const updateProductTable = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className='p-1' style={{ width: '100vw' }}>
      <Navbar collapseOnSelect expand="lg" className="navbar-custom fixed-top">

        <Nav.Link as={Link} to='/'>
          <Navbar.Brand>
            <img
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{ paddingLeft: '1%' }}
            />
            {' '}
            <span className="lazos-de-paz">Lazos de Paz</span>
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' className='text-link'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Products' className='text-link'>Productos</Nav.Link>
            <Nav.Link as={Link} to='/Nosotros' className='text-link'>Nosotros</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
                <Navbar.Brand onClick={handleShowCart}>
                  <img
                    alt=""
                    src={carritoIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top text-link cursor-pointer"
                  />
                  <Badge bg="primary">{cart.length}</Badge>
                </Navbar.Brand>
               
              </>
            ) : (
              <Button variant="outline-primary" onClick={handleShowLogin}>
                Iniciar sesión
              </Button>
            )}
            <Navbar.Brand href="#">
              <img
                alt=""
                src={menu}
                width="30"
                height="30"
                className="d-inline-block align-top text-link"
              />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Carrito cart={cart} removeFromCart={removeFromCart} updateProductTable={updateProductTable} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Login onLogin={() => setIsLoggedIn(true)} />
      </Modal>
    </div>
  );
}

export default Navegacion;
