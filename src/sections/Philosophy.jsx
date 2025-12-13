import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll } from 'framer-motion';

const Philosophy = () => {
  // Corrected Data - Cleaned of all citation tags
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
      color: "var(--brand-orange)"
    },
    {
      id: 3,
      title: "Mission",
      quote: "“Ignite your best self.”",
      description: "Our mission is to gently awaken the inner potential within each person, helping them live with purpose, meaning, clarity & vitality. A vibrant life doesn’t need to be complicated. Through simple practices, meaningful choices, and sustainable actions, we empower you to ignite your best self and thrive every day.",
      color: "#ff9e00"
    }
  ];

  const targetRef = useRef(null);
  
  // Track scroll progress specifically for this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // State to track which slide is active based on scroll
  const [activeStep, setActiveStep] = useState(0);

  // Update active step based on scroll position
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.33) setActiveStep(0);
      else if (latest < 0.66) setActiveStep(1);
      else setActiveStep(2);
    });
  }, [scrollYProgress]);

  return (
    <section 
      ref={targetRef} 
      id="philosophy"
      style={{ 
        height: '300vh', // Tall section for scrolling effect
        position: 'relative' 
      }}
    >
      {/* Sticky Container */}
      <div 
        className="sticky-top d-flex align-items-center justify-content-center"
        style={{ 
          height: '100vh', 
          backgroundColor: 'var(--bg-cream)',
          overflow: 'hidden'
        }}
      >
        {/* Background Decorative Circle */}
        <motion.div
          animate={{
            backgroundColor: steps[activeStep].color,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            opacity: 0.08,
            zIndex: 0,
            filter: 'blur(80px)',
          }}
        />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              
              <h5 
                className="text-uppercase mb-4" 
                style={{ letterSpacing: '3px', color: 'var(--text-muted)' }}
              >
                Our Philosophy
              </h5>

              <div style={{ position: 'relative', minHeight: '400px' }}>
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ 
                      opacity: activeStep === index ? 1 : 0,
                      y: activeStep === index ? 0 : 50,
                      scale: activeStep === index ? 1 : 0.95,
                      display: activeStep === index ? 'block' : 'none'
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      margin: 'auto'
                    }}
                  >
                    <h2 
                      className="display-4 fw-bold mb-4" 
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h2>

                    <div className="mb-4">
                      <p 
                        className="fs-3 fst-italic" 
                        style={{ color: 'var(--text-dark)', fontFamily: 'Georgia, serif' }}
                      >
                        {step.quote}
                      </p>
                    </div>

                    <hr 
                      style={{ 
                        width: '50px', 
                        margin: '0 auto 30px', 
                        borderTop: `3px solid ${step.color}`,
                        opacity: 1
                      }} 
                    />

                    <p 
                      className="lead" 
                      style={{ color: '#555', lineHeight: '1.8' }}
                    >
                      {step.description}
                    </p>

                  </motion.div>
                ))}
              </div>

              {/* Scroll Indicators (Dots) */}
              <div className="d-flex justify-content-center gap-2 mt-5">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: activeStep === index ? 1.5 : 1,
                      backgroundColor: activeStep === index ? 'var(--brand-orange)' : '#ccc'
                    }}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
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