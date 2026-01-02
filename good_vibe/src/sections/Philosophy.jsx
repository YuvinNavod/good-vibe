import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const steps = [
    {
      id: 1,
      title: "Purpose",
      quote: "“A vibrant life for everyone.”",
      description: "At GoodVibe, we believe life is meant to be lived fully, joyfully, and with purpose. Our purpose is to empower every individual to experience life that is vibrant in every way. We help you live vibrantly through simplicity, meaningful choices, and sustainable habits that nurture both your well-being and the world around you.",
      accentColor: "#ff5c2d", // Purpose Orange
      image: "/assets/purpose_main.png" 
    },
    {
      id: 2,
      title: "Vision",
      quote: "“A vibrant world awakened by purpose, clarity, energy and vitality in every life.”",
      description: "We envision a vibrant world where every life is awakened by purpose, clarity, energy, and vitality. A world in which people live with deeper meaning, brighter focus, and a renewed sense of well-being.",
      accentColor: "#ff5c2d", // Standardized to Orange
      image: "/assets/vision_main.jpg" 
    },
    {
      id: 3,
      title: "Mission",
      quote: "“Ignite your best self.”",
      description: "Our mission is to gently awaken the inner potential within each person, helping them live with purpose, meaning, clarity & vitality. A vibrant life doesn’t need to be complicated. Through simple practices, meaningful choices, and sustainable actions, we empower you to ignite your best self and thrive every day.",
      accentColor: "#ff5c2d", // Standardized to Orange
      image: "/assets/mission_main.jpg" 
    },
  ];

  return (
    <section 
      id="philosophy" 
      style={{ 
        padding: '100px 0',
        background: 'linear-gradient(135deg, #ffdb46 0%, #ffc107 100%)',
        overflow: 'hidden'
      }}
    >
      <Container>
        {/* Main Section Topic */}
        <div className="text-center mb-5 pb-lg-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: '#ff5c2d', 
              fontWeight: '900', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              textTransform: 'uppercase' 
            }}
          >
            Good Vibe Philosophy
          </motion.h2>
          <div style={{ width: '80px', height: '5px', backgroundColor: '#ff5c2d', margin: '15px auto' }}></div>
        </div>

        {/* Philosophy Blocks */}
        <div className="d-flex flex-column gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card 
                className="border-0 shadow-sm"
                style={{ 
                  borderRadius: '40px', 
                  overflow: 'hidden', 
                  backgroundColor: 'rgba(255, 255, 255, 0.4)', 
                  border: `4px solid ${step.accentColor}`, 
                  boxShadow: `15px 15px 0px ${step.accentColor}`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Row className={`g-0 align-items-stretch ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Text Content Column */}
                  <Col lg={7} className="p-4 p-lg-5 text-start">
                    <h3 style={{ 
                      color: step.accentColor, 
                      fontWeight: '900', 
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      textTransform: 'uppercase',
                      marginBottom: '1rem'
                    }}>
                      {step.title}
                    </h3>
                    
                    <p style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      fontWeight: '700',
                      // FIXED: Color is now consistently step.accentColor (#ff5c2d)
                      color: step.accentColor, 
                      marginBottom: '1.5rem'
                    }}>
                      {step.quote}
                    </p>

                    <div style={{ 
                      width: '50px', 
                      height: '3px', 
                      backgroundColor: step.accentColor, 
                      marginBottom: '1.5rem' 
                    }}></div>

                    <p style={{ 
                      fontSize: '1.15rem', 
                      lineHeight: '1.8', 
                      color: '#212529',
                      fontWeight: '500',
                      textAlign: 'justify' 
                    }}>
                      {step.description}
                    </p>
                  </Col>

                  {/* Image Column */}
                  <Col lg={5} style={{ minHeight: '400px' }}>
                    <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
                      <Card.Img 
                        src={process.env.PUBLIC_URL + step.image} 
                        alt={step.title}
                        style={{ 
                          height: '100%', 
                          width: '100%', 
                          objectFit: 'cover',
                          borderLeft: index % 2 === 0 ? `4px solid ${step.accentColor}` : 'none',
                          borderRight: index % 2 !== 0 ? `4px solid ${step.accentColor}` : 'none'
                        }}
                      />
                    </div>
                  </Col>

                </Row>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;