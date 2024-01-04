import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function ImageWithText({ imageUrl, caption, heading, description }) {
  return (
    <div className="image-with-text isolate collapse-padding scroll-trigger animate--slide-in" style={{ paddingTop: '5.0%' }}>
     
        <Row className="image-with-text__grid">
          <Col md={6} className="image-with-text__media-item image-with-text__media-item--medium image-with-text__media-item--middle">
            <div className="image-with-text__media image-with-text__media--adapt gradient color-background-1 global-media-settings media" style={{ paddingBottom: '5.0%', overflow: 'hidden' }}>
              <Image src={imageUrl} alt="" fluid />
            </div>
          </Col>
          <Col md={6} className="image-with-text__text-item">
            <div className="image-with-text__content image-with-text__content--middle image-with-text__content--desktop-left image-with-text__content--mobile-left image-with-text__content--adapt content-container">
              <p className="image-with-text__text image-with-text__text--caption caption-with-letter-spacing caption-with-letter-spacing--medium">
                {caption}
              </p>
              <h2 className="image-with-text__heading h1 rte">
                {heading}
              </h2>
              <div className="image-with-text__text rte body">
                <p>{description}</p>
              </div>
            </div>
          </Col>
        </Row>

    </div>
  );
}

export default ImageWithText;
