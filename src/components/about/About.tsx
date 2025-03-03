/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";
import AboutMe from "../../assets/portfolio.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutMe} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              My name is Bram Peerdeman. I am 19 years old and live in Delft,
              The Netherlands. I study HBO-ICT Software Engineering and have a passion
              for new technology.
            </p>
            <a href="https://www.linkedin.com/in/bram-peerdeman-8a52a122b/" target='_blank' rel="noreferrer" className="btn">
              Linkedin
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Typescript</h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.JS</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Linux</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage linux"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    <AboutBox />
    </section>
  );
};

export default About;
