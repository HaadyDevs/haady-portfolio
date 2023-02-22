import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">What have i done?</h2>
        <span className="section__subtitle">Few projects i have worked on</span>

        <Projects />
    </section>
  );
}

export default Portfolio;