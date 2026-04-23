import React from "react";
// 🚨 Importamos HashLink para la navegación (necesario para el nuevo botón)
import { HashLink } from "react-router-hash-link";

// Importamos los estilos de proyectos (necesitarás crear este archivo: proyectos.css)
import "../Styles/proyectos.css"; 
import yout from "../assets/img/yout.mp4"; 
import yout1 from "../assets/img/yout1.mp4"; 
import yout2 from "../assets/img/yout2.mp4"; 
import yout3 from "../assets/img/yout3.mp4"; 
import yout4 from "../assets/img/yout4.mp4"; 
import yout5 from "../assets/img/yout5.mp4"; 
import WhatsAppButton from '../components/WhatsAppButton';

const vimeoShowreelSrc = "https://player.vimeo.com/video/1136737275?h=b1a2082218&loop=0&byline=0&portrai";
// --- DATOS DE LOS PROYECTOS (SECCIÓN 2) ---
const moveMp4 =
  "https://res.cloudinary.com/deafueoco/video/upload/v1776712663/5561377-uhd_2560_1440_25fps_k3iqd7.mp4";
const projectsData = [
    {
        id: 1,
        title: "Inversionista Master",
        subtitle: "Comercial · Académico · Consultivo",
        description: "Un contenido pensado para persuadir desde la claridad y la emoción. Transformamos un mensaje financiero en una historia visual con ritmo, tono y foco en la decisión: agendar una llamada. Desde la dirección hasta el color, cada elemento refuerza la sensación de autoridad y confianza que impulsó un aumento en leads calificados y agendamientos efectivos.",
        // URL de Embed para iframe
        url: yout, 
        layout: "default", // Video a la izquierda, Texto a la derecha
    },
    {
        id: 2,
        title: "Fitness at Home",
        subtitle: "Comercial · Educativo · Deportivo",
        description: "Diseñamos un formato audiovisual para un curso de yoga digital, combinando ritmo pausado, luz orgánica y estructura pedagógica. Cada secuencia guía al espectador con claridad, creando una experiencia inmersiva y funcional. El resultado: un estándar visual replicable para futuros cursos y una marca con presencia sólida en el mundo del e-learning.",
        url: yout1, 
        layout: "reversed", // Texto a la izquierda, Video a la derecha
    },
    {
        id: 3,
        title: "Moha Expert",
        subtitle: "Académico · Consultivo · Finanzas",
        description: "Un video manifiesto diseñado para posicionar autoridad desde el primer segundo. Desde la narrativa hasta la dirección visual, construimos un mensaje claro, contundente y alineado con la visión de Moha Expert: criterio, método y control del riesgo. Una pieza pensada para marcar postura, elevar la percepción de marca y establecer una base sólida para la conversión y el crecimiento a largo plazo.",
        // Asegúrate de usar la variable donde importaste el mp4
        url: yout5, 
        layout: "default", 
    },
    {
        id: 4,
        title: "KFC Colombia",
        subtitle: "Comercial · Lifestyle · Comida",
        description: "Creamos una pieza de ritmo ágil y lenguaje visual fresco para conectar con públicos jóvenes sin perder la esencia de marca. Cada plano comunica cercanía, dinamismo y sabor; una campaña que llevó el lifestyle de KFC a las redes con autenticidad y movimiento.",
        url: yout2, 
        layout: "reversed",
    },
    {
        id: 5,
        title: "Just Be Present",
        subtitle: "Lifestyle · Moda · Deportivo",
        description: "Parte de una campaña que fusiona moda, mindfulness y deporte. Mostramos cómo la marca respira coherencia entre diseño y propósito, amplificando su presencia en el mundo del yoga a través de una estética minimalista y una narrativa honesta.",
        // Usamos el ID del Short para el embed
        url: yout3,
        layout: "default",
    },
];

// --- DATOS DE LA SECCIÓN 3: RECAP (FINAL) ---
const recapVideo = {
    title: "Recap Anual",
    url: yout4, 
};


export const Proyectos = () => {
    return (
        <main className="proyectos-page-main">

           {/* --- SECCIÓN 1: HERO/INTRODUCCIÓN (Clases únicas para Proyectos) --- */}
            <section className="projects-main-hero-section theme-dark">
                {/* Video de Fondo (Fijo) */}
                <div className="projects-media-wrapper">
                    <video
                        className="projects-background-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src={moveMp4} type="video/mp4" />
                    </video>
                    {/* Overlay */}
                    <div className="projects-video-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }}></div>
                </div>

                {/* Contenido Centrado */}
                <div className="projects-hero-content-wrapper projects-centered-content">
                    <h1 className="projects-hero-title projects-multi-line">
                        <span className="projects-line-1">NUESTRO PORTAFOLIO</span>
                        <span className="projects-line-2 projects-highlight">EN ACCIÓN.</span>
                    </h1>
                    <p className="projects-hero-subtitle">
                        En <strong className="projects-brand-highlight">PURO MOMENTUM</strong> exploramos la forma en que la intención se convierte en imagen, y la emoción encuentra su lenguaje.
                    </p>
                    
                    {/* 🚨 NUEVO BOTÓN: "Conversemos" -> /#contacto (Usando HashLink) */}
                    <HashLink 
                        to="/#contacto" 
                        // Reutilizamos la clase de botón del hero de Servicios o puedes crear una específica.
                        className="services-hero-button" 
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    >
                        CONVERSEMOS
                    </HashLink>
                </div>
                
            </section>
            
            {/* --- SECCIÓN 2: LISTA DE PROYECTOS --- */}
            <section className="projects-list-section">
                <div className="projects-list-wrapper">
                    <h2 className="projects-section-title">
                        Proyectos
                    </h2>
                    <p className="projects-section-subtitle">
                        En PURO MOMENTUM, creamos contenido que educa, entretiene e inspira, forjando conexiones profundas y generando conversiones. Nuestro equipo de producción ofrece soluciones a medida para contenido promocional, social, corporativo o de eventos, asegurando que cada historia resuene con máximo impacto y logre los objetivos de tu marca.
                    </p>

                    {/* Contenedor del Grid/Lista de Proyectos */}
                    <div className="projects-grid-container">
                        {projectsData.map((project) => (
                            <div key={project.id} className={`projects-grid-item project-layout-${project.layout}`}>
                                {/* Parte del Video */}
                                <div className="projects-video-container">
                                    <video
                                        className="projects-video-element" 
                                        src={project.url}
                                        title={project.title}
                                        controls // Muestra los controles
                                        muted // <-- MUTEADO
                                        playsInline
                                    >
                                        Tu navegador no soporta el tag de video.
                                    </video>
                                </div>
                                
                                {/* Parte de la Explicación Naranja */}
                                <div className="projects-info-card">
                                    <h3 className="projects-info-title">{project.title}</h3>
                                    <p className="projects-info-subtitle">{project.subtitle}</p>
                                    <div className="projects-info-divider"></div>
                                    <p className="projects-info-description">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 3: RECAP ANUAL (Ahora incluye 2 Videos) --- */}
            <section className="projects-recap-section">
                <div className="projects-recap-wrapper">
                    <h2 className="projects-recap-title">
                        El resumen de <span className="recap-highlight">un año en movimiento.</span>
                    </h2>
                    
                    {/* 🔑 VIDEO 1: SHOWREEL DE VIMEO (El primer video) */}
                    <div className="projects-recap-video-container showreel-container">
                        <iframe
                            src={vimeoShowreelSrc}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="projects-recap-video-iframe"
                            title="Showreel Puro Momentum"
                            // Añade la clave para forzar la actualización si lo deseas, aunque aquí no es necesario
                            // key={vimeoShowreelSrc} 
                        ></iframe>
                    </div>
                    
                    {/* --- Separador Visual entre videos --- */}
                    <div className="projects-recap-separator"></div>

                    <p className="projects-recap-description">
                        {recapVideo.description}
                    </p>
                </div>
            </section>
            {/* --- SECCIÓN 4: LLAMADA A LA ACCIÓN / CONTACTO FINAL (Clases: services-contact-cta-section) --- */}
                        <section className="services-contact-cta-section theme-dark">
                            <div className="services-cta-content-wrapper">
                                {/* Título principal */}
                                <h2 className="services-cta-title">
                                    <span className="services-highlight-text">Nada se mueve solo</span>
                                    <br />
                                </h2>
            
                                {/* Texto secundario */}
                                <p className="services-cta-description">
                                    Cada proyecto comienza con <strong className="services-highlight-text">intención</strong>, 
                                    <strong className="services-highlight-text"> dirección</strong> y una buena <strong className="services-highlight-text">conversación</strong>.
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