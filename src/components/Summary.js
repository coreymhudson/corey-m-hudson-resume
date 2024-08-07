// src/components/Summary.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className="summary">
            <h2><FontAwesomeIcon icon={faBriefcase} /> Summary</h2>
            <p>I am a subject matter expert and leader with a proven track record of scientific innovation and leadership. I have worked to drive research in functional genomics through cutting-edge technology development both as a technical staff member and program manager. I have a strong history of leading and mentoring diverse teams across experimental and compuational disciplines. I believe that I would be an ideal candidate for an executive leadership role, directing compuational biology and bioinformatics strategy in emerging biotechnologies.</p>
        </div>
    );
};

export default Summary;
