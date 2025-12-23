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
        // This handles the Hamburger Icon color: 'dark' gives white icon, 'light' gives black icon
        variant={scrolled ? 'light' : 'dark'} 
        style={{
          // Top: Transparent (shows orange bg), Scrolled: White
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent', 
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Container>
          {/* LOGO SECTION */}
          <Navbar.Brand href="#hero" className="d-flex align-items-center gap-2">
            <img 
              src={process.env.PUBLIC_URL + "/assets/logo.png"} 
              alt="GoodVibe Logo"
              style={{ 
                height: '50px', 
                width: 'auto', 
                objectFit: 'contain',
                // Optional: Invert logo color if needed based on background
                // filter: scrolled ? 'none' : 'brightness(0) invert(1)' 
              }} 
            />
            <span 
              style={{ 
                fontFamily: 'Philosopher, sans-serif',
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                // Text is White at top, Orange when scrolled
                color: scrolled ? 'var(--brand-orange)' : '#fff', 
                letterSpacing: '1px'
              }}
            >
              GoodVibe
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              {/* Links turn from White to Dark based on scroll */}
              {['About', 'Philosophy', 'The Vibrants', 'Programs', 'Stories'].map((item, index) => {
                 const linkHref = item === 'The Vibrants' ? '#vibrants' : 
                                  item === 'Stories' ? '#testimonials' : 
                                  `#${item.toLowerCase()}`;
                 return (
                   <Nav.Link 
                     key={index}
                     href={linkHref} 
                     style={{ 
                       color: scrolled ? '#333' : '#fff', 
                       fontWeight: '500' 
                     }}
                   >
                     {item}
                   </Nav.Link>
                 )
              })}
              
              {/* UPDATED BUTTON: Links to #socials section */}
              <Button 
                href="#socials"
                variant={scrolled ? "outline-warning" : "light"}
                className="ms-2"
                style={{ 
                  borderRadius: '30px', 
                  padding: '8px 25px',
                  fontWeight: 'bold',
                  // Top: White Button with Orange Text
                  // Scrolled: Transparent with Orange Border & Text
                  backgroundColor: scrolled ? 'transparent' : '#fff',
                  borderColor: scrolled ? 'var(--brand-orange)' : '#fff',
                  color: 'var(--brand-orange)' 
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--brand-orange)';
                  e.target.style.color = '#fff';
                  e.target.style.borderColor = 'var(--brand-orange)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = scrolled ? 'transparent' : '#fff';
                  e.target.style.color = 'var(--brand-orange)';
                  e.target.style.borderColor = scrolled ? 'var(--brand-orange)' : '#fff';
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