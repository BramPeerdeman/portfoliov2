import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <span className="section__subtitle">Get to know me</span>
        <h2 className="section__title">About Me</h2>

        <div className="about__content">
          <p className="about__text">
            I am a Software Engineering student at HBO-ICT with a deep passion for new technology,
            backend architecture, and automation. I build secure, high-performance applications from
            the server down to the UI.
          </p>
          <p className="about__text">
            Based in Delft, The Netherlands, I enjoy tackling complex technical challenges
            and continuously expanding my skill set in the ever-evolving world of software development.
          </p>
        </div>

        <div className="about__stats">
          <div className="about__stat-card">
            <span className="about__stat-number">8+</span>
            <span className="about__stat-label">Projects Completed</span>
          </div>
          <div className="about__stat-card">
            <span className="about__stat-number">2+</span>
            <span className="about__stat-label">Years Experience</span>
          </div>
          <div className="about__stat-card">
            <span className="about__stat-number">&infin;</span>
            <span className="about__stat-label">Continuous Learner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
