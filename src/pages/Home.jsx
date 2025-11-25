import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
// Asegúrate de que los estilos para la nueva sección se agreguen en home.css
import "../Styles/home.css"; 
// Asegúrate de que las rutas a tus assets sean correctas
import moveMp4 from "../assets/img/move.mp4"; 
import placeholderImage from "../assets/img/move2.jpg"; 

// --- Configuración de la Nueva Sección ---
const serviceCards = [
    {
        id: 1,
        title: "Estrategia",
        subtitle: "Diseñamos desde el propósito",
        icon: "🎯", // Icono de destino/objetivo
        colorClass: "card-strategy" // Clase para el color (similar al amarillo de la Imagen 1)
    },
    {
        id: 2,
        title: "Dirección Cinematográfica",
        subtitle: "Narramos con intención, estética y ritmo",
        icon: "🎬", // Icono de claqueta/cine
        colorClass: "card-cinematography" // Clase para el color (similar al rojo de la Imagen 1)
    },
    {
        id: 3,
        title: "Eficiencia Operativa",
        subtitle: "Ejecutamos con precisión y agilidad",
        icon: "⚙️", // Icono de engranaje/eficiencia
        colorClass: "card-efficiency" // Clase para el color (similar al blanco/gris claro)
    },
];

// --- DATOS DE LA NUEVA SECCIÓN: GALERÍA DE CONTENIDO ---
const placeholderImageUrlGallery = "https://i.pinimg.com/736x/fd/26/c2/fd26c23a82e4cd9eb0456242e69adb7f.jpg";
const placeholderImageUrlGallery1 = "https://i.pinimg.com/736x/f5/a3/1c/f5a31c35faa27de13b2dac1a5b7f12cc.jpg";
const placeholderImageUrlGallery2 = "https://i.pinimg.com/736x/74/0f/d3/740fd33dffa7a5a58b2019f4990c50d3.jpg";
const placeholderImageUrlGallery3 = "https://i.pinimg.com/736x/5b/38/19/5b38194b7db04f13ab4bfa2187793768.jpg";
const placeholderImageUrlGallery4 = "https://i.pinimg.com/736x/7d/1b/7a/7d1b7ae4d30bcae7873490a5b6a0d1d8.jpg";
const placeholderImageUrlGallery5 = "https://i.pinimg.com/736x/e8/bf/70/e8bf70868ed3748872c47a29ef325961.jpg";
const placeholderImageUrlGallery6 = "https://i.pinimg.com/736x/8a/0f/a7/8a0fa7740624334cfa734d330235a1cc.jpg";
const placeholderImageUrlGallery7 = "https://i.pinimg.com/736x/80/58/c9/8058c9404a46ab128c5fead5ebd4934c.jpg";
const contentGallery = [
    { id: 1, imageUrl: placeholderImageUrlGallery, title: "Proyecto A" },
    { id: 2, imageUrl: placeholderImageUrlGallery1, title: "Proyecto B" },
    { id: 3, imageUrl: placeholderImageUrlGallery2, title: "Proyecto C" },
    { id: 4, imageUrl: placeholderImageUrlGallery3, title: "Proyecto D" },
    { id: 5, imageUrl: placeholderImageUrlGallery4, title: "Proyecto E" },
    { id: 6, imageUrl: placeholderImageUrlGallery5, title: "Proyecto F" },
    { id: 7, imageUrl: placeholderImageUrlGallery6, title: "Proyecto G" },
    { id: 8, imageUrl: placeholderImageUrlGallery7, title: "Proyecto H" },
];

const processSteps = [
    {
        id: 1,
        title: "Intención",
        description: "Toda historia parte de una búsqueda. Escuchamos, observamos y entendemos para encontrar el propósito detrás de cada proyecto.",
        class: "intencion",
        bgUrl: "https://images.pexels.com/photos/2007137/pexels-photo-2007137.jpeg" 
    },
    {
        id: 2,
        title: "Narración",
        description: "Traducimos la estrategia en lenguaje audiovisual. Cada encuadre y ritmo reflejan la emoción que queremos transmitir.",
        class: "narracion",
        bgUrl: "https://images.pexels.com/photos/9291615/pexels-photo-9291615.jpeg"
    },
    {
        id: 3,
        title: "Ejecución",
        description: "Planteamos, rodamos y finalizamos con precisión, fusionando energía creativa y control operativo.",
        class: "ejecucion",
        bgUrl: "https://images.pexels.com/photos/9049054/pexels-photo-9049054.jpeg"
    },
    {
        id: 4,
        title: "Optimización",
        description: "Medimos el impacto y ajustamos con intención. Lo que funciona se escala; lo que no, se reajusta. La historia sigue en movimiento.",
        class: "optimizacion",
        bgUrl: "https://images.pexels.com/photos/4752708/pexels-photo-4752708.jpeg"
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

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 
    
    // 1. REFERENCIAS para las secciones que queremos observar
    const showreelRef = useRef(null);
    const [isShowreelVisible, setIsShowreelVisible] = useState(false);

    // 3. LÓGICA PARA EL CARRUSEL DE PROCESO (NUEVA)
    const [currentProcessStep, setCurrentProcessStep] = useState(0);
    const totalProcessSteps = processSteps.length;
    
    // CORRECCIÓN/ADICIÓN: LÓGICA PARA EL CARRUSEL DE MARCAS
    const [currentBrandSlide, setCurrentBrandSlide] = useState(0);
    const brandsPerView = 3; // Cuántas marcas visibles a la vez
    const totalBrandSlides = brandLogos.length;
    
    // Autoplay para el carrusel de proceso (Ejemplo: 8 segundos)
    useEffect(() => {
        const nextStep = () => setCurrentProcessStep(prev => (prev + 1) % totalProcessSteps);
        const intervalId = setInterval(nextStep, 8000); 
        return () => clearInterval(intervalId); // Limpieza al desmontar
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

    // 2. LÓGICA DE INTERSECTION OBSERVER (Existente)
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Disparar cuando al menos el 10% de la sección es visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === showreelRef.current) {
                    // Controla la visibilidad de la sección Showreel
                    setIsShowreelVisible(entry.isIntersecting);
                    
                    // Añade/quita la clase para disparar la animación CSS
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-animated');
                    } else {
                        // Importante: Quitar la clase permite que la animación se repita
                        entry.target.classList.remove('is-animated');
                    }
                }
            });
        }, observerOptions);

        // Observar la sección Showreel
        if (showreelRef.current) {
            observer.observe(showreelRef.current);
        }

        // Limpieza al desmontar el componente
        return () => {
            if (showreelRef.current) {
                observer.unobserve(showreelRef.current);
            }
        };
    }, []); // Se ejecuta una sola vez al montar el componente


    // Lógica para el VIDEO DE VIMEO: Autoplay y Muted
    const baseVimeoSrc = "https://player.vimeo.com/video/1136737275?h=b1a2082218&loop=0&byline=0&portrait=0&title=0";
    
    // Construye el SRC: añade autoplay y muted cuando es visible
    const vimeoSrc = isShowreelVisible 
        ? `${baseVimeoSrc}&autoplay=0&muted=0` // Autoplay y mute cuando es visible
        : baseVimeoSrc; // Estado base cuando no está visible (o saliendo)


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

    // Lógica del carrusel automático (Hero Slider)
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
                    </div>
                </div>
            </section>
            
            {/* --- INICIO DE LA NUEVA SECCIÓN DE SERVICIOS (COMO IMAGEN 1 Y 2) --- */}
            <section className="momentum-services-section">
                <div className="momentum-services-wrapper">
                    {/* Título y Subtítulos Principales (Ahora solo Título) */}
                    <div className="services-header">
                        {/* Nota: el h2 debe estar en una sola línea para que los estilos CSS funcionen correctamente */}
                        <h2 className="header-title">
                            Una alianza creativa que entiende tu marca
                        </h2>
                    </div>

                    {/* Bloque de Texto Introductorio y Proceso */}
                    {/* Este bloque ahora recibirá las clases CSS para centrar su contenido bajo el título */}
                    <div className="services-intro-block">
                        {/* Subtítulo alineado bajo "creativa" */}
                        <p className="intro-subtitle">Cada proyecto comienza con una sesión de diagnóstico personalizada</p>

                        <p className="intro-text">
                            En <strong className="highlight">PURO MOMENTUM</strong> integramos estrategia, dirección cinematográfica y eficiencia operativa para crear contenido que no solo se ve bien, sino que <strong className="highlight">FUNCIONA</strong>.
                            <br /><br />
                            Antes de producir, "<span className="intro-process-step">escuchamos</span>, <span className="intro-process-step">comprendemos</span> y <span className="intro-process-step">analizamos</span>."
                        </p>
                    </div>

                    {/* Contenedor de las Tarjetas de Servicio */}
                    <div className="services-cards-grid">
                        {serviceCards.map((card) => (
                            <div key={card.id} className={`service-card-item ${card.colorClass}`}>
                                <div className="card-icon-container">{card.icon}</div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-subtitle">{card.subtitle}</p>
                                {/* El texto largo se incluye aquí para seguir la estructura de la Imagen 2 */}
                                <p className="card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- FIN DE LA NUEVA SECCIÓN DE SERVICIOS --- */}
            
            {/* --- NUEVA SECCIÓN: SHOWREEL (Estrategia en acción) --- */}
            {/* Se añade la referencia (ref) para que el Intersection Observer pueda observarla */}
            <section className="showreel-section" ref={showreelRef}> 
                {/* 1. CONTENEDOR SÓLO PARA EL TÍTULO (Centrado) */}
                <div className="showreel-title-wrapper">
                    <h2 className="showreel-title">
                        Donde la <span className="highlight">estrategia</span> se convierte en <strong className="uppercase-text">acción</strong>
                    </h2>
                </div>

                {/* 2. CONTENEDOR PARA LAS DOS COLUMNAS (Subtítulo/Texto + Video) */}
                <div className="showreel-content-wrapper">

                    {/* COLUMNA 1: Contenedor del Texto (Izquierda) */}
                    <div className="showreel-content">
                        <p className="showreel-text">
                            Cada historia tiene un pulso. En <strong className="uppercase-text">PURO MOMENTUM</strong> lo capturamos y lo convertimos en imagen.
                            <br /><br />
                            No buscamos solo mostrar, sino "mover".
                            <br />
                            Eso es crear con <span className="underlined-keyword">intención</span>.
                        </p>

                        <button className="showreel-button">Ver cómo trabajamos</button>
                    </div>

                    {/* COLUMNA 2: Contenedor del Video (Derecha) */}
                    <div className="showreel-video-container">
                        {/* IFRAME de Vimeo. Se usa el vimeoSrc dinámico y se añade 'allow="autoplay"' */}
                        <iframe
                            key={vimeoSrc} // Clave dinámica para forzar la recarga del iframe al cambiar el SRC
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

            {/* --- INICIO DE LA NUEVA SECCIÓN: GALERÍA DE CONTENIDO CON INTENCIÓN --- */}
            <section className="content-gallery-section">
                <div className="content-gallery-wrapper">
                    {/* TÍTULO PRINCIPAL DE LA SECCIÓN */}
                    <div className="content-header">
                        <h2 className="header-title">
                            Contenido con <span className="highlight">Intención</span>
                        </h2>
                    </div>

                    {/* TEXTO INTRODUCTORIO (similar al diseño de 'Sobre Nosotros') */}
                    <div className="content-intro-block">
                        <p className="intro-text">
                            Creemos en el poder de las imágenes para <span className="intro-process-step">PROVOCAR EMOCIONES</span> y en la <span className="intro-process-step">ESTRATEGIA</span> como el camino para conectar con las personas correctas.
                        </p>
                    </div>

                    {/* CONTENEDOR DE LA GALERÍA DE IMÁGENES (Grid) */}
                    <div className="gallery-grid">
                        {contentGallery.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                // Estilo en línea para la URL de la imagen (debe ser reemplazada en un entorno real)
                                style={{ backgroundImage: `url(${item.imageUrl})` }}
                            >
                                {/* Overlay o título si es necesario, pero por ahora solo la imagen */}
                                <div className="gallery-overlay">
                                    <span className="gallery-title">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- INICIO DE LA NUEVA SECCIÓN: PROCESO (CARRUSEL) --- */}
            <section className="process-carousel-section">
                
                {/* 1. TÍTULO INTRODUCTORIO FIJO */}
                <div className="process-header">
                    <h2 className="header-title">
                        Proceso de <span className="highlight">4 pasos</span> para resultados
                    </h2>
                </div>

                {/* 2. CONTENEDOR PRINCIPAL DEL CARRUSEL */}
                <div className="process-slider-container">
                    
                    {/* INDICADORES DE PASO (Paginación) */}
                    <div className="process-indicators">
                        {processSteps.map((step, index) => (
                            <div 
                                key={step.id} 
                                className={`process-indicator-item ${currentProcessStep === index ? "active-step" : ""}`}
                                onClick={() => goToProcessStep(index)}
                            >
                                <span className="indicator-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="indicator-title">{step.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* CINTA DE PASOS (SLIDER-TRACK) */}
                    <div 
                        className="process-slider-track" 
                        // Mover el carrusel horizontalmente
                        style={{ transform: `translateX(-${currentProcessStep * 100}%)` }}
                    >
                        {processSteps.map((step, index) => (
                            <div 
                                key={step.id} 
                                className={`process-slide-item ${step.class}`}
                            >
                                {/* Fondo de Imagen con Overlay */}
                                <div className="slide-background" style={{ backgroundImage: `url(${step.bgUrl})` }}>
                                    <div className="background-overlay"></div>
                                </div>
                                
                                {/* Contenido del Paso */}
                                <div className="slide-content-text">
                                    <h3 className="slide-title">{step.title}</h3>
                                    <p className="slide-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* --- FIN DE LA NUEVA SECCIÓN: PROCESO --- */}
            
            {/* --- NUEVA SECCIÓN: CARRUSEL DE MARCAS --- */}
            <section className="brand-carousel-section">
                <div className="brand-carousel-wrapper">
                    <h2 className="brand-section-title">Nuestras <span className="highlight">alianzas</span></h2>
                    <div className="brand-slider-container">
                        <div
                            className="brand-slider-track"
                            // CORRECCIÓN: Usamos las variables de lógica del carrusel de marcas
                            style={{ transform: `translateX(-${currentBrandSlide * (100 / brandsPerView)}%)` }}
                        >
                            {/* CORRECCIÓN: Duplicamos para el efecto de carrusel infinito */}
                            {brandLogos.concat(brandLogos).map((brand, index) => ( 
                                <div key={index} className="brand-slide-item">
                                    <img src={brand.src} alt={brand.alt} className="brand-logo" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Controles de navegación manual (opcional, si los quieres) */}
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
            <section className="contact-section">
                {/* Contenedor Principal con Diseño Split */}
                <div className="contact-content-wrapper">

                    {/* COLUMNA 1: Formulario de Contacto (Izquierda) */}
                    <div className="contact-form-container">
                        <h2 className="contact-title">
                            ¿Listo para crear con <span className="highlight">propósito</span>?
                        </h2>
                        <p className="contact-subtitle">
                            Hablemos sobre tu visión.
                        </p>

                        {/* Formulario */}
                        <form className="contact-form">

                            {/* Campo Nombre y Apellido */}
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre y apellido</label>
                                <input
                                    type="text"
                                    id="nombre"
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
                                    placeholder="tucorreo@empresa.com"
                                    required
                                />
                            </div>

                            {/* Campo ¿Cuál es tu necesidad? (Área de texto) */}
                            <div className="form-group">
                                <label htmlFor="necesidad">¿Cuál es tu necesidad?</label>
                                <textarea
                                    id="necesidad"
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

                    {/* COLUMNA 2: Imagen (Derecha) - Usa el mismo diseño que el formulario de la imagen que adjuntaste */}
                    <div className="contact-image-container"
                        style={{
                            // Usamos la imagen base que ya tienes importada (move2.jpg)
                            backgroundImage: `url(${placeholderImage})`
                        }}
                    >
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </section>  
        </>
    );a
};