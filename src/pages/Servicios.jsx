import React from "react";
// 🚨 Importamos Link y HashLink para la navegación
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Importamos los estilos y el video para mantener la coherencia
import "../Styles/servicios.css"; 
import WhatsAppButton from '../components/WhatsAppButton';

// --- DATOS DE LA SECCIÓN 2: SISTEMA DE PROPÓSITO AL IMPACTO (Imagen 3) ---
const moveMp4 =
  "https://res.cloudinary.com/deafueoco/video/upload/v1776712702/1722881-uhd_3840_2160_25fps_sq1ra5.mp4";
const systemSteps = [
    {
        id: 1,
        title: "Planeación & Dirección Estratégica",
        description: "Toda pieza poderosa empieza con claridad. Analizamos el contexto, ordenamos ideas y trazamos una ruta para que cada decisión creativa responda a un objetivo real. La planeación es lo que convierte intuición en dirección.",
        class: "strategy-purpose",
    },
    {
        id: 2,
        title: "Producción & Ejecución Creativa",
        description: "Llevamos la visión a tierra con precisión. Producimos cada pieza integrando intención, lenguaje audiovisual y control operativo, cuidando que la ejecución tenga la fuerza visual y la coherencia que la marca necesita.",
        class: "narrative-direction",
    },
    {
        id: 3,
        title: "Difusión & Distribución de Contenido",
        description: "Crear es solo una parte del recorrido. Pensamos cómo, dónde y cuándo se mueve cada pieza para que el contenido no solo exista, sino que circule con sentido, alcance a la audiencia correcta y amplifique su impacto.",
        class: "production-execution",
    },
    {
        id: 4,
        title: "Optimización & Evolución de Contenido",
        description: "Ningún contenido termina al publicarse. Observamos el desempeño, identificamos aprendizajes y ajustamos el sistema para que cada publicación siguiente sea más precisa, más coherente y más efectiva en el tiempo.",
        class: "optimization-evolution",
    },
];

import icono21 from "../assets/img/icon21.png";
import icono22 from "../assets/img/icon22.png";
import icono23 from "../assets/img/icon23.png";
import fondo1 from "../assets/img/fondo1.png";
import fondo2 from "../assets/img/fondo2.png";
import fondo3 from "../assets/img/fondo3.png";


// --- DATOS DE LA SECCIÓN 3: NIVELES DE ACOMPAÑAMIENTO (Imagen 2) ---
const accompanimentLevels = [
    {
        id: 1,
        name: "Momentum Core",
        shape: icono21, // Triángulo
        description: "Para quienes buscan dirección y ejecución puntual. Ideal para marcas que necesitan una pieza audiovisual concreta con intención y precisión. Incluye diagnóstico breve, producción puntual, postproducción y revisiones apropiadas.",
        benefit: "Beneficios: impacto visual rápido y profesional.",
        class: "level-core",
        fondo: fondo1,
    },
    {
        id: 2,
        name: "Momentum Plus",
        shape: icono22, // Hexágono
        description: "Para marcas que buscan crecimiento sostenido. Combinamos producción audiovisual estratégica y acompañamiento continuo para crear coherencia visual y narrativa. Incluye asesoría estratégica, producciónmensual o por campaña, seguimiento de resultados.",
        benefit: "Beneficios: coherencia y crecimiento sostenido.",
        class: "level-plus",
        fondo: fondo2,
    },
    {
        id: 3,
        name: "Momentum Partner",
        shape: icono23,
        description: "Para quienes buscan un aliado creativo y estratégico a largo plazo. Nos integramos a tu equipo para aportar dirección audiovisual, planificación y ejecución integral. Incluye diagnóstico profundo, estrategia anual, producción completa, postproducción avanzada y reuniones periódicas.",
        benefit: "Beneficios: acompañamiento 360° y resultados medibles.",
        class: "level-partner",
        fondo: fondo3,
    },
];

export const Servicios = () => {
    return (
        <main className="servicios-page-main">

           {/* --- SECCIÓN 1: HERO/INTRODUCCIÓN CON VIDEO ESTÁTICO (Clases: services-main-hero-section) --- */}
            <section className="services-main-hero-section theme-dark">
                {/* Video de Fondo (Fijo, no carrusel) */}
                <div className="services-media-wrapper">
                    <video
                        className="services-background-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src={moveMp4} type="video/mp4" />
                    </video>
                    {/* Overlay más oscuro para el contraste del texto */}
                    <div className="services-video-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }}></div>
                </div>

                {/* Contenido Centrado */}
                <div className="services-hero-content-wrapper services-centered-content">
                    <h1 className="services-hero-title services-multi-line">
                        {/* Nueva Línea 1: Blanco, menos prominente */}
                        <span className="services-line-1">ESTRATEGIAS CREATIVAS</span>
                        {/* Nueva Línea 2: Blanco, resaltando "MUEVEN TU MARCA" */}
                        <span className="services-line-2 services-highlight">QUE MUEVEN TU MARCA.</span>
                    </h1>

                    <p className="services-hero-subtitle">
                        <strong className="services-brand-highlight">PURO MOMENTUM</strong> es el impulso creativo que potencia tu visión. Definimos la estrategia y creamos contenido con propósito, estética y dirección para que tu marca avance con fuerza.
                    </p>
                    
                    {/* 🚨 BOTÓN 1: "VER NUESTROS PROYECTOS" -> /proyectos (Usando Link) */}
                    <Link to="/proyectos" className="services-hero-button">
                        VER NUESTROS PROYECTOS
                    </Link>
                </div>
            </section>
            
            {/* --- SECCIÓN 2: SISTEMA DE PROPÓSITO AL IMPACTO (Clases: services-system-process-section) --- */}
            <section className="services-system-process-section">
                <div className="services-system-process-wrapper">
                    <div className="services-system-header">
                        <h2 className="services-system-header-title">
                            Nuestro sistema:<span className="services-system-highlight"> del propósito al impacto</span>
                        </h2>
                        <p className="services-system-header-intro-text">
                            En <strong className="services-system-brand-highlight-black">PURO MOMENTUM</strong> todo parte de un sistema diseñado para transformar ideas en resultados. Un ciclo vivo que combina estrategia, dirección ymejora continua para que cada historia evolucione con propósito.
                        </p>
                    </div>
                    
                    {/* Grid de los 4 pasos */}
                    <div className="services-system-steps-grid">
                        {systemSteps.map((step) => (
                            <div key={step.id} className={`services-step-card ${step.class}`}>
                                <h3 className="services-card-title">{step.title}</h3>
                                <p className="services-card-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 3: NIVELES DE ACOMPAÑAMIENTO (Clases: services-accompaniment-levels-section) --- */}
            <section className="services-accompaniment-levels-section">
                <div className="services-levels-wrapper">
                    <h2 className="services-levels-header-title">
                        Tres niveles de acompañamiento,
                        <br />
                        un mismo propósito: <span className="services-levels-highlight">claridad y resultados</span>.
                    </h2>

                    {/* Grid de las 3 tarjetas de nivel */}
                    <div className="services-levels-cards-grid">
                        {accompanimentLevels.map((level) => (
                            <div key={level.id} className={`services-level-card ${level.class}`}>

                                {/* 🔑 NUEVO ELEMENTO: Contenedor para la imagen de fondo (propiedad 'fondo') */}
                                <div
                                    className="services-card-background-image"
                                    style={{ backgroundImage: `url(${level.fondo})` }}
                                ></div>

                                {/* Ícono/Forma geométrica (propiedad 'shape') */}
                                <div className="services-card-shape-icon">
                                    <img src={level.shape} alt={`${level.name} Icon`} className="services-card-icon-img" />
                                </div>

                                <h3 className="services-card-name">{level.name}</h3>

                                <div className="services-card-body">
                                    <p className="services-card-description">{level.description}</p>
                                    {/* Se usa strong para resaltar el beneficio */}
                                    <p className="services-card-benefit"><strong>{level.benefit}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 4: LLAMADA A LA ACCIÓN / CONTACTO FINAL (Clases: services-contact-cta-section) --- */}
            <section className="services-contact-cta-section theme-dark">
                <div className="services-cta-content-wrapper">
                    {/* Título principal */}
                    <h2 className="services-cta-title">
                        El <span className="services-highlight-text">movimiento</span> comienza con una
                        <br />
                        conversación.
                    </h2>

                    {/* Texto secundario */}
                    <p className="services-cta-description">
                        No tienes que tener todas las ideas, solo <strong className="services-highlight-text">intención</strong>.
                        <br />
                        Nosotros convertiremos esa intención en <strong className="services-highlight-text">dirección</strong> y <strong className="services-highlight-text">resultados</strong>.
                    </p>

                    {/* 🚨 BOTÓN 2: "Conversemos" -> /#contacto (Usando HashLink) */}
                    <HashLink 
                        to="/#contacto" 
                        className="services-cta-button"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Conversemos
                    </HashLink>
                </div>
            </section>
            {/* 🚨 AQUÍ LO AGREGAS */}
            <WhatsAppButton />
        </main>
    );
};