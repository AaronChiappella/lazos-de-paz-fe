import React, { useEffect, useState } from 'react';
import Card from './Card';
import './card.css';

function Cards() {
  const [products, setProducts] = useState([]);

  // Una función que maneja efectos dentro de los componentes
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

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
