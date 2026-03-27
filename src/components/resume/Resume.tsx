import React from 'react';
import './resume.css';

interface TimelineEntry {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
}

const timelineData: TimelineEntry[] = [
  {
    type: 'work',
    title: 'DevOps Engineer',
    organization: 'SocyList',
    period: '2024 - 2025',
    description: 'Managing infrastructure, CI/CD pipelines, and automation for scalable deployment workflows.',
  },
  {
    type: 'work',
    title: 'Intern Software Developer',
    organization: 'SocyList',
    period: '2023 - 2024',
    description: 'Developed an automated website scanning service using TypeScript and Playwright.',
  },
  {
    type: 'education',
    title: 'HBO Software Engineer',
    organization: 'De Haagse Hogeschool',
    period: '2024 - Present',
    description: 'Studying Software Engineering with focus on architecture, design patterns, and modern development practices.',
  },
  {
    type: 'education',
    title: 'MBO Software Developer',
    organization: 'Grafisch Lyceum',
    period: '2021 - 2024',
    description: 'Completed vocational training in software development with hands-on project experience.',
  },
];

const Resume = () => {
  const workEntries = timelineData.filter((e) => e.type === 'work');
  const educationEntries = timelineData.filter((e) => e.type === 'education');

  return (
    <section className="resume section" id="resume">
      <div className="container">
        <span className="section__subtitle">My journey</span>
        <h2 className="section__title">Experience &amp; Education</h2>

        <div className="resume__grid">
          <div className="resume__column">
            <h3 className="resume__column-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Work
            </h3>
            <div className="timeline">
              {workEntries.map((entry, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot" aria-hidden="true"></div>
                  <div className="timeline__content">
                    <span className="timeline__period">{entry.period}</span>
                    <h4 className="timeline__title">{entry.title}</h4>
                    <span className="timeline__org">{entry.organization}</span>
                    <p className="timeline__desc">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume__column">
            <h3 className="resume__column-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Education
            </h3>
            <div className="timeline">
              {educationEntries.map((entry, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot" aria-hidden="true"></div>
                  <div className="timeline__content">
                    <span className="timeline__period">{entry.period}</span>
                    <h4 className="timeline__title">{entry.title}</h4>
                    <span className="timeline__org">{entry.organization}</span>
                    <p className="timeline__desc">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
