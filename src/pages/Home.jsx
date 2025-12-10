import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser'; 
import { NavLink, Link } from 'react-router-dom'; 
import { HashLink } from "react-router-hash-link";
import "../Styles/home.css"; 
import placeholderImage from "../assets/img/move2.jpg"; 

// --- Configuración de la Nueva Sección ---
// ... (Tus datos: serviceCards, contentGallery, processSteps, brandLogos) ...
const moveMp4 =
  "https://res.cloudinary.com/deafueoco/video/upload/v1764344910/move_emwbsk.mp4";


import icono1 from "../assets/img/icon1.png";
import icono2 from "../assets/img/icon2.png";
import icono3 from "../assets/img/icon3.png";

const serviceCards = [
    {
        id: 1,
        title: "Estrategia",
        subtitle: "Diseñamos desde el propósito",
        icon: icono1, 
        colorClass: "card-strategy" 
    },
    {
        id: 2,
        title: "Dirección Cinematográfica",
        subtitle: "Narramos con intención, estética y ritmo",
        icon: icono2, 
        colorClass: "card-cinematography" 
    },
    {
        id: 3,
        title: "Eficiencia Operativa",
        subtitle: "Ejecutamos con precisión y agilidad",
        icon: icono3, 
        colorClass: "card-efficiency" 
    },
];

const placeholderImageUrlGallery = "https://i.pinimg.com/736x/53/62/52/53625269a64907fdd9d347566eec2d8e.jpg";
const placeholderImageUrlGallery1 = "https://i.pinimg.com/736x/f5/a3/1c/f5a31c35faa27de13b2dac1a5b7f12cc.jpg";
const placeholderImageUrlGallery2 = "https://i.pinimg.com/736x/74/0f/d3/740fd33dffa7a5a58b2019f4990c50d3.jpg";
const placeholderImageUrlGallery3 = "https://i.pinimg.com/736x/5b/38/19/5b38194b7db04f13ab4bfa2187793768.jpg";
const placeholderImageUrlGallery4 = "https://i.pinimg.com/736x/7d/1b/7a/7d1b7ae4d30bcae7873490a5b6a0d1d8.jpg";
const placeholderImageUrlGallery5 = "https://i.pinimg.com/736x/e8/bf/70/e8bf70868ed3748872c47a29ef325961.jpg";
const placeholderImageUrlGallery6 = "https://i.pinimg.com/736x/8a/0f/a7/8a0fa7740624334cfa734d330235a1cc.jpg";
const placeholderImageUrlGallery7 = "https://i.pinimg.com/736x/80/58/c9/8058c9404a46ab128c5fead5ebd4934c.jpg";
const contentGallery = [
    { id: 1, imageUrl: placeholderImageUrlGallery, title: "VSL Inversionista Master Institucional" },
    { id: 2, imageUrl: placeholderImageUrlGallery1, title: "Future Finance Fest Institucional" },
    { id: 3, imageUrl: placeholderImageUrlGallery2, title: "Maiguai Live Sesion" },
    { id: 4, imageUrl: placeholderImageUrlGallery3, title: "Health at Home Curso dígital" },
    { id: 5, imageUrl: placeholderImageUrlGallery4, title: "Clausura Crear 2025 Institucional" },
    { id: 6, imageUrl: placeholderImageUrlGallery5, title: "Campaña Just Be Present Publicitario" },
    { id: 7, imageUrl: placeholderImageUrlGallery6, title: "Campaña KFC Publicitario" },
    { id: 8, imageUrl: placeholderImageUrlGallery7, title: "Campaña Ilé Danza Publicitario" },
];

const processSteps = [
    {
        id: 1,
        title: "Intención",
        description: "Toda historia parte de una búsqueda. Escuchamos, observamos y entendemos para encontrar el propósito detrás de cada proyecto.",
        class: "intencion",
        bgUrl: "https://i.pinimg.com/736x/a9/58/0d/a9580d2aa9e10043cfa4803d4fadb2cf.jpg" 
    },
    {
        id: 2,
        title: "Narración",
        description: "Traducimos la estrategia en lenguaje audiovisual. Cada encuadre y ritmo reflejan la emoción que queremos transmitir.",
        class: "narracion",
        bgUrl: "https://i.pinimg.com/736x/ff/af/38/ffaf38f27e90b02724640e78a24dcb17.jpg"
    },
    {
        id: 3,
        title: "Ejecución",
        description: "Planteamos, rodamos y finalizamos con precisión, fusionando energía creativa y control operativo.",
        class: "ejecucion",
        bgUrl: "https://i.pinimg.com/736x/42/cd/b4/42cdb40927b0422415e7608ea04d7715.jpg"
    },
    {
        id: 4,
        title: "Optimización",
        description: "Medimos el impacto y ajustamos con intención. Lo que funciona se escala; lo que no, se reajusta. La historia sigue en movimiento.",
        class: "optimizacion",
        bgUrl: "https://i.pinimg.com/736x/6f/90/72/6f9072138e027529410a1dde342a7b88.jpg"
    },
];

const brandLogos = [
    { src: "https://pngimg.com/d/kfc_PNG53.png", alt: "KFC" },
    { src: "https://i.pinimg.com/736x/7f/85/84/7f8584e8d754284d224fe4cfb01ea8ae.jpg", alt: "24IMAGINATION" },
    { src: "https://i.pinimg.com/1200x/57/1c/af/571cafa3bbc8ea80de7e682003f73a62.jpg", alt: "Netflix" },
    { src: "https://i.pinimg.com/1200x/98/7a/a7/987aa72612f9cd62a6e66c3c636506d1.jpg", alt: "INVERSIONISTA MASTER" },
    { src: "https://i.pinimg.com/1200x/91/f6/da/91f6da62bbb94722d55cacd38d97a685.jpg", alt: "fITNESS AT HOME" },
    { src: "https://images.vexels.com/media/users/3/135777/isolated/preview/46361234eb75aa123c6d787bcdc0059a-logotipo-de-la-academia-de-danza.png", alt: "Danza" },
];


// --- COMPONENTE DE NOTIFICACIÓN TOAST ---
// Lo definimos fuera para que no se re-renderice innecesariamente
const ToastNotification = ({ message, type, isVisible, onClose }) => {
    if (!isVisible) return null;

    const toastClass = type === 'success' ? 'toast-success' : 'toast-error';
    const icon = type === 'success' ? '🚀' : '❌';

    return (
        <div className={`toast-notification ${toastClass}`}>
            <span className="toast-icon">{icon}</span>
            <div className="toast-content">
                <p className="toast-title">{type === 'success' ? '¡Mensaje Enviado!' : 'Error de Envío'}</p>
                <p className="toast-message">{message}</p>
            </div>
            <button className="toast-close-btn" onClick={onClose}>&times;</button>
        </div>
    );
};


export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 
    const showreelRef = useRef(null);
    const [isShowreelVisible, setIsShowreelVisible] = useState(false);
    const [currentProcessStep, setCurrentProcessStep] = useState(0);
    const totalProcessSteps = processSteps.length;
    const [currentBrandSlide, setCurrentBrandSlide] = useState(0);
    const brandsPerView = 3; 
    const totalBrandSlides = brandLogos.length;

    // 🚨 NUEVO ESTADO PARA EL TOAST
    const [toast, setToast] = useState({ 
        isVisible: false, 
        message: '', 
        type: 'success' 
    }); 

    const SERVICE_ID = 'service_2pgj1rq'; 
    const TEMPLATE_ID = 'template_ooijiwq'; 
    const PUBLIC_KEY = '9giLiFzMDV12tz2_m'; 

    // Función para mostrar el Toast
    const showToast = (message, type = 'success') => {
        setToast({ isVisible: true, message, type });
        // Ocultar automáticamente después de 5 segundos
        setTimeout(() => {
            setToast(prev => ({ ...prev, isVisible: false }));
        }, 5000);
    };

    // 3. FUNCIÓN QUE MANEJA EL ENVÍO DEL FORMULARIO (MODIFICADA)
    const sendEmail = (e) => {
        e.preventDefault(); 
        
        // Desactivar el botón o mostrar un loader aquí (opcional)

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                // 🚨 Reemplazamos alert() por showToast()
                showToast('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto. 🚀', 'success'); 
                e.target.reset(); 
            }, (error) => {
                console.error('EmailJS Error:', error.text);
                // 🚨 Reemplazamos alert() por showToast()
                showToast(`Ocurrió un error: ${error.text}`, 'error'); 
            });
    };
    
    // ... (El resto de tus useEffects y lógica de carruseles) ...
    
    // 4. Inicializa EmailJS al cargar el componente (Mejor práctica)
    useEffect(() => {
        if (PUBLIC_KEY) {
            emailjs.init(PUBLIC_KEY);
        }
    }, []);

    // Autoplay para el carrusel de proceso (Ejemplo: 8 segundos)
    useEffect(() => {
        const nextStep = () => setCurrentProcessStep(prev => (prev + 1) % totalProcessSteps);
        const intervalId = setInterval(nextStep, 8000); 
        return () => clearInterval(intervalId); 
    }, [totalProcessSteps]);
    
    // Función para cambiar de paso
    const goToProcessStep = (index) => setCurrentProcessStep(index);
    
    // Lógica para el carrusel de marcas (Autoplay)
    useEffect(() => {
        const autoScrollBrands = () => {
            // Aseguramos que el índice no sea mayor al número de slides totales
            setCurrentBrandSlide(prev => (prev + 1) % totalBrandSlides);
        };
        const interval = setInterval(autoScrollBrands, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, [totalBrandSlides]);

    const goToBrandSlide = (index) => {
        setCurrentBrandSlide(index);
    };

    // LÓGICA DE INTERSECTION OBSERVER (Existente)
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === showreelRef.current) {
                    setIsShowreelVisible(entry.isIntersecting);
                    
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-animated');
                    } else {
                        entry.target.classList.remove('is-animated');
                    }
                }
            });
        }, observerOptions);

        if (showreelRef.current) {
            observer.observe(showreelRef.current);
        }

        return () => {
            if (showreelRef.current) {
                observer.unobserve(showreelRef.current);
            }
        };
    }, []); 

    // Lógica para el VIDEO DE VIMEO: Autoplay y Muted
    const baseVimeoSrc = "https://player.vimeo.com/video/1136737275?h=b1a2082218&loop=0&byline=0&portrait=0&title=0";
    
    // Construye el SRC: añade autoplay y muted cuando es visible
    const vimeoSrc = isShowreelVisible 
        ? `${baseVimeoSrc}&autoplay=0&muted=0` 
        : baseVimeoSrc; 


    // Datos de los slides del carrusel
    const slides = [
        {
            id: 0,
            layout: 'centered', 
            title: "We are", 
            highlight: "Puro Momentum", 
            subtitle: "Producción audiovisual estratégica para marcas con propósito",
            buttonText: "Cómo Trabajamos", 
            media: (
                <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={moveMp4} type="video/mp4" />
                    
                </video>
            ),
            overlayColor: "rgba(0, 0, 0, 0.4)", 
            colorTheme: "dark" 
        },
        {
            id: 1,
            layout: 'split',
            title: "TU MARCA NECESITA MÁS QUE UNA AGENCIA.",
            highlight: "AGENCIA.",
            subtitle: "Necesita una visión clara. Y un equipo que la haga realidad. Fusionamos estrategia, narrativa y producción para crear contenido que conecta y genera resultados.",
            buttonText: "Conversemos", 
            media: () => (
                <div 
                    className="split-media-container-img" 
                    style={{backgroundImage: `url(${placeholderImage})`}}
                ></div>
            ),
            overlayColor: "transparent", 
            colorTheme: "light" 
        }
    ];

    const totalSlides = slides.length;
    const currentSlideData = slides[currentSlide]; 

    // Lógica del carrusel automático (Hero Slider)
    useEffect(() => {
        const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
        const intervalId = setInterval(nextSlide, 12000); 
        return () => clearInterval(intervalId);
    }, [totalSlides]);

    const goToSlide = (index) => setCurrentSlide(index);

    // Función para renderizar el contenido principal basado en el layout
    const renderContent = (data) => {
        if (data.layout === 'centered') {
            return (
                <div className={`hero-content centered-content theme-${data.colorTheme}`}> 
                    <h1 className="hero-title multi-line">
                        <span className="text-block-1">{data.title}</span> 
                        <span className="highlight text-block-2">{data.highlight}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {data.subtitle}
                    </p>
                    <Link to="/servicios" className="hero-button">
                        {data.buttonText}
                    </Link>
                </div>
            );
        } else if (data.layout === 'split') {
            return (
                <div className={`hero-content split-content theme-${data.colorTheme}`}>
                    <div className="split-text-container">
                        <h2 className="slide-2-title">
                            <span className="text-block-1">TU MARCA NECESITA MÁS QUE UNA</span> <span className="highlight">AGENCIA.</span>
                        </h2>
                        <p className="slide-2-subtitle">
                            {data.subtitle}
                        </p>
                        <HashLink 
                            to="/#contacto" 
                            className="hero-button slide-2-button"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} 
                        >
                            {data.buttonText}
                        </HashLink>
                    </div>

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
            {/* Contenedor de la Notificación Toast (Flotante) */}
            <ToastNotification 
                isVisible={toast.isVisible} 
                message={toast.message} 
                type={toast.type} 
                onClose={() => setToast(prev => ({ ...prev, isVisible: false }))} 
            />

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
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`slide-item theme-${slide.colorTheme}`}>
                            
                            {/* MEDIA DE FONDO (Video/Overlay) */}
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
            <section className="about-section" id="sobre-nosotros">
                <div className="about-content-wrapper">
                    
                    {/* Contenedor de la Imagen (Izquierda) */}
                    <div className="about-image-container">
                        <div className="about-image-placeholder" 
                            style={{ 
                                backgroundImage: `url('https://i.pinimg.com/736x/ba/f5/93/baf5930e8529f4cef9716ffe17cb8409.jpg')` 
                            }}
                        ></div>
                    </div>
                    
                    {/* Contenedor del Texto (Derecha) */}
                    <div className="about-content">
                        <h2 className="about-title">Sobre <span className="highlight">Nosotros</span></h2>
                        <p className="about-text">
                            Hacer más ruido nunca fue una <span className="circled-keyword">estrategia</span>. Las marcas compiten por atención en un mundo saturado de estímulos. Si tu comunicación no logra diferenciarte, no es por falta de esfuerzo es por falta de <span className="underlined-keyword">dirección</span>.
                            <br/><br/>
                            En <strong className="uppercase-text">PURO MOMENTUM</strong> fusionamos intención, estética y método para transformar tu contenido en una <span className="underlined-keyword">herramienta</span> real de conexión, reputación y resultados.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* --- SECCIÓN DE SERVICIOS --- */}
            <section className="momentum-services-section">
                <div className="momentum-services-wrapper">
                    <div className="services-header">
                        <h2 className="header-title">
                            Cada proyecto comienza con una sesión de diagnóstico personalizada.
                        </h2>
                    </div>

                    <div className="services-intro-block">
                        <p className="intro-subtitle">Cada proyecto nace de una mirada estratégica que nos permite diseñar piezas alineadas con los objetivos, la identidad y la visión de cada cliente.</p>

                        <p className="intro-text">
                            Porque cuando una marca comunica con claridad, crece con intención. Crece con: <strong className="highlight">PURO MOMENTUM</strong>.
                            <br /><br />
                            Antes de producir, "<span className="intro-process-step">escuchamos</span>, <span className="intro-process-step">comprendemos</span> y <span className="intro-process-step">analizamos</span>."
                        </p>
                    </div>

                    {/* Contenedor de las Tarjetas de Servicio */}
                    <div className="services-cards-grid">
                        {serviceCards.map((card) => (
                            <div key={card.id} className={`service-card-item ${card.colorClass}`}>
                                <div className="card-icon-container">
                                    {/* 🔑 CLAVE: Usar <img> para renderizar la URL */}
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="card-icon-img" // Usaremos esta clase para el CSS
                                    />
                                </div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-subtitle">{card.subtitle}</p>
                                <p className="card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- SECCIÓN: SHOWREEL --- */}
            <section className="showreel-section" ref={showreelRef}> 
                <div className="showreel-title-wrapper">
                    <h2 className="showreel-title">
                        Donde la <span className="highlight">estrategia</span> se convierte en <strong className="uppercase-text">acción</strong>
                    </h2>
                </div>
                <div className="showreel-content-wrapper">

                    <div className="showreel-content">
                        <p className="showreel-text">
                            Cada historia tiene un pulso. En <strong className="uppercase-text">PURO MOMENTUM</strong> lo capturamos y lo convertimos en imagen.
                            <br /><br />
                            No buscamos solo mostrar, sino "mover".
                            <br />
                            Eso es crear con <span className="underlined-keyword">intención</span>.
                        </p>
                        
                        <Link to="/servicios" className="showreel-button">
                            Ver cómo trabajamos
                        </Link>
                    </div>

                    <div className="showreel-video-container">
                        <iframe
                            key={vimeoSrc} 
                            src={vimeoSrc}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="vimeo-embed-player"
                            title="Showreel Puro Momentum"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN: GALERÍA DE CONTENIDO CON INTENCIÓN --- */}
            <section className="content-gallery-section">
                <div className="content-gallery-wrapper">
                    <div className="content-header">
                        <h2 className="header-title">
                            Contenido con <span className="highlight">Intención</span>
                        </h2>
                    </div>

                    <div className="content-intro-block">
                        <p className="intro-text">
                            Creemos en el poder de las imágenes para <span className="intro-process-step">PROVOCAR EMOCIONES</span> y en la <span className="intro-process-step">ESTRATEGIA</span> como el camino para conectar con las personas correctas.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        {contentGallery.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                style={{ backgroundImage: `url(${item.imageUrl})` }}
                            >
                                <div className="gallery-overlay">
                                    <span className="gallery-title">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- SECCIÓN: PROCESO (LISTA ESTÁTICA) --- */}
            <section className="process-static-section">
                <div className="process-header">
                    <h2 className="header-title">
                        Nuestro sistema de <span className="highlight">4 fases</span>
                    </h2>
                </div>

                <div className="process-list-container">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`process-item-card ${step.class}`}
                        >
                            {/* Lado izquierdo: Texto */}
                            <div className="card-text-content">
                                <span className="step-number-small">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="card-title">{step.title}</h3>
                                <p className="card-description">{step.description}</p>
                            </div>

                            {/* Lado derecho: Imagen de Fondo */}
                            <div className="card-image-background" style={{ backgroundImage: `url(${step.bgUrl})` }}>
                                {/* Opcional: Overlay sutil para el efecto */}
                                <div className="background-overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/*
    --- SECCIÓN: CARRUSEL DE MARCAS ---
    <section className="brand-carousel-section">
        <div className="brand-carousel-wrapper">
            <h2 className="brand-section-title">Nuestras <span className="highlight">alianzas</span></h2>
            <div className="brand-slider-container">
                <div
                    className="brand-slider-track"
                    style={{ transform: `translateX(-${currentBrandSlide * (100 / brandsPerView)}%)` }}
                >
                    {brandLogos.concat(brandLogos).map((brand, index) => ( 
                        <div key={index} className="brand-slide-item">
                            <img src={brand.src} alt={brand.alt} className="brand-logo" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="brand-navigation-dots">
                {Array.from({ length: totalBrandSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`brand-dot ${currentBrandSlide === index ? 'active' : ''}`}
                        onClick={() => goToBrandSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    </section>
*/}
            
            {/* --- SECCIÓN: FORMULARIO DE CONTACTO (CORREGIDA) --- */}
            <section className="contact-section" id="contacto">
                <div className="contact-content-wrapper">

                    <div className="contact-form-container">
                        <h2 className="contact-title">
                            ¿Listo para crear con <span className="highlight">propósito</span>?
                        </h2>
                        <p className="contact-subtitle">
                            Hablemos sobre tu visión.
                        </p>

                        {/* FORMULARIO */}
                        <form 
                            id="contact-form" 
                            className="contact-form"
                            onSubmit={sendEmail} 
                        >

                            {/* Campo Nombre y Apellido */}
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre y apellido</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre" 
                                    placeholder="Escribe tu nombre completo"
                                    required
                                />
                            </div>

                            {/* Campo Correo Electrónico */}
                            <div className="form-group">
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email" 
                                    placeholder="tucorreo@empresa.com"
                                    required
                                />
                            </div>

                            {/* Campo ¿Cuál es tu necesidad? (Área de texto) */}
                            <div className="form-group">
                                <label htmlFor="necesidad">Deja tu mensaje</label>
                                <textarea
                                    id="necesidad"
                                    name="necesidad" 
                                    rows="4"
                                    placeholder="Describe cómo podemos ayudarte"
                                    required
                                ></textarea>
                            </div>

                            {/* Checkbox de Términos y Condiciones */}
                            <div className="form-group terms-checkbox">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">
                                    Acepta términos y condiciones
                                    <span className="terms-text">
                                        Al hacer clic confirmas que aceptas nuestras Condiciones de uso y Política de Tratamiento de datos
                                    </span>
                                </label>
                            </div>

                            {/* Botón de Enviar */}
                            <button type="submit" className="submit-button">
                                Estoy listo para crear con propósito
                            </button>
                        </form>
                    </div>

                    {/* COLUMNA 2: Imagen (Derecha) */}
                    <div className="contact-image-container"
                        style={{
                            backgroundImage: `url(${placeholderImage})`
                        }}
                    >
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </section> 
        </>
    );
};