import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import './card.css';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
/* 
libreia para carruseles  */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductList = () => {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container">
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id}>
                        <Card product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductList;
