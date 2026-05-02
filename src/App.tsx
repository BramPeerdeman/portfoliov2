import React, { useState, useCallback } from 'react';
import './App.css';

// ── Bestaande componenten (ongewijzigd) ──
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// ── Intro ──
import StarField from './components/StarField/StarField';
import StarWarsIntro from './components/StarWarsIntro/StarWarsIntro';

// ── Easter egg terminal ──
import Terminal from './components/Terminal/Terminal';

type AppPhase = 'intro' | 'fading' | 'portfolio';

const App = () => {
  const [phase, setPhase] = useState<AppPhase>(
    () => sessionStorage.getItem('introSeen') === 'true' ? 'portfolio' : 'intro'
  );

  const handleIntroComplete = useCallback(() => {
    setPhase('fading');
    setTimeout(() => {
      sessionStorage.setItem('introSeen', 'true');
      setPhase('portfolio');
    }, 1000);
  }, []);

  return (
    <>
      <StarField />
      <div className={`fade-overlay ${phase === 'fading' ? 'active' : ''}`} />

      {phase === 'intro' && (
        <StarWarsIntro onComplete={handleIntroComplete} />
      )}

      {phase === 'portfolio' && (
        <>
          <Sidebar />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Resume />
            <Portfolio />
            <Contact />
          </main>
          <Footer />

          {/*
            Terminal wordt door zijn eigen useEffect globaal geluisterd (` toets).
            Het staat buiten <main> zodat het altijd bovenop alles staat.
          */}
          <Terminal />
        </>
      )}
    </>
  );
};

export default App;