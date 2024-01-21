import React from 'react';
import './instagramButton.css';
import imagenBoton from '../assets/instagram.png';

function InstagramButton() {
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/aaronchiappella/', '_blank');
    };

    return (
        <div onClick={handleInstagramClick} className="ig-float" target="_blank">
            <img src={imagenBoton} alt="Instagram ig-my-float" className="ig-icon" />
        </div>
    );
}

export default InstagramButton;
