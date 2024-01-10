import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import './productosDestacados.css';


import imagenProducto1 from '../assets/imagenesProductos/bandolera.webp'
import imagenProducto2 from '../assets/imagenesProductos/bufanda-angelica.webp'
import imagenProducto3 from '../assets/imagenesProductos/bufandon-llama-vision.webp'
import imagenProducto4 from '../assets/imagenesProductos/cartera-chavela.webp'
import imagenProducto5 from '../assets/imagenesProductos/chal-ana.webp'
import imagenProducto6 from '../assets/imagenesProductos/chaleco-ines.webp'
import imagenProducto7 from '../assets/imagenesProductos/ruana-andresa.webp'
import imagenProducto8 from '../assets/imagenesProductos/top-nude.webp'


const ProductosDestacados = () => {
    const products = [
        {
            id: 1,
            name: "Bandolera",
            description: "Telar Elpis",
            image: imagenProducto1,
            price:'93.760 ARS'
            
        },
        
        {
            id: 2,
            name: "Bufanda Angelica",
            description: "100% lana de Oveja",
            image: imagenProducto2,
            price:'54.000 ARS'
        } 
        ,
        {
            id:3 ,
            name: "Bufandon Llama Vision",
            description: "100% lana de Llama",
            image: imagenProducto3,
            price:'67.600 ARS'
        } ,
        {
            id:4 ,
            name: "Cartera Chavela",
            description: "100% lana sintetica",
            image: imagenProducto4,
            price:'20.400 ARS'
        } ,
        {
            id: 5,
            name: "Chal Ana",
            description: "100% lana de Oveja",
            image: imagenProducto5,
            price:'44.000 ARS'
        } ,
        {
            id: 6,
            name: "Chaleco Ines",
            description: "100% lana de Oveja",
            image: imagenProducto6,
            price:'45.000 ARS'
        } ,
        {
            id: 7,
            name: "Ruana Andresa",
            description: "100% lana de Llama",
            image: imagenProducto7,
            price:'120.000 ARS'
        } ,
        {
            id:8 ,
            name: "Top Crudo",
            description: "100% Lana de Oveja",
            image: imagenProducto8,
            price:'51.000 ARS'
        } 
    ];


    return (
        <div className=" container container-product-list">
           
            <div className="container d-flex justify-content-center align-items-center">
                
                <div className="row">
                    <div ><h3> Productos Destacados</h3>
                    </div>
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
