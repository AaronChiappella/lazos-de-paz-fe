import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

function Card({ product }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={product.image} alt={`${product.title} `} className="card-img-top" />
      </div>
      <div className="card-text">
        <h4 className="card-title">{product.name}</h4>
<p className='text-left text-secondary' >{product.description}</p>
        <p className='card-price'>{product.price}  </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // Agrega otras propiedades según sea necesario
  }).isRequired,
};

export default Card;
