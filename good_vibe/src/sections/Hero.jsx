import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.25, 
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      id="hero" 
      className="d-flex align-items-center position-relative"
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#fece17', 
        overflow: 'hidden',
        padding: 0 
      }}
    >
      {/* --- BACKGROUND VIDEO LAYER (FULL SCREEN) --- */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center', 
            transform: 'none', 
            opacity: 1
          }}
        >
          <source src={process.env.PUBLIC_URL + "/assets/hero.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* BRIGHT GRADIENT OVERLAY: Removed dark vignette, added white light */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // Gradient now goes from subtle white to transparent, removing all darkness
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* CONTENT CONTAINER - Nudged up further to clear the face elements */}
      <Container 
        className="position-relative" 
        style={{ 
          zIndex: 2, 
          marginTop: '-12vh' 
        }}
      >
        <Row className="justify-content-center text-center">
          <Col md={10} lg={9}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Main Topic - El Messiri Font */}
              <motion.h1 
                variants={itemVariants}
                style={{ 
                  fontFamily: "'El Messiri', sans-serif",
                  fontWeight: 700, 
                  color: '#ff5c2d', 
                  fontSize: 'clamp(4rem, 12vw, 8.5rem)', 
                  textTransform: 'uppercase',
                  letterSpacing: '-3px',
                  marginBottom: '0.8rem',
                  lineHeight: '0.85',
                  textShadow: '0 4px 20px rgba(255, 92, 45, 0.15)'
                }} 
              >
                GoodVibe
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic', 
                  color: '#212529',
                  fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', 
                  fontWeight: '600',
                  marginBottom: '2.5rem',
                  opacity: 0.95
                }}
              >
                Vibrant living made simple, meaningful, and sustainable.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                variants={itemVariants} 
                className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 gap-sm-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    href="#programs"
                    style={{ 
                      backgroundColor: '#ff5c2d', 
                      border: 'none', 
                      fontWeight: '800',
                      borderRadius: '50px',
                      padding: '14px 40px', 
                      fontSize: '1.1rem',
                      boxShadow: '0 12px 25px rgba(255, 92, 45, 0.3)',
                      transition: 'all 0.3s ease',
                      minWidth: '220px'
                    }}
                  >
                    Start Your Journey
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    href="#philosophy"
                    variant="outline-dark"
                    style={{ 
                      fontWeight: '800',
                      borderRadius: '50px',
                      padding: '14px 40px',
                      fontSize: '1.1rem',
                      borderWidth: '3px',
                      transition: 'all 0.3s ease',
                      minWidth: '220px',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    Explore Philosophy
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Scroll to discover - Changed to dark for better contrast on bright background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          color: '#fff', // Changed to dark color
          fontSize: '0.85rem',
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          // Removed dark shadow, added a subtle light glow for contrast
          textShadow: '0 0 10px rgba(255,255,255,0.5)' 
        }}
      >
        Scroll to discover
      </motion.div>
    </section>
  );
};

export default Hero;