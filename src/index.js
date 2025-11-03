import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeHeader from './pages/HomeHeader';
import Background from './pages/Background';
import GalleryHeader from './components/GalleryHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background>
      <HomeHeader />
      <GalleryHeader />
    </Background>
  </React.StrictMode>
);
