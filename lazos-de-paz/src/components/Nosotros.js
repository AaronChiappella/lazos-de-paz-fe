import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './nosotros.css';


import imagen1 from '../assets/nosotros-1.jpg'
import imagen2 from '../assets/nosotros-2.jpg'
import imagen3 from '../assets/nosotros-3.webp'

function Nosotros() {
    return (
        <div>
            {/* <iframe
                src="https://www.youtube.com/embed/PTjuYrZPq7U?si=ZyMRrkd3odcA4tnt?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
             ></iframe> */}{/*>>>VIDEO DE LA MARCA<<< */}
            <div className="p-1">
                <Breadcrumb>
                    <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Nosotros</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Container className="container-nosotros">
                <h1 className="text-center titulo-nosotros p-2">Quiénes somos</h1>

                <p className="text-center">
                    En 2016, nació nuestra pasión por los tejidos artesanales con el sueño de ofrecer prendas únicas para mujeres. Somos una empresa dedicada a la creación de diseños unicos que buscan la distinción de lo común. Nos inspiramos en nuestros propios gustos, explorando la creatividad y la innovación en cada tejido. La líder de nuestra empresa, una madre que descubrió su pasión por tejer desde muy pequeña, comparte su amor por este arte con el mundo.
                </p>
                <p className="text-start subtitulo-nosotros"> </p>


                <img src={imagen1} alt="Description" />

                <p className="text-start subtitulo-nosotros"> </p>

                <p className="text-center p-3">
                    Nuestra filosofía se basa en la creación de prendas que reflejen la elegancia y la artesanía. Cada diseño es cuidadosamente elaborado, y nuestras creaciones buscan no solo vestir a las mujeres, sino también empoderarlas a través de la moda. Nos enorgullece ofrecer tejidos artesanales que cuentan historias y celebran la individualidad.
                </p>

                <p className="text-start subtitulo-nosotros"> </p>


                <img src={imagen2} alt="Description" />

                <p className="text-start subtitulo-nosotros"> </p>

                <img src={imagen3} alt="Description" />
            </Container>
        </div>
    );
}

export default Nosotros;
