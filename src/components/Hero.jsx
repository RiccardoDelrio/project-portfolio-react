import './Hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ["JavaScript", "React", "Node.js", "PHP", "Laravel", "MySQL", "CSS", "Bootstrap", "Express"];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="hero-cyber">
      {/* Animated Background */}
      <div className="cyber-grid"></div>
      <div className="floating-elements">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* 3D Hologram Effect */}
      <div 
        className="hologram-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }}
      ></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className={`hero-content ${isVisible ? 'fade-in-cyber' : ''}`}>
              {/* Cyber Glitch Name */}
              <div className="cyber-name-container">
                <h1 
                  className="cyber-title"
                  data-text="RICCARDO Delrio"
                >
                  RICCARDO Delrio
                </h1>
                <div className="cyber-subtitle">
                  <span className="typing-text">
                    <span className="code-bracket">{'<'}</span>
                    <span className="role-text">FULL STACK DEVELOPER</span>
                    <span className="code-bracket">{'/>'}</span>
                  </span>
                </div>
              </div>

              {/* Dynamic Skills Rotator */}
              <div className="skills-rotator">
                <span className="skills-label">Specialized in:</span>
                <div className="skill-container">
                  <span className="current-skill neon-text">
                    {skills[currentSkill]}
                  </span>
                </div>
              </div>

              {/* Cyber Description */}
              <p className="hero-description">
                Trasformo <span className="highlight-text">idee innovative</span> in 
                <span className="highlight-text"> esperienze web dinamiche</span>. 
                Specializzato in <span className="highlight-text">JavaScript, React, Node.js</span> e 
                <span className="highlight-text">PHP/Laravel</span> con focus su 
                <span className="highlight-text">performance</span> e 
                <span className="highlight-text">user experience</span> moderne.
              </p>

              {/* Futuristic Buttons */}
              <div className="hero-actions">
                <button className="btn-cyber btn-primary">
                  <i className="fas fa-rocket me-2"></i>
                  <span>EXPLORE PROJECTS</span>
                  <div className="btn-glow"></div>
                </button>
                <button className="btn-hologram">
                  <i className="fas fa-download me-2"></i>
                  <span>DOWNLOAD CV</span>
                </button>
              </div>

              {/* Social Links con effetti Neon */}
              <div className="social-cyber">
                <a href="https://github.com/RiccardoDelrio" className="social-link github">
                  <i className="fab fa-github"></i>
                  <span className="social-tooltip">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/riccardo-delrio" className="social-link linkedin">
                  <i className="fab fa-linkedin"></i>
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                <a href="mailto:riccardo.delrio@email.com" className="social-link email">
                  <i className="fas fa-envelope"></i>
                  <span className="social-tooltip">Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-visual">
              {/* 3D Rotating Avatar Container */}
              <div className="avatar-container">
                <div className="avatar-hologram">
                  <div className="hologram-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                  <div className="avatar-core">
                    <div className="code-matrix">
                      {[...Array(100)].map((_, i) => (
                        <span key={i} className="matrix-char">
                          {Math.random() > 0.5 ? '1' : '0'}
                        </span>
                      ))}
                    </div>
                    <div className="avatar-image">
                      <img 
                        src="/images/avatar-new.png"

                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="tech-orbit">
                {[
                  { icon: 'fab fa-js-square', color: '#F7DF1E', delay: '0s' },
                  { icon: 'fab fa-react', color: '#61DAFB', delay: '1s' },
                  { icon: 'fab fa-node-js', color: '#339933', delay: '2s' },
                  { icon: 'fab fa-php', color: '#777BB4', delay: '3s' },
                  { icon: 'fab fa-laravel', color: '#FF2D20', delay: '4s' },
                  { icon: 'fas fa-database', color: '#00758F', delay: '5s' }
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="tech-icon"
                    style={{ 
                      '--tech-color': tech.color,
                      '--animation-delay': tech.delay 
                    }}
                  >
                    <i className={tech.icon}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Futuristico */}
      <div className="scroll-indicator-cyber">
        <div className="scroll-wheel">
          <div className="scroll-dot"></div>
        </div>
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <i className="fas fa-chevron-down scroll-arrow"></i>
      </div>
    </section>
  );
};

export default Hero;
