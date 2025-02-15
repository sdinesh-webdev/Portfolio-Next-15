import React from 'react';
import { Intro } from './Intro';
import Experience from './Experience';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';
import './globals.css';

const Layout: React.FC = () => {
  return (
    <>
      <header className="header-section w-full">
        <Intro />
      </header>
      <main className="main-section w-full">
        <Experience />
        <Certificates />
        <Projects />
      </main>
      <footer className="footer-section w-full">
        <Contact />
      </footer>
    </>
  );
};

export default Layout;