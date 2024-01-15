/* componentes */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';


/* css */
import './banners.css'

/* imagenes */
import bannerNinos from '../assets/banner-ninos.jpg'
import bannerAdultos from '../assets/banner-adultos.jpg'
import bannerAccesorios from '../assets/banner-accesorios.jpg'



function Banners() {
  const bannerData = [
    {
      title: 'Inferiores',
      imageUrl: bannerNinos,

    },
    {
      title: 'Superiores',
      imageUrl: bannerAdultos,

    },
    {
      title: 'Accesorios',
      imageUrl: bannerAccesorios,

    }
  ];

  return (
    <div className='data-container'>
      <Row className="mx-n2 mb-md-5 mb-4 trsn no-gutters p-3 d-flex justify-content-around ">
        {bannerData.map((banner, index) => (
          <Col md={3} sm={6} key={index} className="mb-3">
            <Card className="mx-2 h-100 btn-banner d-flex justify-content-center align-items-center" style={{ maxWidth: '30rem' }}>
              <a >
                <Card.Img variant="top" src={banner.imageUrl} alt={banner.title} />
                <Card.Body>
                  <Card.Title className='banner-title-b'>{banner.title}</Card.Title>
                </Card.Body>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

  );
}

export default Banners;
