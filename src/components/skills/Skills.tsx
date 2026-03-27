import React from 'react';
import './skills.css';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
    ),
    skills: ['Java (Spring Boot)', 'Node.js & Express', 'Python (Pandas / Data)', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Web',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    skills: ['React.js & Hooks', 'TypeScript', 'SCSS / Responsive UI', 'Vite & Build Tools', 'State Management', 'API Integration'],
  },
  {
    title: 'Infrastructure',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
    ),
    skills: ['Linux', 'Firewall Management', 'SSL/TLS', 'Scripting & Automation'],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <span className="section__subtitle">What I work with</span>
        <h2 className="section__title">Skills</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__card" key={group.title}>
              <div className="skills__card-header">
                <span className="skills__card-icon">{group.icon}</span>
                <h3 className="skills__card-title">{group.title}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
