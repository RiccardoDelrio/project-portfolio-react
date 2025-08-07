import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Boolique E-commerce",
      description: "Piattaforma e-commerce completa con backend Node.js e frontend React. Sistema di autenticazione JWT, gestione prodotti, categorie, ordini e wishlist. Architettura scalabile e sicura.",
      image: "/images/boolique-preview.jpg",
      technologies: ["React", "Node.js", "JWT", "Vite", "JavaScript", "CSS"],
      category: "Full Stack",
      githubUrl: "https://github.com/RiccardoDelrio/Boolique-Ecommerce",
      videoUrl: "https://www.youtube.com/watch?v=sLB7wGomdO4",
      hasLiveDemo: false,
      hasVideo: true,
      featured: true
    },
    {
      id: 2,
      title: "Backoffice Laravel",
      description: "Sistema di gestione backoffice sviluppato con Laravel. Include dashboard amministrativa, gestione utenti, CRUD completo e interfaccia moderna con Blade templating.",
      image: "/images/laravel-preview.jpg",
      technologies: ["Laravel", "PHP", "Blade", "SCSS", "MySQL", "Bootstrap"],
      category: "Backend",
      githubUrl: "https://github.com/RiccardoDelrio/backoffice-laravel",
      hasLiveDemo: false,
      hasVideo: false,
      featured: true
    },
    {
      id: 3,
      title: "Steam React Clone",
      description: "Replica dell'interfaccia Steam realizzata con React e Vite. Design responsivo, componenti riutilizzabili e gestione dello stato avanzata.",
      image: "/images/steam-preview.jpg",
      technologies: ["React", "Vite", "CSS", "JavaScript", "Responsive Design"],
      category: "Frontend",
      githubUrl: "https://github.com/RiccardoDelrio/steam-react",
      hasLiveDemo: false,
      hasVideo: false,
      featured: false
    },
    {
      id: 4,
      title: "Curriculum Digitale",
      description: "Curriculum vitae digitale interattivo con design moderno e presentazione delle competenze in formato web innovativo.",
      image: "/images/curriculum-preview.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive", "UI/UX"],
      category: "Frontend",
      githubUrl: "https://github.com/RiccardoDelrio/curriculum",
      hasLiveDemo: false,
      hasVideo: false,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">I Miei Progetti</h2>
            <p className="lead">
              Una selezione dei progetti che meglio rappresentano le mie competenze tecniche 
              e la mia passione per lo sviluppo web moderno.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects mb-5">
          <h3 className="projects-subtitle text-center mb-4">Progetti Principali</h3>
          <div className="row g-4">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="col-lg-6">
                <div className="project-card featured-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="card-img-top"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x300/667eea/white?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
                          <i className="fab fa-github me-1"></i> Codice
                        </a>
                        {project.hasVideo && (
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                            <i className="fab fa-youtube me-1"></i> Video
                          </a>
                        )}
                        {project.hasLiveDemo && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                            <i className="fas fa-external-link-alt me-1"></i> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="card-title">{project.title}</h3>
                      <span className="category-badge">{project.category}</span>
                    </div>
                    <p className="card-text">{project.description}</p>
                    <div className="tech-badges mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge">{tech}</span>
                      ))}
                    </div>
                    <Link to={`/project/${project.id}`} className="btn btn-primary">
                      Scopri di più <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="other-projects">
          <h3 className="projects-subtitle text-center mb-4">Altri Progetti</h3>
          <div className="row g-4">
            {otherProjects.map((project, index) => (
              <div key={project.id} className="col-lg-6">
                <div className="project-card fade-in-up" style={{animationDelay: `${(index + featuredProjects.length) * 0.1}s`}}>
                  <div className="card-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="card-img-top"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x300/764ba2/white?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
                          <i className="fab fa-github me-1"></i> Codice
                        </a>
                        {project.hasVideo && (
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                            <i className="fab fa-youtube me-1"></i> Video
                          </a>
                        )}
                        {project.hasLiveDemo && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">
                            <i className="fas fa-external-link-alt me-1"></i> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="card-title">{project.title}</h3>
                      <span className="category-badge">{project.category}</span>
                    </div>
                    <p className="card-text">{project.description}</p>
                    <div className="tech-badges mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge">{tech}</span>
                      ))}
                    </div>
                    <Link to={`/project/${project.id}`} className="btn btn-outline-primary">
                      Dettagli <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="https://github.com/RiccardoDelrio" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg">
            <i className="fab fa-github me-2"></i>
            Vedi tutti i progetti su GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
