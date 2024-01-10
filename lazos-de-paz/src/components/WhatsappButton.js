import React from 'react';

import './whatsappButton.css'


function WhatsappButton() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
                <a href="https://api.whatsapp.com/send?phone=543442404791&text=Hola%21%20Saludos%20desde%20Lazos%20de%20Paz" class="wsp-float" target="_blank">
                    <i class="fa fa-whatsapp wsp-my-float"></i>
                </a>
            </>
            )
}
export default WhatsappButton;