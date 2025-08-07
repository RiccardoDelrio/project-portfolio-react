import '../components/About.css';

const About = () => {
  const skills = [
    {
      icon: "fab fa-react",
      title: "Frontend Development",
      description: "React, Vue.js, JavaScript moderno, HTML5, CSS3, Bootstrap, responsive design"
    },
    {
      icon: "fas fa-server",
      title: "Backend Development", 
      description: "Node.js, Laravel, PHP, API REST, database design, architetture scalabili"
    },
    {
      icon: "fas fa-database",
      title: "Database & Tools",
      description: "MySQL, phpMyAdmin con Laravel/PHP per gestione database"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "UI/UX Design",
      description: "Design responsivo, user experience, prototipazione, interfacce intuitive"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Chi Sono</h2>
            <p className="about-text">
              Sono un <strong>Full Stack Developer</strong> appassionato di tecnologie moderne e innovazione digitale. 
              La mia esperienza spazia dallo sviluppo frontend con React e Vue.js al backend con Node.js e Laravel. 
              Mi dedico alla creazione di applicazioni web scalabili, performanti e con un'attenzione particolare 
              all'esperienza utente.
            </p>
            <p className="about-text">
              Durante il mio percorso ho sviluppato progetti che dimostrano la mia capacità di gestire l'intero 
              ciclo di sviluppo, dalla progettazione dell'architettura al deployment finale, sempre seguendo 
              le best practices e le metodologie più avanzate del settore.
            </p>
          </div>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-10 mx-auto text-center">
            <div className="tech-stack">
              <h3 className="mb-4">Tecnologie Principali</h3>
              <div className="tech-badges justify-content-center">
                {[
                  { name: 'React', icon: 'fab fa-react' },
                  { name: 'Vue.js', icon: 'fab fa-vuejs' },
                  { name: 'Node.js', icon: 'fab fa-node-js' },
                  { name: 'Laravel', icon: 'fab fa-laravel' },
                  { name: 'JavaScript', icon: 'fab fa-js-square' },
                  { name: 'PHP', icon: 'fab fa-php' },
                  { name: 'MySQL', icon: 'fas fa-database' },
                  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
                  { name: 'Git', icon: 'fab fa-git-alt' }
                ].map((tech, index) => (
                  <div key={index} className="tech-badge">
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;