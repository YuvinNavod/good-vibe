import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const steps = [
    {
      id: 1,
      title: "Purpose",
      quote: "“A vibrant life for everyone.”",
      description: "At GoodVibe, we believe life is meant to be lived fully, joyfully, and with purpose. Our purpose is to empower every individual to experience life that is vibrant in every way. We help you live vibrantly through simplicity, meaningful choices, and sustainable habits that nurture both your wellbeing and the world around you.",
      accentColor: "#ff5c2d", 
      image: "/assets/purpose_main.png" 
    },
    {
      id: 2,
      title: "Vision",
      quote: "“A vibrant world awakened by purpose, clarity, energy and vitality.”",
      description: "We envision a vibrant world where every life is awakened by purpose, clarity, energy, and vitality. A world in which people live with deeper meaning, brighter focus, and a renewed sense of wellbeing.",
      accentColor: "#ff5c2d", 
      image: "/assets/vision_main.png" 
    },
    {
      id: 3,
      title: "Mission",
      quote: "“Ignite your best self.”",
      description: "Our mission is to gently awaken the inner potential within each person, helping them live with purpose, meaning, clarity & vitality. A vibrant life doesn’t need to be complicated. Through simple practices, meaningful choices, and sustainable actions, we empower you to ignite your best self and thrive every day.",
      accentColor: "#ff5c2d", 
      image: "/assets/mission_main.gif" 
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
            <span style={{ fontFamily: "'El Messiri', sans-serif", textTransform: 'none' }}>GoodVibe</span> PHILOSOPHY
          </motion.h2>
          <div style={{ width: '80px', height: '5px', backgroundColor: '#ff5c2d', margin: '15px auto' }}></div>
        </div>

        {/* Philosophy Blocks */}
        <div className="d-flex flex-column gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  backdropFilter: 'blur(10px)',
                  minHeight: '450px' // Ensures consistent height for balance
                }}
              >
                <Row className={`g-0 align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Image Column - Balanced 50% split */}
                  <Col lg={6} className="p-0">
                    <div style={{ height: '100%', width: '100%', overflow: 'hidden', minHeight: '450px' }}>
                      <Card.Img 
                        src={process.env.PUBLIC_URL + step.image} 
                        alt={step.title}
                        style={{ 
                          height: '100%', 
                          width: '100%', 
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>
                  </Col>

                  {/* Text Content Column - Balanced 50% split */}
                  <Col lg={6} className="p-4 p-lg-5 text-start d-flex flex-column justify-content-center">
                    <h3 style={{ 
                      color: step.accentColor, 
                      fontWeight: '900', 
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)', // High impact title
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem'
                    }}>
                      {step.title}
                    </h3>
                    
                    <p style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                      fontWeight: '700',
                      color: '#444', 
                      marginBottom: '1rem'
                    }}>
                      {step.quote}
                    </p>

                    <div style={{ 
                      width: '60px', 
                      height: '3px', 
                      backgroundColor: step.accentColor, 
                      marginBottom: '1.5rem' 
                    }}></div>

                    <p style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.7', 
                      color: '#212529',
                      fontWeight: '500',
                      textAlign: 'left',
                      marginBottom: 0
                    }}>
                      {/* Consistent use of El Messiri for GoodVibe in body text */}
                      {step.description.split('GoodVibe').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span style={{ fontFamily: "'El Messiri', sans-serif", fontWeight: '700' }}>GoodVibe</span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
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