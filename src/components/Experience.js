import React from 'react';

const Experience = () => {
    return (
        <section className="experience">
            <h2>Professional Experience</h2>
            <div className="job">
                <h3>Senior Data Scientist, ABC Corp</h3>
                <p>January 2019 - Present</p>
                <ul>
                    <li>Led a team of data scientists in developing predictive models for disease outbreaks.</li>
                    <li>Implemented machine learning algorithms to personalize medical treatments.</li>
                    <li>Improved patient outcomes through data-driven insights and decision-making.</li>
                </ul>
            </div>
            <div className="job">
                <h3>Data Scientist, XYZ Inc.</h3>
                <p>June 2016 - December 2018</p>
                <ul>
                    <li>Conducted data analysis and statistical modeling to support business decisions.</li>
                    <li>Developed data visualization tools to communicate insights to stakeholders.</li>
                    <li>Collaborated with cross-functional teams to implement data-driven solutions.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
