import React from "react";
// Importamos los estilos de proyectos (necesitarás crear este archivo: proyectos.css)
import "../Styles/proyectos.css"; 
import moveMp4 from "../assets/img/move3.mp4"; // Reutilizamos el video de fondo
import yout from "../assets/img/yout.mp4"; 
import yout1 from "../assets/img/yout1.mp4"; 
import yout2 from "../assets/img/yout2.mp4"; 
import yout3 from "../assets/img/yout3.mp4"; 
import yout4 from "../assets/img/yout4.mp4"; 
// --- DATOS DE LOS PROYECTOS (SECCIÓN 2) ---
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
        title: "KFC Wings (Alitas)",
        subtitle: "Comercial · Alimentos · Lifestyle",
        description: "Una pieza creada para evocar la experiencia única de las alitas de KFC. La dirección se centró en un lenguaje dinámico y apetitoso, combinando tomas de alta velocidad y primeros planos que resaltan la textura y el sabor, generando una conexión inmediata con la audiencia.",
        url: yout2, 
        layout: "default",
    },
    {
        id: 4,
        title: "Just Be Present",
        subtitle: "Lifestyle · Moda · Deportivo",
        description: "Parte de una campaña que fusiona moda, mindfulness y deporte. Mostramos cómo la marca respira coherencia entre diseño y propósito, amplificando su presencia en el mundo del yoga a través de una estética minimalista y una narrativa honesta.",
        // Usamos el ID del Short para el embed
        url: yout3,
        layout: "reversed",
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
                    <video className="projects-background-video" autoPlay loop muted playsInline>
                        <source src={moveMp4} type="video/mp4" />
                    </video>
                    {/* Overlay */}
                    <div className="projects-video-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }}></div>
                </div>

                {/* Contenido Centrado */}
                <div className="projects-hero-content-wrapper projects-centered-content">
                    <h1 className="projects-hero-title projects-multi-line">
                        <span className="projects-line-1">PORTAFOLIO</span>
                        <span className="projects-line-2 projects-highlight">DE RESULTADOS.</span>
                    </h1>
                    <p className="projects-hero-subtitle">
                        Mira el <strong className="projects-brand-highlight">momentum</strong> en acción a través de nuestros proyectos más recientes.
                    </p>
                </div>
            </section>
            
            {/* --- SECCIÓN 2: LISTA DE PROYECTOS --- */}
            <section className="projects-list-section">
                <div className="projects-list-wrapper">
                    <h2 className="projects-section-title">
                        Proyectos
                    </h2>
                    <p className="projects-section-subtitle">
                        En Momentum, creamos contenido que educa, entretiene e inspira, forjando conexiones profundas y generando conversiones. Nuestro equipo de producción ofrece soluciones a medida para contenido promocional, social, corporativo o de eventos, asegurando que cada historia resuene con máximo impacto y logre los objetivos de tu marca.
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

            {/* --- SECCIÓN 3: RECAP ANUAL --- */}
            <section className="projects-recap-section">
                <div className="projects-recap-wrapper">
                    <h2 className="projects-recap-title">
                        El resumen de <span className="recap-highlight">un año en movimiento.</span>
                    </h2>
                    
                    <div className="projects-recap-video-container">
                        <iframe
                            className="projects-recap-video-iframe"
                            src={recapVideo.url}
                            title={recapVideo.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>

                    <p className="projects-recap-description">
                        {recapVideo.description}
                    </p>
                </div>
            </section>

        </main>
    );
};