// src/components/Summary.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className="summary">
            <h2><FontAwesomeIcon icon={faBriefcase} /> Summary</h2>
            <p>I am a subject matter expert and leader  with a proven track record of scientific innovation and leadership in functional genomics, CRISPR screening, gene editing technologies, biomanufacturing and advanced transcriptomics. I have worked to drive forward functional genomics through cutting-edge technology development both as a technical staff member and program manager. I have a strong history of leading and mentoring diverse teams across experimental and compuational disciplines.</p>
        </div>
    );
};

export default Summary;
