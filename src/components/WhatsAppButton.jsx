import React from 'react';
import '../Styles/whatsapp.css'; // Crearemos este archivo a continuación

const WhatsAppButton = () => {
    const phoneNumber = "573105523011";
    const message = "Hola! Me gustaría obtener más información sobre Puro Momentum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            className="whatsapp-float" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <i className="fab fa-whatsapp whatsapp-icon"></i>
        </a>
    );
};

export default WhatsAppButton;