import React from 'react';
import './imagencabecera.css'; // Importa tu archivo de estilos CSS

function ImagenCabecera({texto}) {
  return (
    <div className='imagen-cabecera-container'>
      <h1 className='texto-centrado'>{texto}</h1>
    </div>
  );
}

export default ImagenCabecera;
