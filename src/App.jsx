import React from 'react';
import ThemeProvider from './context/ThemeContext';
import NavBar from './components/NavBar';
import LayoutExamples from './components/LayoutExamples';

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <main>
        <header className="py-5 border-bottom">
          <div className="container">
            <h1 className="fw-bold">React Navbar + Layout Kit</h1>
            <p className="text-body-secondary mb-0">
              Bootstrap 5 offcanvas navigation, dark mode toggle (saved to localStorage),
              and ready-to-copy layout patterns (grid, cards, forms).
            </p>
          </div>
        </header>
        <LayoutExamples />
        <footer className="py-4 border-top">
          <div className="container small text-body-secondary">
            Built with React + Vite + Bootstrap.
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}
