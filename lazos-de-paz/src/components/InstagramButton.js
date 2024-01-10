import React from 'react';
import './instagramButton.css';
import imagenBoton from '../assets/instagram.png';

function InstagramButton() {
    return (
        <div href="https://www.instagram.com/aaronchiappella/" className="ig-float" target="_blank">
            <img src={imagenBoton} alt="Instagram ig-my-float" className="ig-icon" />
        </div>
    );
}

export default InstagramButton;
