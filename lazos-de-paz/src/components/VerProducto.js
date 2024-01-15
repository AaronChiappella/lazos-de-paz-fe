import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faP } from '@fortawesome/free-solid-svg-icons';

import './verProducto.css';



import imagenProducto1 from '../assets/imagenesProductos/bandolera.webp';
import imagenProducto2 from '../assets/imagenesProductos/bufanda-angelica.webp';
import imagenProducto3 from '../assets/imagenesProductos/bufandon-llama-vision.webp';
import imagenProducto4 from '../assets/imagenesProductos/cartera-chavela.webp';
import imagenProducto5 from '../assets/imagenesProductos/chal-ana.webp';
import imagenProducto6 from '../assets/imagenesProductos/chaleco-ines.webp';
import imagenProducto7 from '../assets/imagenesProductos/ruana-andresa.webp';
import imagenProducto8 from '../assets/imagenesProductos/top-nude.webp';


function VerProducto() {
    const products = [
        {
            id: 1,
            name: 'Bandolera',
            description: 'Telar Elpis',
            image: imagenProducto1,
            price: 93760,
            stock: 1,
            talles: [1]
        },
        {
            id: 2,
            name: 'Bufanda Angelica',
            description: '100% lana de Oveja',
            image: imagenProducto2,
            price: 54000,
            stock: 3,
            talles: [1]
        },
        {
            id: 3,
            name: 'Bufandon Llama Vision',
            description: '100% lana de Llama',
            image: imagenProducto3,
            price: 67600,
            stock: 5,
            talles: [1]
        },
        {
            id: 4,
            name: 'Cartera Chavela',
            description: '100% lana sintetica',
            image: imagenProducto4,
            price: 20400,
            stock: 2,
            talles: [5]
        },
        {
            id: 5,
            name: 'Chal Ana',
            description: '100% lana de Oveja',
            image: imagenProducto5,
            price: 44000,
            stock: 5,
            talles: [5]
        },
        {
            id: 6,
            name: 'Chaleco Ines',
            description: '100% lana de Oveja',
            image: imagenProducto6,
            price: 45000,
            stock: 6,
            talles: [5]
        },
        {
            id: 7,
            name: 'Ruana Andresa',
            description: '100% lana de Llama',
            image: imagenProducto7,
            price: 120000,
            stock: 2,
            talles: [2]
        },
        {
            id: 8,
            name: 'Top Crudo',
            description: '100% Lana de Oveja',
            image: imagenProducto8,
            price: 51000,
            stock: 1,
            talles: [1]
        },
    ];

    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));



    useEffect(() => {
        if (product) {
            setValor(valor);
        }
    }, [product]);

    const [valor, setValor] = useState(1);

    const incrementar = (stock) => {
        if (valor < stock) {
            setValor(valor + 1);
        }
    };

    const decrementar = () => {
        if (valor > 1) {
            setValor(valor - 1);
        }
    };

    if (!product) {
        return <div>No se encontró el producto.</div>;
    }

    return (
        <div className="container container-principal">
            <img src={product.image} alt={product.name} className='imagenProducto' />

            <div className='info-producto'>
                <h4 className='titulo-producto text-center'>{product.name}</h4>
                <div>
                    <p className='text-secondary'>{product.description}</p>
                </div>
                <div className='talles-producto'>
                <Form.Select aria-label="talle" size='sm' >
                        <option>Selecciona tu talle</option>
                        {product.talles.map((talle, index) => (
                            <option key={index} value={talle}>
                                {talle}
                            </option>
                        ))}
                    </Form.Select>
                </div>

                <div className='cantidad-producto'>
                    <p className='stock-producto text-start' >Cantidad en stock: {product.stock}</p>
                    <div className='contador-producto'>
                        <FontAwesomeIcon icon={faMinus} onClick={decrementar} className='contador-decremento'>Decrementar</FontAwesomeIcon>
                        <div className='contador-valor'>
                            <h5>{valor}</h5>
                        </div>
                        <FontAwesomeIcon icon={faPlus} onClick={() => incrementar(product.stock)} className='contador-incremento'>Incrementar</FontAwesomeIcon>
                    </div>
                </div>
                <div className='total-producto'> ${valor * product.price}</div>
                <Button className='button-agregar-producto'> AGREGAR AL CARRITO</Button>

                <div>
                    <p className='text-secondary text-start p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu dignissim ante, dapibus porta justo. Sed congue semper tortor, iaculis ultrices dolor dictum viverra. Vestibulum quam sem, vehicula ut dictum in, volutpat in libero. Quisque luctus porttitor sapien, quis fringilla nunc venenatis in. In lacinia lacus magna. Aliquam maximus hendrerit tellus. Nulla facilisi. Sed eu tellus tempor, rhoncus elit ut, varius metus. Mauris consectetur nibh justo, eget fringilla mi luctus vel. Integer non mauris eros. Praesent vitae ligula ut metus maximus porttitor at non ex. Maecenas in ligula turpis. Sed vehicula ipsum nec nunc sagittis ullamcorper. Pellentesque lacinia erat ante, nec mollis lacus mattis sit amet. Nam sem lacus, maximus id odio sed, convallis tempus justo.

                        Vestibulum pharetra ultrices nulla, nec blandit leo consectetur eu. Nulla varius rutrum neque. Nunc venenatis consectetur lacus, ut placerat odio ornare in. Proin vel condimentum diam. Aliquam lobortis velit in justo interdum consectetur. Mauris lobortis magna ac mauris viverra pretium. Nunc congue vestibulum aliquet. Nullam eget orci sit amet est commodo tristique.</p>
                </div>
            </div>
        </div>);
};

export default VerProducto;
