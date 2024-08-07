// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import './styles.css'; // Correct path to styles.css
import Header from './components/Header';
import Summary from './components/Summary';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <section id="summary"><Summary /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="research"><Research /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
