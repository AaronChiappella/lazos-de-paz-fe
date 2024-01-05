import React from 'react';


/* components*/

import ImageWithTextRight from './ImageWithTextRight';
import ImageWithTextLeft from './ImageWithTextLeft';

/* assets */
import image2 from '../assets/image2.jpg'; // Importa la imagen aquí
import image3 from '../assets/image3.jpg'; // Importa la imagen aquí
import CarruselNosotros from './CarruselNosotros';


function Nosotros() {
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
            <CarruselNosotros/>
        </div>
    );
}

export default Nosotros;
