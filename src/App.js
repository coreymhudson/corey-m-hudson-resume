// src/App.js
import React from 'react';
import './styles.css'; // Correct path to styles.css
import Header from './components/Header';
import Summary from './components/Summary';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const sidebarStyle = {
    width: '200px',
    position: 'fixed',
    height: '100vh',
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/nav-background-new.jpg") no-repeat center center',
    backgroundSize: 'cover',
    color: '#fff',
    paddingTop: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '20px'
  };

  return (
    <div className="container">
      <nav className="sidebar" style={sidebarStyle}>
        <ul>
          <li><a href="#summary">Professional Summary</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Professional Experience</a></li>
          <li><a href="#education">Academic Background</a></li>
          <li><a href="#skills">Key Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <Header />
        <section id="summary"><Summary /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
