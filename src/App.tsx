import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle initial route
    const hash = window.location.hash.slice(1) || '/';
    if (hash === '/about') setCurrentPage('about');
    else if (hash === '/projects') setCurrentPage('projects');
    else if (hash === '/resume') setCurrentPage('resume');
    else setCurrentPage('home');

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      if (hash === '/about') setCurrentPage('about');
      else if (hash === '/projects') setCurrentPage('projects');
      else if (hash === '/resume') setCurrentPage('resume');
      else setCurrentPage('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top smoothly when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  if (currentPage === 'about') {
    return <About navigate={navigate} />;
  }

  if (currentPage === 'projects') {
    return <Projects navigate={navigate} />;
  }

  if (currentPage === 'resume') {
    return <Resume navigate={navigate} />;
  }

  return <Portfolio navigate={navigate} />;
}