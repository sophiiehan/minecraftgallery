import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import './index.css';
import HomeHeader from './pages/HomeHeader';
import Background from './pages/Background';
import GalleryHeader from './components/GalleryHeader';
import Gallery from './pages/Gallery';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Background>
      <HomeHeader />
      <GalleryHeader />
      <Gallery />
    </Background>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
