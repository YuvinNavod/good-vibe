import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ position: 'relative', backgroundColor: '#ffdb46' }}>
      
      {/* ==============================================
          PART 1: CTA SECTION (Join Community)
          ============================================== */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          paddingTop: '50px',
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
              background: 'linear-gradient(135deg, #ff5c2d, #ff9e00)',
              borderRadius: '30px',
              boxShadow: '0 20px 50px rgba(255, 95, 45, 0.3)'
            }}
          >
            <h2 className="fw-bold mb-3" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
              Start Your Vibrant Journey Today
            </h2>
            <p className="lead mb-4" style={{ opacity: 0.9, fontWeight: '500', textAlign: 'center' }}>
              At <span style={{ fontFamily: "'El Messiri', sans-serif" }}>GoodVibe</span>, we believe that a vibrant life is within everyone's reach. Join our community to ignite your best self.
            </p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button 
                href="#socials"
                variant="light" 
                size="lg" 
                style={{ color: '#ff5c2d', fontWeight: 'bold', borderRadius: '50px', padding: '12px 35px' }}
              >
                Join Our Community
              </Button>

              <Button 
                href="#programs"
                variant="outline-light" 
                size="lg" 
                style={{ borderRadius: '50px', padding: '12px 35px', fontWeight: '600' }}
              >
                Engagement Forums
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
          backgroundColor: '#2c2c2c', 
          color: '#fff',
          paddingTop: '150px', 
          paddingBottom: '40px'
        }}
      >
        <Container>
          <Row className="gy-5">
            {/* Brand & Intro */}
            <Col lg={5} md={12}>
              <h3 className="mb-3" style={{ color: '#ffdb46', fontWeight: '900', textTransform: 'uppercase' }}>
                <span style={{ fontFamily: "'El Messiri', sans-serif", textTransform: 'none' }}>GoodVibe</span>
              </h3>
              <p className="text-white-50" style={{ maxWidth: '400px', lineHeight: '1.7', textAlign: 'left' }}>
                An Advisory Group committed to empowering individuals and nations to live vibrant lives through holistic wellbeing and energy.
              </p>
              <p className="text-white-50 small">
                Part of the <strong>Wealthy Nation</strong> initiative.
              </p>
            </Col>

            {/* Quick Links */}
            <Col lg={3} md={6}>
              <h5 className="text-white mb-4" style={{ fontWeight: '700' }}>Quick Links</h5>
              <ul className="list-unstyled text-white-50" style={{ lineHeight: '2.5', fontWeight: '500' }}>
                <li><a href="#hero" className="text-decoration-none text-white-50 hover-yellow">Home</a></li>
                <li><a href="#about" className="text-decoration-none text-white-50 hover-yellow">Who We Are</a></li>
                <li><a href="#philosophy" className="text-decoration-none text-white-50 hover-yellow">Philosophy</a></li>
                <li><a href="#vibrants" className="text-decoration-none text-white-50 hover-yellow">The Vibrants</a></li>
                <li><a href="#programs" className="text-decoration-none text-white-50 hover-yellow">Programs</a></li>
              </ul>
            </Col>

            {/* Contact Info & Socials */}
            <Col lg={4} md={6}>
              <h5 className="text-white mb-4" style={{ fontWeight: '700' }}>Contact Us</h5>
              <ul className="list-unstyled text-white-50" style={{ lineHeight: '2', fontWeight: '500' }}>
                <li>
                  <a href="https://www.goodvibe.lk" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none hover-yellow">
                    www.goodvibe.lk
                  </a>
                </li>
                <li>
                  <div className="d-flex gap-3 mt-3">
                    <SocialIcon 
                      icon={<FaFacebookF />} 
                      link="https://www.facebook.com/Goodvibe"
                    />
                    <SocialIcon 
                      icon={<FaYoutube />} 
                      link="https://www.youtube.com/results?search_query=Goodvibe+By+Wealthy+Nation"
                    />
                    <SocialIcon 
                      icon={<FaWhatsapp />} 
                      link="https://wa.me/YOUR_PHONE_NUMBER" 
                    />
                    <SocialIcon 
                      icon={<FaTiktok />} 
                      link="https://www.tiktok.com/@Goodvibe"
                    />
                  </div>
                </li>
              </ul>
            </Col>
          </Row>

          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

          <Row>
            <Col className="text-center text-white-50 small">
              &copy; {new Date().getFullYear()} <span style={{ fontFamily: "'El Messiri', sans-serif" }}>GoodVibe</span> by Wealthy Nation. All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </div>

      <style>{`
        .hover-yellow:hover {
          color: #ffdb46 !important;
          transition: 0.3s;
        }
      `}</style>
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
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fff',
        transition: '0.3s',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#ff5c2d';
        e.currentTarget.style.borderColor = '#ff5c2d';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
      }}
    >
      {icon}
    </div>
  </a>
);

export default Footer;