import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/lana-logo.svg';
import carrito from '../assets/carrito-compras.svg';
import menu from '../assets/menu.svg';
import './navegacion.css';

function Navegacion() {
  return (
    <div className='p-1'>
      <Navbar collapseOnSelect expand="lg" className="navbar-custom fixed-top">
        
        <Nav.Link as={Link} to='/' >
        <Navbar.Brand>
          <img
            alt="logo"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
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
            <Nav.Link as={Link} to='/Contacto' className='text-link'>Contactanos</Nav.Link>
          </Nav>
          <Nav className="ms-auto"> {/* Muevo este Nav a la derecha con ms-auto */}
            <Navbar.Brand href="#">
              <img
                alt=""
                src={carrito}
                width="30"
                height="30"
                className="d-inline-block align-top text-link"
              />
            </Navbar.Brand>
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
    </div>
  );
}

export default Navegacion;
