import React from "react";
import Image from 'react-bootstrap/Image'

import './cardNosotros.css'

import imagenPrueba from '../assets/image1.jpg'
import { Container } from "react-bootstrap";



function CardNosotros({ image, caption, titulo, descripcion }) {
    return (
        <div className="d-flex card-nosotros">

           
            <div className="texto-card-nosotros-texto">
                <Container>
                <div>
                    <p className="text-center">{caption}</p>
                </div>
                <div className="card-nosotros-texto-principal">
                    <h3 className="text-left">{titulo}</h3>
                    
                    <p className="text-left">{descripcion}</p>
                </div>
                </Container>
            </div>
            <div >
                <Image src={imagenPrueba} rounded className="texto-card-nosotros-imagen" />
            </div>
        </div>

    )
}

export default CardNosotros;