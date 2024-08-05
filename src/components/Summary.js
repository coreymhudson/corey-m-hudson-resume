// src/components/Summary.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className="summary">
            <h2><FontAwesomeIcon icon={faBriefcase} /> Summary</h2>
            <p>I am a strong subject matter expert in bioinformatics, computational biology, and digital biosecurity. I have a strong and proven track record of leadership, innovation, and strategic vision. With over a decade of experience at top-tier research institutions like Sandia National Laboratories and DARPA, he has demonstrated exceptional skills in managing large, multidisciplinary teams and overseeing high-impact projects. Corey’s extensive work in developing cutting-edge technologies for biosecurity, synthetic biology, and genomic data protection, combined with his prolific publication record and international training expertise, positions him as a highly valuable asset to any organization looking to advance its capabilities in these critical areas. His ability to navigate complex challenges, drive strategic initiatives, and deliver tangible results makes him an ideal candidate for senior leadership roles focused on pioneering advancements in biotechnology and biosecurity.</p>
        </div>
    );
};

export default Summary;
