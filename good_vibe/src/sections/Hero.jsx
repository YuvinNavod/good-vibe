import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // 1. Setup Scroll Hooks for Rotation Logic
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"] // Track scroll from top of hero to bottom
  });

  // Map scroll pixels (0px to 500px) to Degrees (0deg to 180deg)
  const rotateValue = useTransform(scrollY, [0, 1000], [0, 360]);
  
  // Optional: Parallax effect to move the images slightly slower than the scroll
  const yValue = useTransform(scrollY, [0, 500], [0, 100]); 

  // --- Existing Animations ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section 
      id="hero" 
      ref={targetRef}
      className="d-flex align-items-center position-relative"
      style={{ 
        minHeight: '100vh', 
        backgroundColor: 'var(--bg-cream)',
        overflow: 'hidden',
        paddingBottom: '150px' // Add padding so text doesn't overlap images
      }}
    >
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--brand-yellow), var(--brand-orange))',
          zIndex: 0
        }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                style={{ 
                  fontSize: 'clamp(3rem, 5vw, 5rem)',
                  fontWeight: '700',
                  background: `linear-gradient(to right, var(--brand-orange), #ff9e00)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem'
                }}
              >
                GoodVibe
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="lead"
                style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1.5rem',
                  fontWeight: '300',
                  marginBottom: '2.5rem'
                }}
              >
                Vibrant living made simple, meaningful, and sustainable.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex justify-content-center gap-3">
                {/* LINKED BUTTON: Goes to Programs */}
                <Button 
                  href="#programs"
                  size="lg"
                  style={{
                    backgroundColor: 'var(--brand-orange)',
                    borderColor: 'var(--brand-orange)',
                    color: '#fff',
                    borderRadius: '50px',
                    padding: '10px 30px'
                  }}
                >
                  Start Your Journey
                </Button>

                {/* LINKED BUTTON: Goes to Philosophy */}
                <Button 
                  href="#philosophy"
                  variant="outline-secondary" 
                  size="lg"
                  style={{ borderRadius: '50px', padding: '10px 30px' }}
                >
                  Explore Philosophy
                </Button>
              </motion.div>

            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* =======================================================
          NEW SCROLL ANIMATION SECTION (Bottom Center)
          ======================================================= */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-150px', // Pulls it down to hide the bottom half initially
          left: '50%',
          x: '-50%', // Centers it horizontally
          y: yValue, // Optional parallax movement
          width: '500px', // Adjust size as needed
          height: '500px',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 1. The Rotating Ring (15.png) - Sits behind or around */}
        <motion.img
          src={process.env.PUBLIC_URL + "/assets/15.png"}
          alt="Rotating Aura"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            rotate: rotateValue // Binds rotation to scroll
          }}
        />

        {/* 2. The Static Center (16.png) - Sits in the middle */}
        <img
          src={process.env.PUBLIC_URL + "/assets/16.png"}
          alt="Static Core"
          style={{
            position: 'absolute',
            width: '40%', // Adjust relative size of center image
            height: '40%',
            objectFit: 'contain',
            zIndex: 2 // Ensures it sits on top of the rotating ring
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;