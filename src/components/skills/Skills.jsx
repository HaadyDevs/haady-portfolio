import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Mobile from './Mobile';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">What am i good at?</h2>
        <span className="section__subtitle">Technical skillset</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
        </div>
    </section>
  );
}

export default Skills;