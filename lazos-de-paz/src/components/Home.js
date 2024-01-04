import React from 'react';


/* components*/
import CarruselHome from './CarruselHome';
import ImageWithTextRight from './ImageWithTextRight';
import ImageWithTextLeft from './ImageWithTextLeft';

/* assets */
import image1 from '../assets/image1.jpg'; // Importa la imagen aquí
import image2 from '../assets/image2.jpg'; // Importa la imagen aquí
import image3 from '../assets/image3.jpg'; // Importa la imagen aquí


function Home() {
    return (
        <div >
            {/* Pasa la imagen importada como prop a ImagenHome */}
            <ImageWithTextLeft
                imageUrl={image2}
                caption="ROL"
                heading="NOMBRE"
                description="DESCRIPCION"
            />
            <ImageWithTextRight imageUrl={image2}
                caption="ROL"
                heading="NOMBRE"
                description="DESCRIPCION"
            />
            <ImageWithTextLeft
                imageUrl={image3}
                caption="ROL"
                heading="NOMBRE"
                description="DESCRIPCION"
            />
            <CarruselHome />
        </div>
    );
}

export default Home;
