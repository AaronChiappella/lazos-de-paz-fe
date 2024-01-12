import React from 'react';


/* components*/
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import imagen from '../assets/c1.jpg'
import imagen1 from '../assets/image1.jpg'
import imagen2 from '../assets/image2.jpg'

import './nosotros.css'

function Nosotros() {
    return (
        <div >

            <iframe src="https://www.youtube.com/embed/PTjuYrZPq7U?si=ZyMRrkd3odcA4tnt?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
            <div className="p-1">
                <Breadcrumb>
                    <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Nosotros</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Container className='container-nosotros'>



                <h1 className='text-center titulo-nosotros p-2' >Quienes somos</h1>

                <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis non nisi rutrum semper vitae non dui. Donec egestas, eros a feugiat mattis, leo mauris malesuada dolor, accumsan vestibulum mauris turpis quis lectus. Nam eu nunc ornare turpis venenatis ornare. Curabitur ipsum augue, ultricies non luctus sed, ullamcorper vel neque. Nullam aliquet neque non justo accumsan, nec imperdiet nisl bibendum. Quisque dui odio, fermentum id interdum eget, viverra ut diam. Donec congue arcu id tellus tincidunt porttitor. Donec imperdiet, mauris a suscipit facilisis, sapien sapien pretium sapien, eget venenatis purus sapien non massa. Fusce hendrerit lobortis ex a imperdiet. Praesent rhoncus lectus a commodo varius. Etiam cursus mauris ut rutrum ornare. Donec sagittis finibus egestas. Quisque tincidunt ex vel auctor consequat. Ut id laoreet sem. Integer ac fermentum arcu, eu imperdiet est.</p>






                <img src={imagen} alt="Description" />

                <p className='text-center p-3'> Nec imperdiet nisl bibendum. Quisque dui odio, fermentum id interdum eget, viverra ut diam. Donec congue arcu id tellus tincidunt porttitor. Donec imperdiet, mauris a suscipit facilisis, sapien sapien pretium sapien, eget venenatis purus sapien non massa. Fusce hendrerit lobortis ex a imperdiet. Praesent rhoncus lectus a commodo varius. Etiam cursus mauris ut rutrum ornare. Donec sagittis finibus egestas. Quisque tincidunt ex vel auctor consequat. Ut id laoreet sem. Integer ac fermentum arcu, eu imperdiet est.</p>
                <p className='text-start subtitulo-nosotros'> 2016</p>
                <img src={imagen1} alt="Description" />
                <p className='text-start subtitulo-nosotros'> 2017</p>
                <img src={imagen2} alt="Description" />
            </Container>
        </div>


    );
}

export default Nosotros;
