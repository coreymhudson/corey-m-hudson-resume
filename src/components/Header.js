// src/components/Header.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Corey M. Hudson</h1>
                <h2 className="title">Executive Leadership | Data Scientist</h2>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/corey-m-hudson" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://scholar.google.com/citations?user=your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </a>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#summary">Summary</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Professional Experience</a></li>
                    <li><a href="#education">Academic Background</a></li>
                    <li><a href="#skills">Key Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
