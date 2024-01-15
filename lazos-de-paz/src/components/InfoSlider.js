import React from 'react';

/* libreria de sliders */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* incorporando fontawesome e importando icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast,faMoneyBillTransfer,faUserShield} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';


import './infoSlider.css'; 


const InfoSlider = () => {
  const paymentOptions = [
    { id: 1, icon: faTruckFast, alt: 'Envios a todo el pais',textPrimary:'Envios a todo el pais',textSecondary:'Compra desde la comidad de tu casa' },
    { id: 2, icon: faMoneyBillTransfer, alt: 'Transferencias disponibles',textPrimary:'Pago con transferencias disponible',textSecondary:'' },
    { id: 3, icon:faWhatsapp , alt: 'Contacto directo con nuestro equipo',textPrimary:'Contacto directo con nosotros!',textSecondary:'Resolvemos todas tus dudas' },
    { id: 4, icon: faUserShield, alt: 'Proteccion de compra',textPrimary:'Protejemos tu compra',textSecondary:'Aseguramos el arribo satisfactorio a destino' },
    
  ];


  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false, // Esta propiedad quita las flechas del slider

  };

  return (
    <div className="payment-slider-container container">
      <Slider {...settings}>
        {paymentOptions.map((option) => (
          <div key={option.id} className="payent-option">
            <FontAwesomeIcon icon={option.icon} size="6x" />
            <div className='text-container'>
            <p className='text-center text-primary'>{option.textPrimary}</p>
            <p className='text-center text-secondary'>{option.textSecondary}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfoSlider;
