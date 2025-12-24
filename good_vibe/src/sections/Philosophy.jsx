import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const Philosophy = () => {
  const steps = [
    {
      id: 1,
      title: "Purpose",
      quote: "“A vibrant life for everyone.”",
      description: "At GoodVibe, we believe life is meant to be lived fully, joyfully, and with purpose. Our purpose is to empower every individual to experience life that is vibrant in every way. We help you live vibrantly through simplicity, meaningful choices, and sustainable habits that nurture both your well-being and the world around you.",
      color: "var(--brand-yellow)"
    },
    {
      id: 2,
      title: "Vision",
      quote: "“A vibrant world awakened by purpose, clarity, energy and vitality in every life.”",
      description: "We envision a vibrant world where every life is awakened by purpose, clarity, energy, and vitality. A world in which people live with deeper meaning, brighter focus, and a renewed sense of well-being.",
      color: "var(--brand-yellow)"
    },
    {
      id: 3,
      title: "Mission",
      quote: "“Ignite your best self.”",
      description: "Our mission is to gently awaken the inner potential within each person, helping them live with purpose, meaning, clarity & vitality. A vibrant life doesn’t need to be complicated. Through simple practices, meaningful choices, and sustainable actions, we empower you to ignite your best self and thrive every day.",
      color: "var(--brand-yellow)"
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.33) setActiveStep(0);
      else if (latest < 0.66) setActiveStep(1);
      else setActiveStep(2);
    });
  }, [scrollYProgress]);

  // Helper to get current data
  const currentData = steps[activeStep];

  return (
    <section 
      ref={targetRef} 
      id="philosophy"
      style={{ height: '300vh', position: 'relative' }}
    >
      {/* Sticky Container */}
      <div 
        className="sticky-top d-flex align-items-center justify-content-center"
        style={{ 
          height: '100vh', 
          overflow: 'hidden'
        }}
      >
        {/* Background Decorative Circle - White Glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            width: '60vw', height: '60vw',
            borderRadius: '50%',
            backgroundColor: '#fff', 
            opacity: 0.1, 
            zIndex: 0,
            filter: 'blur(80px)',
          }}
        />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              
              <h5 
                className="text-uppercase mb-4" 
                style={{ letterSpacing: '3px', color: 'rgba(255,255,255,0.8)' }} 
              >
                Our Philosophy
              </h5>

              {/* Glass Card Container for Text */}
              <div 
                className="glass-card p-5" 
                style={{ 
                  // REMOVED fixed height. 
                  // Added transition to smooth out height changes
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
              >
                {/* AnimatePresence handles the smooth fade between texts */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentData.id} // Key change triggers animation
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 
                        className="display-4 fw-bold mb-4" 
                        style={{ color: 'var(--brand-yellow)' }}
                        >
                        {currentData.title}
                        </h2>

                        <div className="mb-4">
                        <p 
                            className="fs-3 fst-italic" 
                            style={{ color: '#fff', fontFamily: 'Georgia, serif' }}
                        >
                            {currentData.quote}
                        </p>
                        </div>

                        <hr 
                        style={{ 
                            width: '50px', margin: '0 auto 30px', 
                            borderTop: `3px solid var(--brand-yellow)`, opacity: 1 
                        }} 
                        />

                        <p 
                        className="lead mb-0" // mb-0 removes extra bottom space
                        style={{ color: '#fff', lineHeight: '1.8', opacity: 0.9 }} 
                        >
                        {currentData.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
              </div>

              {/* Scroll Indicators (Dots) */}
              <div className="d-flex justify-content-center gap-2 mt-5">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: activeStep === index ? 1.5 : 1,
                      backgroundColor: activeStep === index ? 'var(--brand-yellow)' : 'rgba(255,255,255,0.5)'
                    }}
                    style={{
                      width: '10px', height: '10px', borderRadius: '50%',
                    }}
                  />
                ))}
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Philosophy;