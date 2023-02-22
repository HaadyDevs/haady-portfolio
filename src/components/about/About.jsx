import React from 'react';
import "./about.css";
import MyImage from "../../assets/img.png";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">Who Am I?</h2>
        <span className="section__subtitle">My Story</span>
        <div className="about__container container grid">
            <img src={MyImage} alt="about" className="about__img" />
            <div className="about__data">
                <Info />
                <p className="about__description">
                Since beginning my journey with a simple profile view android application 3 years ago, I've adored exploring different aspects of the subject and learning plethora of lessons along the way
                <br/>
                <br/>
                Today, i build mobile and web apps that speaks to thousands of users through its rich UI/UX and highly performant functionalities.
                </p>
                
            </div>
        </div>
    </section>
  );
}

export default About;