import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaYoutube, FaFacebookF, FaTiktok, FaGlobe } from 'react-icons/fa';

const Socials = () => {
  // Theme Colors
  const brandYellow = "#ffdb46";

  const socialLinks = [
    { 
      id: 1, 
      name: "WhatsApp", 
      icon: <FaWhatsapp size={30} />, 
      url: "https://wa.me/YOUR_PHONE_NUMBER_HERE", 
      color: "#25D366" 
    },
    { 
      id: 2, 
      name: "YouTube", 
      icon: <FaYoutube size={30} />, 
      url: "https://www.youtube.com/results?search_query=Goodvibe+By+Wealthy+Nation", 
      color: "#FF0000" 
    },
    { 
      id: 3, 
      name: "Facebook", 
      icon: <FaFacebookF size={30} />, 
      url: "https://www.facebook.com/Goodvibe", 
      color: "#1877F2" 
    },
    { 
      id: 4, 
      name: "TikTok", 
      icon: <FaTiktok size={30} />, 
      url: "https://www.tiktok.com/@Goodvibe", 
      color: "#000000" 
    },
    { 
      id: 5, 
      name: "Website", 
      icon: <FaGlobe size={30} />, 
      url: "https://www.goodvibe.lk", 
      color: "#007bff" 
    },
  ];

  return (
    <section 
      id="socials"
      style={{ 
        background: 'linear-gradient(135deg, #ff722f 0%, #ff9e00 100%)',
        position: 'relative',
        padding: '120px 0',
        // FIX: This ensures the heading is visible below the fixed Navbar
        scrollMarginTop: '90px' 
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          
          <Col md={12} className="mb-5">
            {/* Header updated to match "Fat" header style */}
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ 
                color: brandYellow, 
                fontWeight: '900', 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                lineHeight: '1.1'
              }}
            >
              Join Our Vibrant <br className="d-md-none" /> Community Online
            </motion.h2>
            <div 
              style={{ 
                width: '80px', 
                height: '6px', 
                backgroundColor: brandYellow, 
                margin: '20px auto',
                borderRadius: '10px'
              }} 
            />
          </Col>

          <Col md={10} className="d-flex justify-content-center flex-wrap gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  variants={{
                    rest: { 
                      scale: 1, 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      color: '#fff', 
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    hover: { 
                      scale: 1.15, 
                      backgroundColor: social.color, 
                      color: '#fff',
                      borderColor: social.color
                    }
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', 
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                >
                  {social.icon}
                </motion.div>
                
                <motion.span
                  variants={{
                    rest: { opacity: 0, y: -5 },
                    hover: { opacity: 1, y: 5 }
                  }}
                  style={{ 
                    display: 'block', 
                    marginTop: '12px', 
                    fontSize: '1rem', 
                    color: '#fff', 
                    fontWeight: '800',
                    textTransform: 'uppercase'
                  }}
                >
                  {social.name}
                </motion.span>
              </motion.a>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Socials;