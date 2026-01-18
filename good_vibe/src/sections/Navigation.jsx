import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  // State Logic
  const isActive = scrolled || expanded;
  const navBg = isActive ? brandOrange : 'transparent';
  const textColor = isActive ? brandYellow : brandOrange;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar 
        expand="lg" 
        fixed="top"
        className="py-2" // Reduced vertical padding to accommodate larger logo
        onToggle={(isOpen) => setExpanded(isOpen)}
        variant="dark" 
        style={{
          backgroundColor: navBg, 
          backdropFilter: isActive ? 'blur(10px)' : 'none',
          boxShadow: isActive ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.4s ease-in-out',
          borderBottom: scrolled ? `2px solid ${brandYellow}` : 'none'
        }}
      >
        <Container fluid="xl">
          {/* LOGO SECTION - Removed Text and Increased Logo Size */}
          <Navbar.Brand href="#hero" className="d-flex align-items-center">
            <motion.img 
              // DYNAMIC LOGO: Changes source based on scroll/expansion state
              src={process.env.PUBLIC_URL + (isActive ? "/assets/logo_light.png" : "/assets/logo.png")} 
              alt="GoodVibe Logo"
              initial={false}
              animate={{ scale: isActive ? 0.9 : 1 }} // Subtle scale effect on scroll
              style={{ 
                height: '75px', // INCREASED SIZE: from 50px to 75px
                width: 'auto',
                transition: 'all 0.4s ease'
              }} 
            />
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={{ 
              border: 'none',
              filter: isActive ? 'none' : 'invert(43%) sepia(87%) saturate(2331%) hue-rotate(345deg) brightness(101%) contrast(101%)' 
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
                  backgroundColor: isActive ? brandYellow : brandOrange,
                  borderColor: isActive ? brandYellow : brandOrange,
                  color: isActive ? brandOrange : brandYellow,
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