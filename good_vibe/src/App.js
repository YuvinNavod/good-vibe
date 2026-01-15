import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './sections/LoadingScreen'; // Import the loader
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import MarqueeSection from './sections/MarqueeSection';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Vibrants from './sections/Vibrants';
import GuidingPrinciples from './sections/GuidingPrinciples';
import Programs from './sections/Programs';
import Socials from './sections/Socials';
import Testimonials from './sections/Testimonials'; 
import Footer from './sections/Footer';
import './App.css'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6500); // 6.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* AnimatePresence handles the exit animation of the loader */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Website Content */}
      <Navigation />
      <Hero />
      <MarqueeSection />
      <About />
      <Philosophy />
      <Vibrants />
      <GuidingPrinciples />
      <Programs />
      <Socials />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;