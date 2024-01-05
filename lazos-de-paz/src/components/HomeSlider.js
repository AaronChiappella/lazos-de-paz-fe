import React, { useState } from 'react';
import { Carousel} from 'react-bootstrap';

import c1 from '../assets/c1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
function HomeSlider (){

  return (
    
      <Carousel fade className="full-width-carousel">
          <Carousel.Item>
            <img src={c1} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           <img src={image2} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
           <img src={image3} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );

};

export default HomeSlider;
