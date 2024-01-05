
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


/* logo */
import logo from '../assets/lana-logo.svg';
import carrrito from '../assets/carrito-compras.svg'
import menu from '../assets/menu.svg'

import { Link } from 'react-router-dom';

import './navegacion.css'

function Navegacion() {
  return (




    <div className='p-1  '>
        <Navbar collapseOnSelect expand="lg" className="navbar-custom" sticky="top">
        <Navbar.Brand>
          <img
            alt="logo"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}

          <span className="lazos-de-paz">Lazos de Paz</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Home' className='text-link '>Home</Nav.Link>
            <Nav.Link as={Link} to='/Products' className='text-link'>Productos</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to='/Nosotros' className='text-link'>Nosotros</Nav.Link>
            <Nav.Link as={Link} className='text-link'>Contactanos</Nav.Link>

          </Nav>
          <Nav>
            <Navbar.Brand href="#">
              <img
                alt=""
                src={carrrito}
                width="30"
                height="30"
                className="d-inline-block align-top text-link "
              />{' '}
            </Navbar.Brand>

            <Navbar.Brand href="#">
              <img
                alt=""
                src={menu}
                width="30"
                height="30"
                className="d-inline-block align-top text-link "
              />{' '}

            </Navbar.Brand>

          </Nav>
        </Navbar.Collapse>



      </Navbar>
    </div>
  )
}

export default Navegacion;