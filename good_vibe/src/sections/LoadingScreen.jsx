import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  // Brand Colors from previous components
  const brandOrange = "#ff5c2d";
  const brandYellow = "#ffdb46";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(135deg, ${brandYellow} 0%, ${brandOrange} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.3 }}
        className="text-center position-relative"
        style={{ zIndex: 1 }}
      >
        {/* The GIF Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            marginBottom: '30px',
            position: 'relative'
          }}
        >
          <img 
            src={process.env.PUBLIC_URL + "/assets/journey.gif"} 
            alt="The Journey" 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              borderRadius: '40px',
            }} 
          />
          {/* External glow matching the sunrise in the GIF */}
          <div style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120%',
            height: '120%',
            background: `radial-gradient(circle, ${brandYellow} 0%, transparent 60%)`,
            opacity: 0.4,
            zIndex: -1
          }} />
        </motion.div>

        {/* Branding Title - Updated Font to El Messiri */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ 
            color: 'white', 
            fontWeight: '900', 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontFamily: "'El Messiri', sans-serif", // Changed from Poppins to El Messiri
            letterSpacing: '-2px',
            marginBottom: '10px',
            textShadow: '2px 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          GoodVibe
        </motion.h1>

        {/* Thematic Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            color: 'white',
            fontSize: '1.4rem',
            fontWeight: '600',
            opacity: 0.9
          }}
        >
          Starting your vibrant journey...
        </motion.p>

        {/* Progress Bar Container */}
        <div style={{
          width: '200px',
          height: '6px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '10px',
          margin: '30px auto 0',
          overflow: 'hidden'
        }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 6, ease: "linear" }}
            style={{
              height: '100%',
              backgroundColor: 'white',
              boxShadow: '0 0 10px white'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;