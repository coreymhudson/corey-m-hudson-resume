// src/components/Summary.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className="summary">
            <h2><FontAwesomeIcon icon={faBriefcase} /> Summary</h2>
            <p>Experienced data scientist with a background in genetics and executive leadership...</p>
        </div>
    );
};

export default Summary;
