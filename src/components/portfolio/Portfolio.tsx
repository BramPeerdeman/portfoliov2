import React from 'react';
import './portfolio.css';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  codeUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
{
    id: 1,
    title: 'Sightground - Website Scanner',
    description: 'An automated website scanning service built during my SocyList internship to analyze security vulnerabilities and performance metrics.',
    techStack: ['TypeScript', 'Node.js', 'Playwright', 'Docker'],
    codeUrl: 'Helaas niet online beschikbaar vanwege bedrijfsgevoeligheid',
  },
  {
    id: 2,
    title: 'Gereedschapsmanager',
    description: 'A robust backend inventory management system built to handle equipment tracking, user operations, and data persistence.',
    techStack: ['Java', 'Spring Boot', 'REST API', 'Backend'],
    codeUrl: 'https://https://github.com/BramPeerdeman/gereedschapmanager-api', 
  },
    {
    id: 3,
title: 'Crypto Platform',
    description: 'A full-stack cryptocurrency platform featuring a React frontend, a Java backend API integrated with Redis, and a Go-based market data ingestion service, all containerized with Docker.',
    techStack: ['Java', 'Go', 'React', 'TypeScript', 'Redis', 'Docker'],
    codeUrl: 'https://github.com/BramPeerdeman/crypto-platform',
  },
  {
    id: 4,
    title: 'Developer Portfolio v2',
    description: 'A fully responsive, modern single-page application built to showcase my backend and frontend development journey.',
    techStack: ['React.js', 'TypeScript', 'Responsive UI', 'CSS'],
    codeUrl: 'https://github.com/BramPeerdeman/portfoliov2', 
    demoUrl: 'https://brampeerdeman.com', 
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <span className="section__subtitle">What I have built</span>
        <h2 className="section__title">Recent Works</h2>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <article className="portfolio__card" key={project.id}>
              <div className="portfolio__card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="portfolio__folder-icon" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                <div className="portfolio__card-links">
<a 
                    href={project.codeUrl.startsWith('http') ? project.codeUrl : '#'} 
                    target={project.codeUrl.startsWith('http') ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="portfolio__icon-link" 
                    aria-label={`View code for ${project.title}`}
                    onClick={(e) => {
                      // If it's not a real link, stop navigation and show the alert
                      if (!project.codeUrl.startsWith('http')) {
                        e.preventDefault();
                        alert(project.codeUrl);
                      }
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="portfolio__icon-link" aria-label={`Live demo for ${project.title}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="portfolio__card-title">{project.title}</h3>
              <p className="portfolio__card-desc">{project.description}</p>
              <div className="portfolio__card-tags">
                {project.techStack.map((tech) => (
                  <span className="portfolio__tag" key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
