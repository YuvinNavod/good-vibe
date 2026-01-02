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
        position: 'relative',
        // 1. UPDATED TO GRADIENT BACKGROUND
        background: 'linear-gradient(135deg, #ffdb46 0%, #ffc107 100%)' 
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{ color: '#ff5c2d', fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textTransform: 'uppercase' }}>Engagement Forums</h2>
          <p className="lead" style={{ color: '#333', opacity: 0.9, fontWeight: '600' }}>
            Curated learning programs for every stage of life
          </p>
        </div>

        {/* DESKTOP VIEW */}
        <div className="d-none d-lg-block">
          <Tab.Container 
            id="program-tabs" 
            activeKey={activeKey} 
            onSelect={(k) => setActiveKey(k)}
          >
            <Row>
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
                            backgroundColor: isActive ? '#ff5c2d' : 'rgba(255,255,255,0.5)', 
                            color: isActive ? '#fff' : '#ff5c2d', 
                            border: isActive ? 'none' : '1px solid rgba(255, 92, 45, 0.2)',
                            borderRadius: '15px',
                            textAlign: 'left',
                            padding: '15px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            boxShadow: isActive ? '0 8px 20px rgba(230, 81, 0, 0.2)' : 'none',
                          }}
                        >
                          <div 
                            style={{
                              backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,92,45,0.1)',
                              padding: '10px',
                              borderRadius: '50%',
                              marginRight: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: isActive ? '#fff' : '#ff5c2d'
                            }}
                          >
                            <Icon size={18} />
                          </div>
                          <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>{program.title}</span>
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </Col>

              <Col lg={8}>
                <Card 
                  className="border-0 shadow-sm"
                  style={{ 
                    borderRadius: '30px', 
                    overflow: 'hidden', 
                    minHeight: '500px',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
                    border: '4px solid #ff5c2d', 
                    boxShadow: '12px 12px 0px rgba(255, 92, 45, 0.1)'
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

        {/* MOBILE VIEW */}
        <div className="d-block d-lg-none">
          <Accordion defaultActiveKey="corporate" className="glass-accordion">
            {programsData.map((program) => {
              const Icon = iconMap[program.icon];
              return (
                <Accordion.Item 
                  eventKey={program.id} 
                  key={program.id}
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                    border: '2px solid #ff5c2d',
                    borderRadius: '15px',
                    marginBottom: '15px',
                    overflow: 'hidden'
                  }}
                >
                  <Accordion.Header>
                    <div className="d-flex align-items-center" style={{ width: '100%' }}>
                      <div 
                        style={{
                          backgroundColor: 'rgba(255,92,45,0.1)',
                          padding: '10px',
                          borderRadius: '50%',
                          marginRight: '15px',
                          color: '#ff5c2d'
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <span style={{ fontWeight: '800', color: '#ff5c2d', fontSize: '1.1rem' }}>
                        {program.title}
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body style={{ color: '#333', backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <ProgramContent program={program} isMobile={true} />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>

      </Container>

      <style>{`
        .glass-accordion .accordion-button {
          background-color: transparent !important;
          color: #ff5c2d !important;
          box-shadow: none !important;
        }
        .glass-accordion .accordion-button:not(.collapsed) {
          background-color: rgba(255, 92, 45, 0.1) !important;
          color: #ff5c2d !important;
          font-weight: 800;
        }
        .glass-accordion .accordion-button::after {
          filter: sepia(100%) saturate(300%) hue-rotate(338deg);
        }
      `}</style>
    </section>
  );
};

// --- Helper Component ---
const ProgramContent = ({ program, isMobile }) => (
  <>
    <h2 className="mb-3" style={{ color: '#ff5c2d', fontWeight: '800', fontSize: isMobile ? '1.5rem' : '2.5rem' }}>{program.title}</h2>
    
    {/* 2. SUMMARY MADE ITALIC */}
    <p className="mb-4" style={{ 
      color: '#333', 
      fontWeight: '600', 
      fontSize: isMobile ? '1rem' : '1.15rem',
      fontStyle: 'italic' // Added italics here
    }}>
      {program.summary}
    </p>
    
    {/* Key Specs */}
    <div className="d-flex flex-wrap gap-2 gap-md-3 mb-4">
      <Badge bg="white" text="dark" style={{ border: '1px solid #ff5c2d' }} className="px-3 py-2 d-flex align-items-center">
        <FaClock className="me-2" color="#ff5c2d" /> {program.details.duration}
      </Badge>
      <Badge bg="white" text="dark" style={{ border: '1px solid #ff5c2d' }} className="px-3 py-2 d-flex align-items-center">
        <FaLayerGroup className="me-2" color="#ff5c2d" /> {program.details.modules}
      </Badge>
      
      {/* 3. CHANGED BLUE BOX TO BRAND ORANGE */}
      <Badge style={{ backgroundColor: '#ff5c2d', color: '#fff' }} className="px-3 py-2">
        {program.details.mode}
      </Badge>
    </div>

    <hr className="my-4" style={{ borderColor: 'rgba(255, 92, 45, 0.3)' }} />

    {/* Audience */}
    <h5 className="mb-3" style={{ color: '#ff5c2d', fontWeight: '700' }}>Who is this for?</h5>
    <ul className="list-unstyled mb-4">
      {program.details.audience.map((item, i) => (
        <li key={i} className="mb-2 d-flex align-items-start">
          <FaCheckCircle className="mt-1 me-2" color="#ff5c2d" size={16} />
          <span style={{ color: '#333', fontWeight: '500' }}>{item}</span>
        </li>
      ))}
    </ul>

    {/* Modality */}
    <h5 className="mb-3" style={{ color: '#ff5c2d', fontWeight: '700' }}>What will we do?</h5>
    <div className="d-flex flex-wrap gap-2">
      {program.details.modality.map((mod, i) => (
        <span 
          key={i}
          style={{
            backgroundColor: '#ff5c2d',
            color: '#fff',
            padding: '8px 18px',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '600',
            boxShadow: '0 4px 10px rgba(255, 92, 45, 0.2)'
          }}
        >
          {mod}
        </span>
      ))}
    </div>
  </>
);

export default Programs;