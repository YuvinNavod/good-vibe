import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Colors
  const brandOrange = "#ff5c2d";
  const brandYellow = "#ffdb46";

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar 
        expand="lg" 
        fixed="top"
        className="py-3" 
        // Logic: On yellow background, we need dark icons. On orange background, we need light icons.
        variant={scrolled ? 'dark' : 'light'} 
        style={{
          // Top: Transparent (to show Hero Yellow), Scrolled: Brand Orange
          backgroundColor: scrolled ? brandOrange : 'transparent', 
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.4s ease-in-out',
          borderBottom: scrolled ? `2px solid ${brandYellow}` : 'none'
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
                //filter: scrolled ? 'brightness(0) invert(1)' : 'none' // Turns logo white/light when on orange bg
              }} 
            />
            <span 
              style={{ 
                fontSize: '1.8rem', 
                fontWeight: '900', // Fat letters to match Hero
                color: scrolled ? brandYellow : brandOrange, 
                letterSpacing: '-1px',
                transition: 'color 0.4s ease'
              }}
            >
              GoodVibe
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">
              {['About', 'Philosophy', 'The Vibrants', 'Programs', 'Stories'].map((item, index) => {
                 const linkHref = item === 'The Vibrants' ? '#vibrants' : 
                                  item === 'Stories' ? '#testimonials' : 
                                  `#${item.toLowerCase()}`;
                 return (
                   <Nav.Link 
                     key={index}
                     href={linkHref} 
                     className="px-3"
                     style={{ 
                       color: scrolled ? brandYellow : brandOrange, 
                       fontWeight: '700',
                       fontSize: '1rem',
                       textTransform: 'uppercase',
                       letterSpacing: '1px',
                       transition: 'color 0.4s ease'
                     }}
                   >
                     {item}
                   </Nav.Link>
                 )
              })}
              
              {/* JOIN COMMUNITY BUTTON */}
              <Button 
                href="#socials"
                className="ms-lg-3"
                style={{ 
                  borderRadius: '50px', 
                  padding: '10px 28px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  // Top: Orange button on Yellow Bg
                  // Scrolled: Yellow button on Orange Bg
                  backgroundColor: scrolled ? brandYellow : brandOrange,
                  borderColor: scrolled ? brandYellow : brandOrange,
                  color: scrolled ? brandOrange : brandYellow,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.backgroundColor = '#000';
                  e.target.style.color = '#fff';
                  e.target.style.borderColor = '#000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = scrolled ? brandYellow : brandOrange;
                  e.target.style.color = scrolled ? brandOrange : brandYellow;
                  e.target.style.borderColor = scrolled ? brandYellow : brandOrange;
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