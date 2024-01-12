import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './homeSlider.css'

import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';


function HomeSlider() {

  return (
    <div className='slider-container'>
      <Carousel fade className="full-width-carousel">
        <Carousel.Item>
          <img src={c1} />
          <Carousel.Caption>
            <h3>Lanas</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
{/*             <Button variant="outline-light">Nuestras Lanas</Button>{' '}
 */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={c2} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
{/*             <Button variant="outline-light">Nuestras Lanas</Button>{' '}
 */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={c3} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
{/*             <Button variant="outline-light">Nuestras Lanas</Button>{' '}
 */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );

};

export default HomeSlider;
