import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
// Imported the specific icons you need
import { FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ position: 'relative', marginTop: '50px' }}>
      
      {/* ==============================================
          PART 1: CTA SECTION (Join Community)
          ============================================== */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          marginBottom: '-80px' 
        }}
      >
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-5 text-center text-white"
            style={{
              background: 'linear-gradient(135deg, var(--brand-orange), #ff9e00)',
              borderRadius: '30px',
              boxShadow: '0 20px 50px rgba(255, 95, 45, 0.3)'
            }}
          >
            <h2 className="fw-bold mb-3">Start Your Vibrant Journey Today</h2>
            <p className="lead mb-4" style={{ opacity: 0.9 }}>
              At GoodVibe, we believe that a vibrant life is within everyone's reach. 
              Join our community to ignite your best self.
            </p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {/* UPDATED: Links to Socials Section */}
              <Button 
                href="#socials"
                variant="light" 
                size="lg" 
                style={{ color: 'var(--brand-orange)', fontWeight: 'bold', borderRadius: '50px', padding: '12px 35px' }}
              >
                Join Our Community
              </Button>

              {/* UPDATED: Renamed to "View Packages" and links to Programs */}
              <Button 
                href="#programs"
                variant="outline-light" 
                size="lg" 
                style={{ borderRadius: '50px', padding: '12px 35px' }}
              >
                View Packages
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* ==============================================
          PART 2: MAIN FOOTER LINKS
          ============================================== */}
      <div 
        style={{ 
          backgroundColor: '#2c2c2c', // Dark charcoal for contrast
          color: '#fff',
          paddingTop: '120px', // Space for the CTA box above
          paddingBottom: '40px'
        }}
      >
        <Container>
          <Row className="gy-5">
            {/* Brand & Intro */}
            <Col lg={4} md={6}>
              <h3 className="mb-3" style={{ color: 'var(--brand-yellow)' }}>GoodVibe</h3>
              <p className="text-white-50">
                An Advisory Group committed to empowering individuals and nations to live vibrant lives through 
                holistic wellbeing and energy.
              </p>
              <p className="text-white-50 small">
                Part of the <strong>Wealthy Nation</strong> initiative.
              </p>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <h5 className="text-white mb-4">Quick Links</h5>
              <ul className="list-unstyled text-white-50" style={{ lineHeight: '2.5' }}>
                <li><a href="#hero" className="text-decoration-none text-white-50 hover-white">Home</a></li>
                <li><a href="#about" className="text-decoration-none text-white-50 hover-white">Who We Are</a></li>
                <li><a href="#philosophy" className="text-decoration-none text-white-50 hover-white">Philosophy</a></li>
                <li><a href="#vibrants" className="text-decoration-none text-white-50 hover-white">The 11 Vibrants</a></li>
                <li><a href="#programs" className="text-decoration-none text-white-50 hover-white">Programs</a></li>
              </ul>
            </Col>

            {/* Contact Info & Socials */}
            <Col lg={3} md={6}>
              <h5 className="text-white mb-4">Contact Us</h5>
              <ul className="list-unstyled text-white-50" style={{ lineHeight: '2' }}>
                <li><a href="https://www.goodvibe.lk" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none">www.goodvibe.lk</a></li>
                <li>hello@goodvibe.lk</li>
                <li className="mt-3">
                  <div className="d-flex gap-3">
                    {/* Updated Social Icons with Links */}
                    
                    {/* Facebook */}
                    <SocialIcon 
                      icon={<FaFacebookF />} 
                      link="https://www.facebook.com/Goodvibe"
                    />

                    {/* YouTube */}
                    <SocialIcon 
                      icon={<FaYoutube />} 
                      link="https://www.youtube.com/results?search_query=Goodvibe+By+Wealthy+Nation"
                    />
                    
                    {/* WhatsApp */}
                    {/* Replace YOUR_NUMBER with actual number */}
                    <SocialIcon 
                      icon={<FaWhatsapp />} 
                      link="https://wa.me/YOUR_PHONE_NUMBER_HERE"
                    />

                    {/* TikTok */}
                    <SocialIcon 
                      icon={<FaTiktok />} 
                      link="https://www.tiktok.com/@Goodvibe"
                    />
                    
                  </div>
                </li>
              </ul>
            </Col>

            {/* Newsletter */}
            <Col lg={3} md={6}>
              <h5 className="text-white mb-4">Stay Updated</h5>
              <p className="text-white-50 small">Get the latest vibe tips directly to your inbox.</p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Your Email"
                  aria-label="Your Email"
                  style={{ borderRadius: '20px 0 0 20px', border: 'none' }}
                />
                <Button 
                  style={{ 
                    backgroundColor: 'var(--brand-orange)', 
                    border: 'none', 
                    borderRadius: '0 20px 20px 0' 
                  }}
                >
                  <FaPaperPlane />
                </Button>
              </InputGroup>
            </Col>
          </Row>

          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

          <Row>
            <Col className="text-center text-white-50 small">
              &copy; {new Date().getFullYear()} GoodVibe by Wealthy Nation. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon, link }) => (
  <a 
    href={link || "#"} 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <div 
      style={{
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff',
        transition: '0.3s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--brand-orange)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
    >
      {icon}
    </div>
  </a>
);

export default Footer;