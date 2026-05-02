import { useState } from 'react';
import './StarWarsIntro.css';

type Phase = 'prelude' | 'logo' | 'crawl';

interface Props {
  onComplete: () => void;
}

export default function StarWarsIntro({ onComplete }: Props) {
  const [phase, setPhase] = useState<Phase>('prelude');

  return (
    <div className="sw-wrapper">

      {/* Fase 1: "A long time ago…" */}
      {phase === 'prelude' && (
        <p
          className="sw-prelude"
          onAnimationEnd={() => setPhase('logo')}
        >
          A long time ago in a city called Delft, far, far away….
        </p>
      )}

      {/* Fase 2: Logo */}
      {phase === 'logo' && (
        <div
          className="sw-logo"
          onAnimationEnd={() => setPhase('crawl')}
        >
          BRAM PEERDEMAN
        </div>
      )}

      {/* Fase 3: De crawl */}
      {phase === 'crawl' && (
        <div className="sw-crawl-container">
          <div
            className="sw-crawl"
            onAnimationEnd={onComplete}
          >
            <p className="sw-crawl-episode">Episode II</p>
            <h2 className="sw-crawl-title">The Full-Stack Strikes Back</h2>

            <p>
              In a galaxy of endless frameworks and midnight deployments,
              one developer dares to build things that actually work.
              Bram Peerdeman — Software Engineer, DevOps practitioner,
              and relentless problem-solver — has entered the arena.
            </p>

            <p>
              Based in Delft, The Netherlands, Bram forged his skills
              at Grafisch Lyceum before ascending to De Haagse Hogeschool,
              where he continues his HBO Software Engineering studies to
              this day.
            </p>

            <p>
              In the field, he served two tours at SocyList — first as
              Intern Software Developer, engineering an automated website
              scanner with TypeScript and Playwright, then returning as
              DevOps Engineer to master CI/CD pipelines, infrastructure,
              and the dark arts of automation.
            </p>

            <p>
              His arsenal spans the full stack: Java &amp; Spring Boot on
              the backend, React &amp; TypeScript on the front, Docker
              in the engine room, and Linux holding it all together.
              10+ projects completed. 2+ years in the field.
              Continuous learner — always.
            </p>

            <p>
              The portfolio you are about to enter contains classified
              project files, a detailed mission log, and a direct
              communications channel.
            </p>

            <p>
              May the code be with you….
            </p>
          </div>
        </div>
      )}

      {/* Vignette — altijd actief tijdens intro */}
      <div className="sw-vignette" />

      {/* Skip-knop — altijd zichtbaar */}
      <button className="sw-skip" onClick={onComplete}>
        SKIP INTRO ›
      </button>

    </div>
  );
}
