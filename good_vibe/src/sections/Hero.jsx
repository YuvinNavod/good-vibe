import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section 
      id="hero" 
      className="d-flex align-items-center position-relative"
      style={{ 
        minHeight: '100vh', // Full page height
        backgroundColor: '#ffdb46', 
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(255,92,45,0.15) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }} />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center text-center">
          <Col md={10} lg={9}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Main Topic - Fat letters */}
              <motion.h1 
                variants={itemVariants}
                className="hero-title"
                style={{ fontWeight: 900 }}
              >
                GoodVibe
              </motion.h1>

              {/* Subtitle - Black, Italic, Calm font */}
              <motion.p 
                variants={itemVariants}
                className="hero-subtitle"
              >
                Vibrant living made simple, meaningful, and sustainable.
              </motion.p>

              {/* Buttons - Orange, Black, and White */}
              <motion.div variants={itemVariants} className="d-flex justify-content-center gap-4">
                <Button 
                  href="#programs"
                  className="btn-main-orange"
                >
                  Start Your Journey
                </Button>

                <Button 
                  href="#philosophy"
                  className="btn-outline-dark"
                >
                  Explore Philosophy
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;