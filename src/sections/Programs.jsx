import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Badge, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { programsData } from '../data/programsData';
// Import Icons
import { 
  FaBriefcase, FaChild, FaHeart, FaFemale, 
  FaMale, FaBlind, FaUser, FaClock, FaLayerGroup, FaCheckCircle 
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
        backgroundColor: 'var(--bg-light-orange)', 
        padding: 'var(--section-padding) 0' 
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{ color: 'var(--brand-orange)', fontWeight: '700' }}>Engagement Forums</h2>
          <p className="lead text-muted">Curated learning programs for every stage of life</p>
        </div>

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
                  return (
                    <Nav.Item key={program.id}>
                      <Nav.Link 
                        eventKey={program.id}
                        style={{
                          backgroundColor: activeKey === program.id ? 'var(--brand-orange)' : '#fff',
                          color: activeKey === program.id ? '#fff' : 'var(--text-dark)',
                          border: '1px solid #eee',
                          borderRadius: '10px',
                          textAlign: 'left',
                          padding: '15px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          boxShadow: activeKey === program.id ? '0 5px 15px rgba(255, 95, 45, 0.3)' : 'none'
                        }}
                      >
                        <div 
                          style={{
                            backgroundColor: activeKey === program.id ? 'rgba(255,255,255,0.2)' : 'var(--bg-light-orange)',
                            padding: '10px',
                            borderRadius: '50%',
                            marginRight: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <span style={{ fontWeight: '600' }}>{program.title}</span>
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>

            {/* RIGHT SIDE: Content Display */}
            <Col lg={8}>
              <Card 
                className="border-0 shadow-sm"
                style={{ borderRadius: '20px', overflow: 'hidden', minHeight: '500px' }}
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
                          {/* Title & Summary */}
                          <h2 className="mb-3" style={{ color: 'var(--text-dark)' }}>{program.title}</h2>
                          <p className="text-muted mb-4 fs-5">{program.summary}</p>
                          
                          {/* Key Specs (Duration, Modules, Mode) */}
                          <div className="d-flex flex-wrap gap-3 mb-4">
                            <Badge bg="light" text="dark" className="border px-3 py-2 d-flex align-items-center">
                              <FaClock className="me-2 text-warning" /> {program.details.duration}
                            </Badge>
                            <Badge bg="light" text="dark" className="border px-3 py-2 d-flex align-items-center">
                              <FaLayerGroup className="me-2 text-warning" /> {program.details.modules}
                            </Badge>
                            <Badge bg="warning" text="dark" className="px-3 py-2">
                              {program.details.mode}
                            </Badge>
                          </div>

                          <hr className="my-4" />

                          {/* Audience Section */}
                          <h5 className="mb-3" style={{ color: 'var(--brand-orange)' }}>Who is this for?</h5>
                          <ul className="list-unstyled mb-4">
                            {program.details.audience.map((item, i) => (
                              <li key={i} className="mb-2 d-flex align-items-start">
                                <FaCheckCircle className="mt-1 me-2" color="var(--brand-yellow)" size={16} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Modality Section (The specific activities) */}
                          <h5 className="mb-3" style={{ color: 'var(--brand-orange)' }}>What will we do?</h5>
                          <div className="d-flex flex-wrap gap-2">
                            {program.details.modality.map((mod, i) => (
                              <span 
                                key={i}
                                style={{
                                  backgroundColor: 'var(--bg-light-orange)',
                                  color: '#555',
                                  padding: '8px 15px',
                                  borderRadius: '20px',
                                  fontSize: '0.9rem',
                                  border: '1px solid #fae3c4'
                                }}
                              >
                                {mod}
                              </span>
                            ))}
                          </div>
                          
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Programs;