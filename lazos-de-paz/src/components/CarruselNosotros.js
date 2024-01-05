import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/c1.jpg'; // Importa la imagen aquí
import image2 from '../assets/c2.jpg'; // Importa la imagen aquí
import image3 from '../assets/c3.jpg'; // Importa la imagen aquí

function CarruselNosotros() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image text="First slide" src={image1} />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Second slide" src={image2}/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Third slide" src={image3}/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselNosotros;