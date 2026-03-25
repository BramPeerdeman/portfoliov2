import React, { useState } from 'react';
import './sidebar.css';

const navLinks = [
  { href: '#home', label: 'Home', icon: 'icon-home' },
  { href: '#about', label: 'About', icon: 'icon-user-following' },
  { href: '#skills', label: 'Skills', icon: 'icon-wrench' },
  { href: '#resume', label: 'Experience', icon: 'icon-graduation' },
  { href: '#portfolio', label: 'Projects', icon: 'icon-layers' },
  { href: '#contact', label: 'Contact', icon: 'icon-bubble' },
];

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'} role="navigation" aria-label="Main navigation">
        <div className="nav_logo-wrapper">
          <a href="#home" className="nav_logo" aria-label="Home">
            BP
          </a>
        </div>
        <nav className="nav">
          <ul className="nav_list">
            {navLinks.map((link) => (
              <li className="nav_item" key={link.href}>
                <a
                  href={link.href}
                  className="nav_link"
                  aria-label={link.label}
                  onClick={() => showMenu(false)}
                >
                  <i className={link.icon} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav_footer">
          <span className="copyright">&copy; {new Date().getFullYear()}</span>
        </div>
      </aside>

      <button
        className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
        onClick={() => showMenu(!toggle)}
        aria-label={toggle ? 'Close navigation' : 'Open navigation'}
        aria-expanded={toggle}
      >
        <i className={toggle ? 'icon-close' : 'icon-menu'} aria-hidden="true"></i>
      </button>
    </>
  );
};

export default Sidebar;
