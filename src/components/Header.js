// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Using graduation cap as a placeholder
import '../styles.css'; // Correct path to styles.css

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="name">Corey M. Hudson</h1>
                <h2 className="title">Executive Leadership | Data Scientist</h2>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
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
            </div>
        </header>
    );
};

export default Header;
