import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* css */
import './card.css';

function Card({ product }) {
  return (
    <Link to={`/ver-producto/${product.id}`} className="card-link" style={{textDecoration: 'none'}}>
      <div className="card text-center animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={product.image} alt={`${product.title} `} className="card-img-top" />
        </div>
        <div className="card-text">
          <h4 className="card-title">{product.name}</h4>
          <p className='text-left text-secondary'>{product.description}</p>
          <p className='card-price'>${product.price} ARS </p>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
