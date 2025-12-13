import React from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Vibrants from './sections/Vibrants';
import Programs from './sections/Programs';
import Socials from './sections/Socials';
import Testimonials from './sections/Testimonials'; 
import Footer from './sections/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Philosophy />
      <Vibrants />
      <Programs />
      <Socials />
      <Testimonials />
      <Footer />
      {/* We will add About, Vibrants, and Programs sections here later */}
    </div>
  );
}

export default App;