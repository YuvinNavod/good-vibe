import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // --- Signature GoodVibe Styles ---
  const headerStyle = {
    color: '#ffdb46', 
    fontWeight: '900', 
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    letterSpacing: '-1px',
    textTransform: 'uppercase'
  };

  const subHeaderStyle = {
    color: '#ffdb46',
    fontWeight: '800',
    fontSize: '2.2rem',
    marginBottom: '1rem'
  };

  const generalTextStyle = {
    lineHeight: '1.8',
    color: '#ffffff',
    fontSize: '1.15rem', 
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", 
    textAlign: 'justify',
    marginBottom: '1rem'
  };

  const sloganTextStyle = {
    lineHeight: '1.6',
    color: '#ffdb46',
    fontSize: '1.3rem', 
    fontFamily: "'Playfair Display', serif", 
    fontStyle: 'italic',
    fontWeight: '700'
  };

  const cardStyle = {
    padding: '2.5rem',
    borderRadius: '40px',
    border: '4px solid #ffdb46', 
    backgroundColor: 'rgba(255, 255, 255, 0.12)', 
    backdropFilter: 'blur(10px)',
    boxShadow: '12px 12px 0px rgba(255, 219, 70, 0.25)', 
    height: '100%',
    overflow: 'hidden'
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="about" 
      style={{ 
        backgroundColor: '#ff5c2d', 
        padding: '100px 0',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden' 
      }}
    >
      <Container style={{ position: 'relative', zIndex: 1 }}>
        
        {/* --- MAIN HEADING --- */}
        <div className="text-center mb-5">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={headerStyle}
          >
            About Us
          </motion.h2>
          <div style={{ width: '80px', height: '6px', backgroundColor: '#ffdb46', margin: '15px auto', borderRadius: '10px' }}></div>
        </div>

        {/* --- SECTION 1: WHO WE ARE --- */}
        <Row className="align-items-center mb-5 gx-5">
          <Col md={6} className="order-md-2 mb-4 mb-md-0">
             <motion.img 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               src={process.env.PUBLIC_URL + "/assets/17.png"} 
               alt="Who We Are" 
               style={{ width: '100%', borderRadius: '30px' }}
             />
          </Col>
          <Col md={6} className="order-md-1">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={cardStyle}
            >
              <h3 style={subHeaderStyle}>Who We Are</h3>
              <p style={generalTextStyle}>
                We are an Advisory Group committed to empowering individuals, groups, communities, and nations to live
                vibrant lives by enhancing their wellbeing and happiness through cultivating vibrant energy across all areas of life.
              </p>
              
              <div className="p-4 mt-4" style={{ 
                borderLeft: '5px solid #ffdb46', 
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '0 20px 20px 0'
              }}>
                <p className="mb-0" style={sloganTextStyle}>
                  “Vibrant living made simple, meaningful, and sustainable”
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* --- SECTION 2: OUR STORY --- */}
        <Row className="align-items-center mb-5 gx-5 py-5">
          <Col md={6} className="mb-4 mb-md-0">
             <motion.img 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               src={process.env.PUBLIC_URL + "/assets/18.gif"} 
               alt="Our Story" 
               style={{ 
                 width: '100%', 
                 borderRadius: '30px', 
                 border: '4px solid #ffdb46',
                 boxShadow: '12px 12px 0px rgba(255, 219, 70, 0.2)'
               }}
             />
          </Col>
          <Col md={6}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={cardStyle}
            >
              <h3 style={subHeaderStyle}>Our Story</h3>
              <div style={generalTextStyle}>
                <p>
                  GoodVibe was born from a belief that every person carries a natural vibrancy waiting to be awakened.
                </p>
                <p>
                  In a world filled with noise, stress, constant demands and immorality, we offer a path back to energy, clarity, connection, meaning and peace.
                </p>
                <p className="mb-0">
                  Our purpose is to inspire people to rise into their highest selves living with passion, balance, and wholehearted joy.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* --- SECTION 3: OUR TEAM --- */}
        <div className="mt-5 pt-5">
          <div className="text-center mb-5">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={headerStyle}
            >
              Our Team
            </motion.h2>
            <p style={{ ...generalTextStyle, color: '#ffdb46', textAlign: 'center', fontWeight: '700' }}>
                A team of 20+ professionals with expertise across multiple vibrant domains
            </p>
          </div>

          <Row className="align-items-center gx-5">
            <Col lg={7} className="mb-4 mb-lg-0">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                style={cardStyle}
              >
                <div style={generalTextStyle}>
                    {/* Visible Content - Shows expertise immediately */}
                    <p>
                      GoodVibe’s programs are delivered by a multidisciplinary team of experienced professionals with expertise across multiple domains.
                    </p>
                    <p>
                      Our multidisciplinary team brings together expertise in holistic wellbeing, mental health and psychological counselling, nature-based therapeutic approaches, physical health promotion, fitness and vitality, nutrition science, financial education, relational and behavioral coaching, gender inclusiveness, diversity and inclusivity management, aesthetic engagement, and data analytics.
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p>
                            Through an evidence-based and outcomes-driven approach, the team designs and implements structured wellbeing interventions aligned with organizational objectives, employee engagement, and sustainable performance. 
                          </p>
                          <p className="mb-0">
                            By integrating scientific insight, ethical practice, and data-informed evaluation, GoodVibe supports individuals, communities, organizations and nations in building resilient, inclusive, and high-performing workforces.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 d-flex align-items-center gap-2"
                      style={{ 
                        backgroundColor: '#ffdb46', 
                        color: '#ff5c2d', 
                        border: 'none', 
                        fontWeight: '800',
                        borderRadius: '50px',
                        padding: '12px 30px',
                        boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
                      }}
                    >
                      {isExpanded ? <><FaMinus /> Show Less</> : <><FaPlus /> Read More</>}
                    </Button>
                </div>
              </motion.div>
            </Col>

            <Col lg={5} className="text-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={process.env.PUBLIC_URL + "/assets/1.gif"} 
                alt="Our Team" 
                style={{ width: '100%', maxWidth: '500px' }}
                whileHover={{ scale: 1.05 }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;