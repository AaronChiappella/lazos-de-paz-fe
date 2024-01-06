import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import './banners.css'

function Banners() {
  const bannerData = [
    {
      title: 'Patrones',
      imageUrl: 'https://assets.jumpseller.com/store/casita-de-lana/themes/294268/options/23759553/chaleco%20hojas%20rosado4.jpg?1637788264',
      link: 'patrones',
    },
    {
      title: 'Tejidos',
      imageUrl: 'https://assets.jumpseller.com/store/casita-de-lana/themes/294268/options/23759556/tejidos3.jpg?1637787983',
      link: 'tejidos',
    },
    {
      title: 'Kits de Tejido',
      imageUrl: 'https://assets.jumpseller.com/store/casita-de-lana/themes/294268/options/23759559/kits1.jpg?1637787470',
      link: 'kits',
    }
  ];

  return (
  <div className='data-container'>
    <Row className="mx-n2 mb-md-5 mb-4 trsn no-gutters p-3 d-flex justify-content-around ">
      {bannerData.map((banner, index) => (
        <Col md={3} sm={6} key={index} className="mb-3">
          <Card className="mx-2 h-100 btn-banner" style={{ maxWidth: '30rem' }}>
            <a href={banner.link} title={banner.title}>
              <Card.Img variant="top" src={banner.imageUrl} alt={banner.title} />
             {/*  <Card.Body>
                <Card.Title className='banner-title'>{banner.title}</Card.Title>
              </Card.Body> */}
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </div>

  );
}

export default Banners;
