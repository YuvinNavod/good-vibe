import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // Track mobile menu state

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

  // Determine background based on scroll OR mobile expansion
  const navBg = (scrolled || expanded) ? brandOrange : 'transparent';
  const textColor = (scrolled || expanded) ? brandYellow : brandOrange;

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
        onToggle={(isOpen) => setExpanded(isOpen)} // Update state on mobile click
        variant="dark" // Keeps toggle icon visible
        style={{
          backgroundColor: navBg, 
          backdropFilter: (scrolled || expanded) ? 'blur(10px)' : 'none',
          boxShadow: (scrolled || expanded) ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.4s ease-in-out',
          borderBottom: scrolled ? `2px solid ${brandYellow}` : 'none'
        }}
      >
        <Container fluid="xl">
          <Navbar.Brand href="#hero" className="d-flex align-items-center gap-2">
            <img 
              src={process.env.PUBLIC_URL + "/assets/logo.png"} 
              alt="GoodVibe Logo"
              style={{ height: '50px', width: 'auto' }} 
            />
            {/* UPDATED FONT: Applied El Messiri to the word GoodVibe */}
            <span 
              style={{ 
                fontSize: '1.8rem', 
                fontWeight: '900', 
                color: textColor, 
                letterSpacing: '-1px',
                transition: 'color 0.4s ease',
                fontFamily: "'El Messiri', sans-serif" 
              }}
            >
              GoodVibe
            </span>
          </Navbar.Brand>

          {/* Toggle Button Styling */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={{ 
              border: 'none',
              filter: (scrolled || expanded) ? 'none' : 'invert(43%) sepia(87%) saturate(2331%) hue-rotate(345deg) brightness(101%) contrast(101%)' 
            }} 
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2 mt-3 mt-lg-0 flex-nowrap">
              {['About', 'Philosophy', 'The Vibrants', 'Programs', 'Stories'].map((item, index) => {
                 const linkHref = item === 'The Vibrants' ? '#vibrants' : 
                                  item === 'Stories' ? '#testimonials' : 
                                  `#${item.toLowerCase().replace(/\s+/g, '')}`;
                 return (
                   <Nav.Link 
                     key={index}
                     href={linkHref} 
                     onClick={() => setExpanded(false)} 
                     className="px-2 px-xl-3"
                     style={{ 
                       color: textColor, 
                       fontWeight: '700',
                       fontSize: '0.95rem',
                       textTransform: 'uppercase',
                       letterSpacing: '1px',
                       textAlign: 'center',
                       whiteSpace: 'nowrap',
                       transition: 'color 0.3s ease'
                     }}
                   >
                     {item}
                   </Nav.Link>
                 )
              })}
              
              <Button 
                href="#socials"
                className="mt-3 mt-lg-0 ms-lg-2 ms-xl-3"
                style={{ 
                  borderRadius: '50px', 
                  padding: '10px 24px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  backgroundColor: (scrolled || expanded) ? brandYellow : brandOrange,
                  borderColor: (scrolled || expanded) ? brandYellow : brandOrange,
                  color: (scrolled || expanded) ? brandOrange : brandYellow,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  whiteSpace: 'nowrap',
                  width: expanded ? '100%' : 'auto' 
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