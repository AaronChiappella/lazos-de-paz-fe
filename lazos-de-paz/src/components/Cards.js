import React, { useEffect, useState } from 'react';
import Card from './Card';

/* css */
import './card.css';


/* imagenes de productos >>>POSTERIORMENTE SE PROYECTA IMPLEMENTAR UNA BD<<< */
import imagenProducto1 from '../assets/imagenesProductos/bandolera.webp'
import imagenProducto2 from '../assets/imagenesProductos/bufanda-angelica.webp'
import imagenProducto3 from '../assets/imagenesProductos/bufandon-llama-vision.webp'
import imagenProducto4 from '../assets/imagenesProductos/cartera-chavela.webp'
import imagenProducto5 from '../assets/imagenesProductos/chal-ana.webp'
import imagenProducto6 from '../assets/imagenesProductos/chaleco-ines.webp'
import imagenProducto7 from '../assets/imagenesProductos/ruana-andresa.webp'
import imagenProducto8 from '../assets/imagenesProductos/top-nude.webp'

function Cards() {
  const products = [
    {
      id: 1,
      name: 'Bandolera',
      description: 'Telar Elpis',
      image: imagenProducto1,
      price: 93760,
      stock: 1,
      talles: [1,2,3,4]
  },
  {
      id: 2,
      name: 'Bufanda Angelica',
      description: '100% lana de Oveja',
      image: imagenProducto2,
      price: 54000,
      stock: 3,
      talles: [1,2,3,4]  },
  {
      id: 3,
      name: 'Bufandon Llama Vision',
      description: '100% lana de Llama',
      image: imagenProducto3,
      price: 67600,
      stock: 5,
      talles: [1,2,3,4]  },
  {
      id: 4,
      name: 'Cartera Chavela',
      description: '100% lana sintetica',
      image: imagenProducto4,
      price: 20400,
      stock: 2,
      talles: [1,2,3,4]  },
  {
      id: 5,
      name: 'Chal Ana',
      description: '100% lana de Oveja',
      image: imagenProducto5,
      price: 44000,
      stock: 5,
      talles: [1,2,3,4]  },
  {
      id: 6,
      name: 'Chaleco Ines',
      description: '100% lana de Oveja',
      image: imagenProducto6,
      price: 45000,
      stock: 6,
      talles: [1,2,3,4]  },
  {
      id: 7,
      name: 'Ruana Andresa',
      description: '100% lana de Llama',
      image: imagenProducto7,
      price: 120000,
      stock: 2,
      talles: [1,2,3,4]  },
  {
      id: 8,
      name: 'Top Crudo',
      description: '100% Lana de Oveja',
      image: imagenProducto8,
      price: 51000,
      stock: 1,
      talles: [1,2,3,4]  },
];

  return (
    
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {products.map(product => (
          <div className="col-md-3" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
