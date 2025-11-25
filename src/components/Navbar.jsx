import { useState, useEffect } from 'react'; 
import { NavLink, Link } from "react-router-dom"; 
import "../Styles/navbar.css";
// Asegúrate de que esta ruta sea correcta para tu logo
import logo from "../assets/img/logo.png"; 

export const Navbar = () => {
    // Estado para controlar si se ha hecho scroll
    const [scrolled, setScrolled] = useState(false); 

    // Lógica para manejar el evento de scroll
    useEffect(() => {
        const handleScroll = () => {
            // Si el desplazamiento vertical es mayor a 50px, se activa la clase 'scrolled'
            const isScrolled = window.scrollY > 50; 
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        // Añadir el event listener al montar el componente
        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener al desmontar el componente (buena práctica)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    // Función para determinar la clase activa de NavLink
    const getNavLinkClass = ({ isActive }) => 
        `nav-item ${isActive ? "active-link" : ""}`;

    return (
        // Aplicamos la clase 'scrolled' condicionalmente
        <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo o Nombre de la Marca */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Puro Momentum Logo" className="logo" /> 
                </Link>

                {/* Enlaces de Navegación */}
                <div className="navbar-links">
                    <NavLink to="/" className={getNavLinkClass}>Inicio</NavLink>
                    <NavLink to="/sobre-nosotros" className={getNavLinkClass}>Sobre nosotros</NavLink>
                    <NavLink to="/servicios" className={getNavLinkClass}>Servicios</NavLink>
                    <NavLink to="/proyectos" className={getNavLinkClass}>Proyectos</NavLink>
                </div>

                {/* Botón de Contacto */}
                <Link to="/contacto" className="nav-button-link">
                    <button className="nav-button">Contacto</button>
                </Link>
            </div>
        </nav>
    );
};