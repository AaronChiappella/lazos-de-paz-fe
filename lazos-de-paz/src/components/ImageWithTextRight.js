import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './imageWithText.css'

import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ImageWithText({ imageUrl, caption, heading, description }) {
  return (
    <div className='container container-image-with-text'>
      <div className="image-with-text isolate collapse-padding scroll-trigger animate--slide-in ">

        <Row className="image-with-text__grid">
         

          {/* Button Column */}
          <Col md={6} className="image-with-text__text-item text-left">
            <Container>
            <div className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left image-with-text__content--mobile-left image-with-text__content--adapt content-container image-with-text-personalize" >
              <p className="image-with-text__text image-with-text__text--caption caption-with-letter-spacing caption-with-letter-spacing--medium text-left">
                {caption}
              </p>
              <h4 className="image-with-text__heading h1 rte">
                {heading}
              </h4>
              <div className="image-with-text__text rte body">
                <p>{description}</p>
              </div>
            </div>
            </Container>
            <hr></hr>
            <Nav.Link as={Link} to='/Nosotros' className=' mas-sobre-nosotros'>
              Mas sobre nosotros
            </Nav.Link>
          </Col>
 {/* Card Column */}
 <Col md={6} className="image-with-text__media-item image-with-text__media-item--medium image-with-text__media-item--middle">
            <div className="image-with-text__media image-with-text__media--adapt gradient color-background-1 global-media-settings media" style={{ paddingBottom: '2.0%', overflow: 'hidden' }}>
              <Image src={imageUrl} alt="" fluid />
            </div>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default ImageWithText;

