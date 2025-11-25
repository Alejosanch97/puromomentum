import React from "react";
import logo from "../assets/img/logo.png"; // Importación de tu logo
import "../Styles/footer.css"; // Importación de los estilos

export const Footer = () => (
    // La clase 'footer-section' contendrá el fondo amarillo y el padding
    <footer className="footer-section">
        <div className="footer-content-wrapper">
            
            {/* Columna Izquierda: Logo y Copyright */}
            <div className="footer-left">
                {/* Contenedor del logo con una clase para control de tamaño */}
                <div className="footer-logo-container">
                    <img src={logo} alt="Agencia Inusual Logo" className="footer-logo" />
                </div>
                {/* Copyright con la clase 'footer-copyright' */}
                <p className="footer-copyright">
                    PURO MOMENTUM ©2025 All Rights Reserved.
                </p>
            </div>
            
            {/* Columna Derecha: Íconos Sociales */}
            <div className="footer-social-links">
                {/* YouTube */}
                <a href="#" target="_blank" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                </a>
                {/* Facebook */}
                <a href="#" target="_blank" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                {/* Instagram */}
                <a href="#" target="_blank" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
);