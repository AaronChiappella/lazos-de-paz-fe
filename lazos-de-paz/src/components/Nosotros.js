import React from 'react';


/* components*/


import CarruselNosotros from './CarruselNosotros';
import CardNosotrosIzq from './CardNosotrosIzq';
import CardNosotrosDer from './CardNosotrosDer';
import { Container } from 'react-bootstrap';


import './nosotros.css'

function Nosotros() {
    return (
        <div >


            <iframe src="https://www.youtube.com/embed/PTjuYrZPq7U?si=ZyMRrkd3odcA4tnt?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>




            <Container>
                <h3>TEXTO TITULO </h3>
                <p className='text-center'>das</p>
            </Container>

            <CardNosotrosIzq titulo={'TITULOPRUEBA'} caption={'CaptionPrueba'} descripcion={'este texto de prueba'} />


            <CardNosotrosDer titulo={'TITULOPRUEBA'} caption={'CaptionPrueba'} descripcion={'este texto de prueba'} />

            <CardNosotrosIzq titulo={'TITULOPRUEBA'} caption={'CaptionPrueba'} descripcion={'este texto de prueba'} />

        </div>


    );
}

export default Nosotros;
