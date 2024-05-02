/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon"></i>

        <div>
          <h3 className="about__title">198</h3>
          <span className="about__subtitle">Projects Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon"></i>

        <div>
          <h3 className="about__title">2</h3>
          <span className="about__subtitle">Ongoing projects</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon"></i>

        <div>
          <h3 className="about__title"></h3>
          <span className="about__subtitle"></span>
        </div>
      </div>

    </div>
  );
};

export default AboutBox;
