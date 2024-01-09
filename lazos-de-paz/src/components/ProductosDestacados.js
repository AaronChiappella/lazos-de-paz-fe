import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import './productosDestacados.css';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



const ProductosDestacados = () => {
    const products = [
        {
            id: 1,
            name: "Producto1",
            description: "producto1 xd",
            image: image1
        },
        {
            id: 4,
            name: "Producto1",
            description: "producto1 xd",
            image: image1
        },
        {
            id: 5,
            name: "Producto1",
            description: "producto1 xd",
            image: image1
        },
        {
            id: 2,
            name: "Producto2",
            description: "producto2 xd",
            image: image2
        },
        {
            id: 3,
            name: "Producto3",
            description: "producto3 xd",
            image: image3
        }
    ];


    return (
        <div className=" container container-product-list">
           
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                        {products.map(product => (
                            <div className="col-md-3" key={product.id}>
                                <Card product={product} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductosDestacados;
