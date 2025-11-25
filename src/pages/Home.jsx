import React, { useState, useEffect } from "react";
import "../Styles/home.css"; 
// Asegúrate de que las rutas a tus assets sean correctas
import moveMp4 from "../assets/img/move.mp4"; 
import placeholderImage from "../assets/img/move2.jpg"; 

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 
    
    // Datos de los slides del carrusel
    const slides = [
        {
            id: 0,
            layout: 'centered', 
            title: "We are", // Primera línea
            highlight: "Puro Momentum", // Segunda línea (Resaltada)
            subtitle: "Producción audiovisual estratégica para marcas con propósito",
            buttonText: "Nuestro Trabajo",
            // Elemento de video de fondo
            media: (
                <video className="background-video" autoPlay loop muted playsInline>
                    <source src={moveMp4} type="video/mp4" />
                </video>
            ),
            overlayColor: "rgba(0, 0, 0, 0.4)", // Overlay oscuro para Slide 1
            colorTheme: "dark" // Tema oscuro
        },
        {
            id: 1,
            layout: 'split',
            title: "TU MARCA NECESITA MÁS QUE UNA AGENCIA.",
            highlight: "AGENCIA.",
            subtitle: "Necesita una idea poderosa. Y quien la ejecute. Creamos estrategias completas que fusionan contenido, paid media y producción audiovisual para resultados con impacto.",
            buttonText: "Quiero hablar con ustedes",
            // Elemento de imagen para el Slide 2
            media: () => (
                <div 
                    className="split-media-container-img" 
                    style={{backgroundImage: `url(${placeholderImage})`}}
                ></div>
            ),
            overlayColor: "transparent", // Overlay transparente para Slide 2
            colorTheme: "light" // Usamos 'light' para distinguirlo, pero el CSS lo hará negro con texto blanco.
        }
    ];

    const totalSlides = slides.length;
    const currentSlideData = slides[currentSlide]; 

    // Lógica del carrusel automático
    useEffect(() => {
        const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
        const intervalId = setInterval(nextSlide, 12000); // 12 segundos
        return () => clearInterval(intervalId);
    }, [totalSlides]);

    const goToSlide = (index) => setCurrentSlide(index);

    // Función para renderizar el contenido principal basado en el layout
    const renderContent = (data) => {
        if (data.layout === 'centered') {
            // Diseño para SLIDE 1: Centrado, con título de dos líneas
            return (
                <div className={`hero-content centered-content theme-${data.colorTheme}`}> 
                    <h1 className="hero-title multi-line">
                        {/* Se ajusta para el salto de línea */}
                        <span className="text-block-1">{data.title}</span> 
                        <span className="highlight text-block-2">{data.highlight}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {data.subtitle}
                    </p>
                    <button className="hero-button">{data.buttonText}</button>
                </div>
            );
        } else if (data.layout === 'split') {
            // Diseño para SLIDE 2: Split
            return (
                <div className={`hero-content split-content theme-${data.colorTheme}`}>
                    {/* Contenedor de Texto a la Izquierda */}
                    <div className="split-text-container">
                        <h2 className="slide-2-title">
                            <span className="text-block-1">TU MARCA NECESITA MÁS QUE UNA</span> <span className="highlight">AGENCIA.</span>
                        </h2>
                        <p className="slide-2-subtitle">
                            {data.subtitle}
                        </p>
                        <button className="hero-button slide-2-button">{data.buttonText}</button>
                    </div>

                    {/* Contenedor de Imagen a la Derecha */}
                    <div className="split-media-container">
                         {data.media()}
                    </div>
                </div>
            );
        }
        return null; 
    };

    return (
        <>
            {/* CONTENEDOR PRINCIPAL (VENTANA/VIEWPORT) */}
            <section className="hero-slider-window">
                
                {/* 1. ELEMENTOS FIJOS (Se mantienen sobre el track del carrusel) */}
                <div className={`fixed-controls theme-${currentSlideData.colorTheme}`}>
                    {/* Redes Sociales */}
                    <div className="social-links">
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                            <span className="social-dot"></span>youtube
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                            <span className="social-dot"></span>linkedin
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            <span className="social-dot"></span>instagram
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                            <span className="social-dot"></span>facebook
                        </a>
                    </div>
                    
                    {/* Indicadores */}
                    <div className="slider-indicators">
                        {slides.map((_, index) => (
                            <span 
                                key={index} 
                                className={`indicator ${currentSlide === index ? "active-indicator" : ""}`}
                                onClick={() => goToSlide(index)}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 2. CINTA DE SLIDES (SLIDER-TRACK) */}
                <div 
                    className="slider-track" 
                    // Esta es la clave para el scroll horizontal
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`slide-item theme-${slide.colorTheme}`}>
                            
                            {/* MEDIA DE FONDO (Video/Overlay) */}
                            {/* Solo renderizamos el video/overlay en el slide 'centered' (Slide 1) */}
                            {slide.layout === 'centered' && (
                                <div className="media-wrapper">
                                    {slide.media}
                                    <div className="video-overlay" style={{ background: slide.overlayColor }}></div>
                                </div>
                            )}
                            
                            {/* Contenido (Texto, botones, y la imagen del split en Slide 2) */}
                            <div className="slide-content-wrapper">
                                {renderContent(slide)}
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            
            {/* SECCIÓN "WE ARE MOMENTUM" (Debajo del carrusel) */}
            <section className="about-section">
                {/* Contenedor que limita el ancho y aplica el diseño split */}
                <div className="about-content-wrapper">
                    
                    {/* Contenedor de la Imagen (Izquierda) */}
                    <div className="about-image-container">
                        <div className="about-image-placeholder" 
                            style={{ 
                                // URL de la imagen de filmación
                                backgroundImage: `url('https://i.pinimg.com/1200x/fe/14/26/fe1426567ad0b1c20b6fb440e64aff55.jpg')` 
                            }}
                        ></div>
                    </div>
                    
                    {/* Contenedor del Texto (Derecha) */}
                    <div className="about-content">
                        {/* Título: "Nuestra Estrategia" */}
                        <h2 className="about-title">Sobre <span className="highlight">Nosotros</span></h2>
                        <p className="about-text">
                            Hacer más ruido nunca fue una <span className="circled-keyword">estrategia</span>. Las marcas compiten por atención en un mundo saturado de estímulos. Si tu comunicación no logra diferenciarte, no es por falta de esfuerzo es por falta de <span className="underlined-keyword">dirección</span>.
                            <br/><br/>
                            En <strong className="uppercase-text">PURO MOMENTUM</strong> fusionamos intención, estética y método para transformar tu contenido en una <span className="underlined-keyword">herramienta</span> real de conexión, reputación y resultados.
                        </p>
                        <button className="about-button">Conoce nuestra historia</button>
                    </div>
                </div>
            </section>
        </>
    );
};