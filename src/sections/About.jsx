import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const About = () => {
  // --- Data ---
  const teamMembers = [
    {
      name: "Subodhanie Dissanayake",
      role: "GoodVibe Lead Advisor",
      icon: <FaUser size={30} color="#FF5F2D" /> // Orange Icon
    },
    {
      name: "Thilini Fernando",
      role: "GoodVibe Programs & Projects Lead",
      icon: <FaUser size={30} color="#FF5F2D" />
    },
    {
      name: "Anuththara Gunesekara",
      role: "Data, Analytics & Social Media Lead",
      icon: <FaUser size={30} color="#FF5F2D" />
    }
  ];

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section 
      id="about" 
      style={{ 
        // REMOVED: backgroundColor: 'var(--bg-light-orange)' -> Allows global gradient to show
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Blob (White Glow) */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '-5%',
        width: '300px',
        height: '300px',
        backgroundColor: '#fff', // White glow
        opacity: 0.1,
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        
        {/* --- MAIN HEADING --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 style={{ color: 'var(--brand-yellow)', fontWeight: '700', letterSpacing: '2px' }}>ABOUT US</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#fff', margin: '10px auto', opacity: 0.5 }}></div>
        </motion.div>

        {/* --- SECTION 1: WHO WE ARE --- */}
        <Row className="align-items-center mb-5 gx-5">
          <Col md={6} className="order-md-2 mb-4 mb-md-0">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
                <img 
                  src={process.env.PUBLIC_URL + "/assets/17.png"} 
                  alt="Who We Are - Community" 
                  style={{
                    width: '100%'
                  }}
                />
             </motion.div>
          </Col>
          <Col md={6} className="order-md-1">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="mb-3" style={{ color: 'var(--brand-yellow)' }}>Who We Are</h3>
              <p style={{ lineHeight: '1.8', color: '#fff', opacity: 0.9 }}>
                We are an Advisory Group committed to empowering individuals, groups, communities, and nations to live
                vibrant lives by enhancing their well-being and happiness through cultivating vibrant energy across all areas of life.
              </p>
              
              {/* Glass Box Quote */}
              <div className="p-4 mt-3 glass-card" style={{ borderLeft: '4px solid var(--brand-yellow)' }}>
                <p className="mb-0 fst-italic fw-bold" style={{ color: '#fff' }}>
                  “Vibrant living made simple, meaningful, and sustainable”
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* --- SECTION 2: OUR STORY --- */}
        <Row className="align-items-center mb-5 gx-5">
          <Col md={6} className="mb-4 mb-md-0">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <img 
                  src={process.env.PUBLIC_URL + "/assets/18.png"} 
                  alt="Our Story - Breaking Free" 
                  style={{
                    width: '100%'
                  }}
                />
             </motion.div>
          </Col>
          <Col md={6}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="mb-3" style={{ color: 'var(--brand-yellow)' }}>Our Story</h3>
              <p style={{ lineHeight: '1.8', color: '#fff', opacity: 0.9 }}>
                GoodVibe was born from a belief that every person carries a natural vibrancy waiting to be awakened.
              </p>
              <p style={{ lineHeight: '1.8', color: '#fff', opacity: 0.9 }}>
                In a world filled with noise, stress, constant demands and immorality, we offer a path back to energy, clarity, connection, meaning and peace.
              </p>
              <p style={{ lineHeight: '1.8', color: '#fff', opacity: 0.9 }}>
                Our purpose is to inspire people to rise into their highest selves—living with passion, balance, and wholehearted joy.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* --- SECTION 3: OUR TEAM --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-5"
        >
          <div className="text-center mb-5">
            <h3 style={{ color: 'var(--brand-yellow)' }}>Our Team</h3>
            <p style={{ color: '#fff', opacity: 0.8 }}>A team of 20+ professionals with expertise across multiple vibrant domains</p>
          </div>

          <Row className="justify-content-center">
            {teamMembers.map((member, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <motion.div variants={fadeInUp}>
                  <Card 
                    className="h-100 text-center glass-card border-0" // ADDED glass-card class
                    style={{ 
                      borderRadius: '15px', 
                      transition: 'transform 0.3s ease',
                      // Removed explicit backgroundColor so glass effect works
                    }}
                  >
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                      <div 
                        className="mb-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          backgroundColor: '#fff', // White circle behind icon
                          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}
                      >
                        {member.icon}
                      </div>
                      <Card.Title style={{ fontWeight: '600', color: 'var(--brand-orange)' }}>
                        {member.name}
                      </Card.Title>
                      <Card.Text style={{ fontSize: '0.9rem', color: '#333' }}> {/* Dark text for readability on glass card */}
                        {member.role}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

      </Container>
    </section>
  );
};

export default About;