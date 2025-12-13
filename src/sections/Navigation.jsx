import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar 
        expand="lg" 
        fixed="top"
        className="py-2" 
        style={{
          backgroundColor: scrolled ? 'rgba(253, 251, 247, 0.95)' : 'transparent', 
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Container>
          {/* LOGO SECTION */}
          <Navbar.Brand href="#hero" className="d-flex align-items-center gap-2">
            <img 
              src="/assets/logo.png" 
              alt="GoodVibe Logo"
              style={{ 
                height: '50px', 
                width: 'auto', 
                objectFit: 'contain' 
              }} 
            />
            <span 
              style={{ 
                fontFamily: 'Philosopher, sans-serif',
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                color: scrolled ? '#333' : 'var(--text-dark)', 
                letterSpacing: '1px'
              }}
            >
              GoodVibe
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link href="#about" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>About</Nav.Link>
              <Nav.Link href="#philosophy" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>Philosophy</Nav.Link>
              <Nav.Link href="#vibrants" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>The Vibrants</Nav.Link>
              <Nav.Link href="#programs" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>Programs</Nav.Link>
              <Nav.Link href="#testimonials" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>Stories</Nav.Link>
              
              {/* UPDATED BUTTON: Links to #socials section */}
              <Button 
                href="#socials"
                variant="outline-dark" 
                className="ms-2"
                style={{ 
                  borderRadius: '30px', 
                  padding: '8px 25px',
                  borderColor: 'var(--brand-orange)',
                  color: scrolled ? 'var(--brand-orange)' : '#333'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--brand-orange)';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = scrolled ? 'var(--brand-orange)' : '#333';
                }}
              >
                Join Community
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;