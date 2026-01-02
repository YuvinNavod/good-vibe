import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaYoutube, FaFacebookF, FaTiktok, FaGlobe } from 'react-icons/fa';

const Socials = () => {
  // Social Media Data
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
      className="py-5"
      style={{ 
        // UPDATED: Background color with a smooth gradient
        background: 'linear-gradient(135deg, #ff722f 0%, #ff9e00 100%)',
        position: 'relative',
        padding: '100px 0'
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          
          <Col md={12} className="mb-5">
            {/* Header matches the "Fat" header style from previous sections */}
            <h2 className="display-6 fw-bold" style={{ color: 'var(--brand-yellow)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Join Our Vibrant Community Online
            </h2>
            <div 
              style={{ 
                width: '60px', 
                height: '4px', 
                backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                margin: '15px auto',
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
                      backgroundColor: 'rgba(255, 255, 255, 0.15)', // Enhanced Glass Effect
                      color: '#fff', 
                      borderColor: 'rgba(255, 255, 255, 0.3)'
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
                    width: '75px',
                    height: '75px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)', 
                    backdropFilter: 'blur(8px)',
                    cursor: 'pointer'
                  }}
                >
                  {social.icon}
                </motion.div>
                
                <motion.span
                  variants={{
                    rest: { opacity: 0, y: -10 },
                    hover: { opacity: 1, y: 5 }
                  }}
                  style={{ 
                    display: 'block', 
                    marginTop: '10px', 
                    fontSize: '0.95rem', 
                    color: '#fff', 
                    fontWeight: '600' 
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