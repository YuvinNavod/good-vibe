import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  // --- Animation Variants ---
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
      className="d-flex align-items-center position-relative"
      style={{ 
        minHeight: '100vh', 
        overflow: 'hidden',
        paddingBottom: '150px' 
      }}
    >
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }} 
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: '#fff', 
          filter: 'blur(80px)', 
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
                  fontSize: 'clamp(3rem, 5vw, 6rem)', 
                  fontWeight: '700',
                  color: 'var(--brand-yellow)', 
                  textShadow: '0 4px 15px rgba(0,0,0,0.1)', 
                  marginBottom: '1rem'
                }}
              >
                GoodVibe
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="lead"
                style={{ 
                  color: '#fff', 
                  fontSize: '1.5rem',
                  fontWeight: '300',
                  marginBottom: '2.5rem',
                  opacity: 0.95
                }}
              >
                Vibrant living made simple, meaningful, and sustainable.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex justify-content-center gap-3">
                <Button 
                  href="#programs"
                  size="lg"
                  style={{
                    backgroundColor: 'var(--brand-yellow)',
                    borderColor: 'var(--brand-yellow)',
                    color: '#e65100', 
                    borderRadius: '50px',
                    padding: '12px 35px',
                    fontWeight: 'bold'
                  }}
                >
                  Start Your Journey
                </Button>

                <Button 
                  href="#philosophy"
                  variant="outline-light" 
                  size="lg"
                  style={{ borderRadius: '50px', padding: '12px 35px' }}
                >
                  Explore Philosophy
                </Button>
              </motion.div>

            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* =======================================================
          MARQUEE SECTION 
          ======================================================= */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '50px', 
          left: '0',
          width: '100%',
          // REMOVED: y: yValue (This stops it from moving down on scroll)
          zIndex: 1,
          display: 'flex',
          overflow: 'hidden', 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        {/* The Track */}
        <motion.div
          style={{ 
            display: 'flex', 
            width: 'max-content', 
            alignItems: 'center'
          }}
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 100 
          }}
        >
          {/* Image 1 */}
          <img
            src={process.env.PUBLIC_URL + "/assets/vibrants-strip.png"}
            alt="Vibrant Life Icons"
            style={{
              height: '15vh',       
              minHeight: '100px',   
              width: 'auto',        
              marginRight: '-1px',  
              mixBlendMode: 'multiply', 
              opacity: 1
            }}
          />
          
          {/* Image 2 (Duplicate) */}
          <img
            src={process.env.PUBLIC_URL + "/assets/vibrants-strip.png"}
            alt="Vibrant Life Icons Loop"
            style={{
              height: '15vh',
              minHeight: '100px',
              width: 'auto',
              marginRight: '-1px',
              mixBlendMode: 'multiply',
              opacity: 1
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;