import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function getPage(pathname: string): string {
  if (pathname === '/about') return 'about';
  if (pathname === '/projects') return 'projects';
  if (pathname === '/resume') return 'resume';
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPage(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPage(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPage(getPage(path));
  };

  if (currentPage === 'about') return <About navigate={navigate} />;
  if (currentPage === 'projects') return <Projects navigate={navigate} />;
  if (currentPage === 'resume') return <Resume navigate={navigate} />;
  return <Portfolio navigate={navigate} />;
}