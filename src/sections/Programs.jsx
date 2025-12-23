import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Badge, Card, Accordion } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { programsData } from '../data/programsData';
// Import Icons
import { 
  FaBriefcase, FaChild, FaHeart, FaFemale, 
  FaMale, FaBlind, FaUser, FaClock, FaLayerGroup, FaCheckCircle, FaChevronDown 
} from 'react-icons/fa';

const iconMap = {
  "FaBriefcase": FaBriefcase,
  "FaChild": FaChild,
  "FaHeart": FaHeart,
  "FaFemale": FaFemale,
  "FaMale": FaMale,
  "FaBlind": FaBlind,
  "FaUser": FaUser
};

const Programs = () => {
  const [activeKey, setActiveKey] = useState('corporate');

  return (
    <section 
      id="programs" 
      style={{ 
        padding: '100px 0',
        position: 'relative'
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{ color: 'var(--brand-yellow)', fontWeight: '700' }}>Engagement Forums</h2>
          <p className="lead" style={{ color: '#fff', opacity: 0.9 }}>
            Curated learning programs for every stage of life
          </p>
        </div>

        {/* =================================================================
            DESKTOP VIEW (Visible on Large screens and up)
            Structure: Left Sidebar Tabs + Right Content Card
           ================================================================= */}
        <div className="d-none d-lg-block">
          <Tab.Container 
            id="program-tabs" 
            activeKey={activeKey} 
            onSelect={(k) => setActiveKey(k)}
          >
            <Row>
              {/* LEFT SIDE: Navigation Menu */}
              <Col lg={4} className="mb-4">
                <Nav variant="pills" className="flex-column gap-2">
                  {programsData.map((program) => {
                    const Icon = iconMap[program.icon];
                    const isActive = activeKey === program.id;
                    
                    return (
                      <Nav.Item key={program.id}>
                        <Nav.Link 
                          eventKey={program.id}
                          style={{
                            backgroundColor: isActive ? 'var(--brand-yellow)' : 'rgba(255,255,255,0.1)', 
                            color: isActive ? '#e65100' : '#fff', 
                            border: isActive ? 'none' : '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '15px',
                            textAlign: 'left',
                            padding: '15px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            boxShadow: isActive ? '0 5px 15px rgba(0,0,0,0.1)' : 'none',
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          <div 
                            style={{
                              backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                              padding: '10px',
                              borderRadius: '50%',
                              marginRight: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isActive ? '#e65100' : '#fff'
                            }}
                          >
                            <Icon size={18} />
                          </div>
                          <span style={{ fontWeight: '600', fontSize: '1.05rem' }}>{program.title}</span>
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </Col>

              {/* RIGHT SIDE: Content Display (Transparent Glass Card) */}
              <Col lg={8}>
                <Card 
                  className="border-0 glass-card"
                  style={{ 
                    borderRadius: '20px', 
                    overflow: 'hidden', 
                    minHeight: '500px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <Card.Body className="p-4 p-md-5">
                    <AnimatePresence mode="wait">
                      {programsData.map((program) => (
                        activeKey === program.id && (
                          <motion.div
                            key={program.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Content Component to reuse */}
                            <ProgramContent program={program} />
                          </motion.div>
                        )
                      ))}
                    </AnimatePresence>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        {/* =================================================================
            MOBILE VIEW (Visible on Medium screens and below)
            Structure: Vertical Accordion 
           ================================================================= */}
        <div className="d-block d-lg-none">
          <Accordion defaultActiveKey="corporate" className="glass-accordion">
            {programsData.map((program) => {
              const Icon = iconMap[program.icon];
              return (
                <Accordion.Item 
                  eventKey={program.id} 
                  key={program.id}
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '15px',
                    marginBottom: '15px',
                    overflow: 'hidden'
                  }}
                >
                  <Accordion.Header>
                    <div className="d-flex align-items-center" style={{ width: '100%' }}>
                      <div 
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          padding: '10px',
                          borderRadius: '50%',
                          marginRight: '15px',
                          color: '#fff'
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <span style={{ fontWeight: '600', color: 'var(--brand-yellow)', fontSize: '1.1rem' }}>
                        {program.title}
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.1)' }}>
                    {/* Reusing the same content structure */}
                    <ProgramContent program={program} isMobile={true} />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>

      </Container>

      {/* CSS Override for Accordion to match theme */}
      <style>{`
        .glass-accordion .accordion-button {
          background-color: transparent !important;
          color: #fff !important;
          box-shadow: none !important;
        }
        .glass-accordion .accordion-button:not(.collapsed) {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: var(--brand-yellow) !important;
        }
        .glass-accordion .accordion-button::after {
          filter: invert(1); /* Makes arrow white */
        }
      `}</style>
    </section>
  );
};

// --- Helper Component to avoid code duplication ---
const ProgramContent = ({ program, isMobile }) => (
  <>
    <h2 className="mb-3" style={{ color: 'var(--brand-yellow)', fontSize: isMobile ? '1.5rem' : '2rem' }}>{program.title}</h2>
    <p className="mb-4" style={{ color: '#fff', opacity: 0.9, fontSize: isMobile ? '1rem' : '1.25rem' }}>{program.summary}</p>
    
    {/* Key Specs */}
    <div className="d-flex flex-wrap gap-2 gap-md-3 mb-4">
      <Badge bg="light" text="dark" style={{ backgroundColor: 'rgba(255,255,255,0.8) !important' }} className="border px-3 py-2 d-flex align-items-center">
        <FaClock className="me-2 text-warning" /> {program.details.duration}
      </Badge>
      <Badge bg="light" text="dark" style={{ backgroundColor: 'rgba(255,255,255,0.8) !important' }} className="border px-3 py-2 d-flex align-items-center">
        <FaLayerGroup className="me-2 text-warning" /> {program.details.modules}
      </Badge>
      <Badge bg="warning" text="dark" className="px-3 py-2">
        {program.details.mode}
      </Badge>
    </div>

    <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

    {/* Audience */}
    <h5 className="mb-3" style={{ color: 'var(--brand-yellow)' }}>Who is this for?</h5>
    <ul className="list-unstyled mb-4">
      {program.details.audience.map((item, i) => (
        <li key={i} className="mb-2 d-flex align-items-start">
          <FaCheckCircle className="mt-1 me-2" color="var(--brand-yellow)" size={16} />
          <span style={{ color: '#fff' }}>{item}</span>
        </li>
      ))}
    </ul>

    {/* Modality */}
    <h5 className="mb-3" style={{ color: 'var(--brand-yellow)' }}>What will we do?</h5>
    <div className="d-flex flex-wrap gap-2">
      {program.details.modality.map((mod, i) => (
        <span 
          key={i}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            color: '#fff',
            padding: '8px 15px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '500',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {mod}
        </span>
      ))}
    </div>
  </>
);

export default Programs;