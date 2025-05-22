import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import GallerySection from './components/GallerySection';
import WishesSection from './components/WishesSection';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import AudioPlayer from './components/AudioPlayer';

function App() {
  // Set the document title
  useEffect(() => {
    document.title = "For Fidhaa ❤️";
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      <BackgroundParticles />
      <Header />
      <main>
        <HeroSection />
        <MessageSection />
        <GallerySection />
        <WishesSection />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;