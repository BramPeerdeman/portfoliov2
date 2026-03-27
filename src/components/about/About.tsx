import React from 'react';
import './about.css';
// Import your CV and Profile Picture here:
import CV from '../../assets/cv_BramPeerdeman.pdf'; 
import ProfileImg from '../../assets/profilepicture.png'; 

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <span className="section__subtitle">Get to know me</span>
        <h2 className="section__title">About Me</h2>

        <div className="about__container">
          <div className="about__img-wrapper">
            <img src={ProfileImg} alt="Bram Peerdeman" className="about__img" />
          </div>
          <div className="about__data">
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
              
              <a href={CV} download="Bram_Peerdeman_CV.pdf" className="btn btn--primary about__btn">
                Download CV
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
            </div>

            <div className="about__stats">
              <div className="about__stat-card">
                <span className="about__stat-number">10+</span>
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

        </div>
      </div>
    </section>
  );
};

export default About;