import React from 'react';
import { Table, Button } from 'react-bootstrap';

function Carrito({ cart, removeFromCart }) {
  return (
    <Table striped hover responsive>
      <thead >
        <tr>
          <th style={{backgroundColor:'#ebebeb'}} >Producto</th>
          <th style={{backgroundColor:'#ebebeb'}}>Cantidad</th>
          <th style={{backgroundColor:'#ebebeb'}}>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.cantidad}</td>
            <td>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Carrito;
