import React from "react";
import "./about.css";
import AboutMe from "../../assets/dancingraccoon.gif";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutMe} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              My name is Bram Peerdeman. I am 17 years old and live in Delft,
              The Netherlands. I study software development and have a passion
              for new technology. I'm always looking for ways to improve myself,
              and like a good challenge.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Design</h3>
                <span className="skills__number">20%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Linux</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
