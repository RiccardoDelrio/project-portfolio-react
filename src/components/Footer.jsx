import React from 'react';
import './Footer.css';

export default function Footer() {
    const socialLinks = [
        {
            icon: "fab fa-github",
            url: "https://github.com/RiccardoDelrio",
            label: "GitHub"
        },
        {
            icon: "fab fa-linkedin",
            url: "https://linkedin.com/in/riccardo-delrio",
            label: "LinkedIn"
        },
        {
            icon: "fas fa-envelope",
            url: "mailto:riccardo.delrio@email.com",
            label: "Email"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="footer-content">
                            <h3 className="footer-title">Riccardo Delrio</h3>
                            <p className="footer-subtitle">Full Stack Developer</p>
                            <p className="footer-description">
                                Trasformo idee in esperienze digitali innovative utilizzando tecnologie moderne 
                                e best practices di sviluppo.
                            </p>
                            
                            <div className="social-links">
                                {socialLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={link.label}
                                    >
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                            
                            <button 
                                onClick={scrollToTop}
                                className="back-to-top"
                                aria-label="Torna in cima"
                            >
                                <i className="fas fa-chevron-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="copyright">
                                © {new Date().getFullYear()} Riccardo Delrio. Tutti i diritti riservati.
                            </p>
                            <p className="built-with">
                                Sviluppato con <i className="fas fa-heart text-danger"></i> utilizzando React & Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
