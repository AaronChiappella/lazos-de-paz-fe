import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './homeSlider.css'

import c1 from '../assets/home-slider-3.jpeg';
import c2 from '../assets/home-slider-1.jpg';
import c3 from '../assets/home-slider-2.jpg';



function HomeSlider() {
  return (
    <div className='slider-container'>
      <Carousel fade className="full-width-carousel">
        <Carousel.Item>
          <img src={c1} alt='banner-1' />
          <Carousel.Caption>
            <h3>Explora Elegancia en la Temporada Invierno 2024</h3>
            <p>Sumérgete en la calidez del invierno con nuestras últimas tendencias de moda. Desde elegantes abrigos hasta accesorios acogedores, encuentra la perfecta fusión de estilo y comodidad.</p>
            <Button variant="outline-light">Descubrir Ahora</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={c2} alt='banner-2' />
          <Carousel.Caption>
            <h3 style={{ color: '#000' }}>Elegancia en Cada Detalle - Colección 2024</h3>
            <p className='text-center' style={{ color: '#000' }}>Encuentra tu estilo distintivo con nuestra nueva colección. Desde piezas suaves y delicadas hasta opciones versátiles para cualquier ocasión, cada prenda está diseñada para resaltar tu belleza única.</p>
            <Button variant="outline-light">Explorar Ahora</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={c3} alt='banner-3' />
          <Carousel.Caption>
            <h3>Estilo para Cada Día - Colección 2024</h3>
            <p>Descubre la elegancia sin esfuerzo con nuestra colección diaria. Desde atuendos cómodos para el trabajo hasta opciones chic para tus momentos de ocio, cada prenda combina estilo y versatilidad para adaptarse a tu vida.</p>
            <Button variant="outline-light">Explora tu Estilo Diario</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
