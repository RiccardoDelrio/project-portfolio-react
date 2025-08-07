import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Details.css';
import './Details.css';

export default function Details() {
    const { id } = useParams();

    // Dati statici dei progetti
    const projects = {
        1: {
            id: 1,
            title: "Boolique E-commerce",
            description: "Boolique E-commerce è una piattaforma web completa per la gestione di un negozio online. Il progetto è suddiviso in due parti principali: Backend realizzato in Node.js che gestisce l'autenticazione degli utenti tramite token JWT, la gestione di prodotti, categorie, ordini, wishlist e newsletter. Include una gestione avanzata dei token di autenticazione con verifica continua tra frontend e backend. Frontend realizzato con tecnologie moderne come Vite e React, offre un'interfaccia utente intuitiva per la navigazione, la ricerca e l'acquisto dei prodotti.",
            image: "/images/boolique-preview.jpg",
            technologies: ["React", "Node.js", "JWT", "Vite", "JavaScript", "CSS", "Express.js", "MongoDB"],
            category: "Full Stack",
            githubUrl: "https://github.com/RiccardoDelrio/Boolique-Ecommerce",
            videoUrl: "https://www.youtube.com/watch?v=sLB7wGomdO4",
            videoId: "sLB7wGomdO4",
            features: [
                "Sistema di autenticazione JWT completo",
                "Gestione prodotti e categorie dinamiche",
                "Carrello e sistema di checkout",
                "Wishlist personalizzata per utenti",
                "Sistema di newsletter",
                "Interface responsive e moderna",
                "API REST scalabile",
                "Sicurezza avanzata dei dati"
            ],
            challenges: [
                "Implementazione di un sistema di autenticazione sicuro",
                "Gestione dello stato complesso nel frontend",
                "Sincronizzazione real-time tra frontend e backend",
                "Ottimizzazione delle performance"
            ]
        },
        2: {
            id: 2,
            title: "Backoffice Laravel",
            description: "Sistema di gestione backoffice sviluppato con Laravel. Include dashboard amministrativa completa, gestione utenti avanzata, sistema CRUD completo per tutti i modelli e interfaccia moderna sviluppata con Blade templating engine. Il sistema è progettato per essere facilmente estendibile e include funzionalità di reporting e analytics.",
            image: "/images/laravel-preview.jpg",
            technologies: ["Laravel", "PHP", "Blade", "SCSS", "MySQL", "Bootstrap", "JavaScript"],
            category: "Backend",
            githubUrl: "https://github.com/RiccardoDelrio/backoffice-laravel",
            features: [
                "Dashboard amministrativa completa",
                "Sistema di gestione utenti e ruoli",
                "CRUD operations per tutti i modelli",
                "Interfaccia moderna con Blade",
                "Sistema di autenticazione robusto",
                "Reporting e analytics integrati",
                "Design responsivo",
                "Validazione avanzata dei dati"
            ],
            challenges: [
                "Architettura scalabile per il backoffice",
                "Gestione complessa dei permessi",
                "Ottimizzazione delle query database",
                "User experience intuitive per amministratori"
            ]
        },
        3: {
            id: 3,
            title: "Steam React Clone",
            description: "Replica fedele dell'interfaccia Steam realizzata con React e Vite. Il progetto include design responsivo, componenti riutilizzabili e gestione dello stato avanzata. L'applicazione simula l'esperienza utente di Steam con particolare attenzione ai dettagli visivi e all'usabilità.",
            image: "/images/steam-preview.jpg",
            technologies: ["React", "Vite", "CSS", "JavaScript", "Responsive Design", "Component Architecture"],
            category: "Frontend",
            githubUrl: "https://github.com/RiccardoDelrio/steam-react",
            features: [
                "Replica fedele dell'UI Steam",
                "Design completamente responsivo",
                "Componenti React riutilizzabili",
                "Gestione stato con React Hooks",
                "Animazioni fluide e transizioni",
                "Architettura modulare",
                "Performance ottimizzate",
                "Cross-browser compatibility"
            ],
            challenges: [
                "Replica precisa del design originale",
                "Gestione di layout complessi",
                "Ottimizzazione delle performance",
                "Responsive design per tutti i dispositivi"
            ]
        },
        4: {
            id: 4,
            title: "Curriculum Digitale",
            description: "Curriculum vitae digitale interattivo con design moderno e presentazione innovativa delle competenze in formato web. Il progetto include animazioni fluide, design responsivo e una user experience ottimizzata per impressionare i reclutatori.",
            image: "/images/curriculum-preview.jpg",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "Animations"],
            category: "Frontend",
            githubUrl: "https://github.com/RiccardoDelrio/curriculum",
            features: [
                "Design moderno e professionale",
                "Animazioni fluide e coinvolgenti",
                "Sezioni interattive",
                "Timeline delle esperienze",
                "Showcase delle competenze",
                "Design completamente responsivo",
                "Ottimizzato per i reclutatori",
                "Loading veloce e performance"
            ],
            challenges: [
                "Bilanciare design e funzionalità",
                "Creare animazioni non invasive",
                "Ottimizzazione per tutti i dispositivi",
                "User experience coinvolgente"
            ]
        }
    };

    const project = projects[id];

    if (!project) {
        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="error-container">
                            <h1 className="error-title">404</h1>
                            <h2 className="error-subtitle">Progetto non trovato</h2>
                            <p className="error-description">
                                Il progetto che stai cercando non esiste o è stato rimosso.
                            </p>
                            <Link to="/" className="btn btn-primary btn-lg">
                                <i className="fas fa-home me-2"></i>
                                Torna alla Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="project-details pt-5">
            <div className="container">
                {/* Header */}
                <div className="project-header">
                    <Link to="/" className="back-button">
                        <i className="fas fa-arrow-left me-2"></i>
                        Torna ai progetti
                    </Link>
                    
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="project-title-section">
                                <span className="category-badge">{project.category}</span>
                                <h1 className="project-title">{project.title}</h1>
                                <p className="project-subtitle">
                                    Progetto sviluppato con tecnologie moderne e best practices
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <div className="project-actions">
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary me-2"
                                >
                                    <i className="fab fa-github me-2"></i>
                                    Codice Sorgente
                                </a>
                                {project.videoUrl && (
                                    <a 
                                        href={project.videoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{backgroundColor: '#10B981', color: 'white', borderColor: '#10B981'}}
                                    >
                                        <i className="fab fa-youtube me-2"></i>
                                        Video Presentazione
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="row">
                    <div className="col-lg-8">
                        <div className="project-image-container mb-4">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="project-image img-fluid rounded"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/800x400/667eea/white?text=${encodeURIComponent(project.title)}`;
                                }}
                            />
                        </div>

                        {/* Video Presentation Section */}
                        {project.videoUrl && (
                            <div className="video-presentation mb-4">
                                <h3 className="mb-3">
                                    <i className="fab fa-youtube text-danger me-2"></i>
                                    Video Presentazione
                                </h3>
                                <div className="video-container">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${project.videoId}`}
                                            title={`Video presentazione ${project.title}`}
                                            allowFullScreen
                                            className="rounded"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="project-description mb-4">
                            <h3>Descrizione del Progetto</h3>
                            <p className="lead">{project.description}</p>
                        </div>

                        <div className="project-features mb-4">
                            <h3>Caratteristiche Principali</h3>
                            <ul className="features-list list-unstyled">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="feature-item mb-2">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-challenges">
                            <h3>Sfide Tecniche</h3>
                            <ul className="challenges-list list-unstyled">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="challenge-item mb-2">
                                        <i className="fas fa-cog text-primary me-2"></i>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="project-sidebar">
                            <div className="tech-stack-card card mb-4">
                                <div className="card-body">
                                    <h3 className="card-title">Stack Tecnologico</h3>
                                    <div className="tech-badges">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="badge bg-primary me-2 mb-2">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="project-links-card card">
                                <div className="card-body">
                                    <h3 className="card-title">Collegamenti</h3>
                                    <div className="d-grid gap-2">
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-dark"
                                        >
                                            <i className="fab fa-github me-2"></i>
                                            Repository GitHub
                                        </a>
                                        {project.videoUrl && (
                                            <a 
                                                href={project.videoUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="btn"
                                                style={{backgroundColor: '#10B981', color: 'white', borderColor: '#10B981'}}
                                            >
                                                <i className="fab fa-youtube me-2"></i>
                                                Video Presentazione
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}