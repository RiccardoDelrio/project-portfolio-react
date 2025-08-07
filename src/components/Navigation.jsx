import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="fas fa-code me-2"></i>
                    Riccardo Delrio
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('about')}>
                                Chi Sono
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('projects')}>
                                Progetti
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => scrollToSection('contact')}>
                                Contatti
                            </button>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link github-link" 
                                href="https://github.com/RiccardoDelrio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github me-1"></i>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
