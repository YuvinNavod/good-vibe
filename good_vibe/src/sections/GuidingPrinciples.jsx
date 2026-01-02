import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const GuidingPrinciples = () => {
  const principles = [
    {
      id: 1,
      title: "A Structured & Guided Journey",
      summary: "A Structured & Guided Journey with clear milestones and measurable outcomes.",
      image: process.env.PUBLIC_URL + "/assets/journey.gif",
      details: [
        "Cultivate deep awareness of body, mind, emotions, and behavior patterns to support conscious and intentional living.",
        "Guided, Evidence-Informed Practices: Step-by-step practices drawn from wellbeing science, mindfulness, movement, and reflective tools—guided by experienced facilitators.",
        "Measurable Wellbeing Outcomes: Track progress through simple assessments, reflective metrics, and wellbeing indicators to ensure visible and meaningful change.",
        "Integration into Daily Life: Practical tools and routines that translate inner awareness into everyday personal and professional contexts."
      ]
    },
    {
      id: 2,
      title: "Grow Slow, Steady, and Resilient",
      summary: "Grow Slow, Steady, and Resilient and start listening to your own vibe first.",
      image: process.env.PUBLIC_URL + "/assets/snail-growth.gif",
      details: [
        "Slow, Steady, and Sustainable Growth: Designed for long-term resilience rather than quick fixes.",
        "Master the Art of Slow, Steady, and Resilient Growth.",
        "Learn to Move Forward with Calm, Consistency, and Resilience.",
        "Build Inner Strength Through Slow, Steady, and Resilient Progress.",
        "Cultivating Resilience Through Slow, Intentional Growth.",
        "Learn to Thrive Through Slow, Steady Growth and Inner Resilience."
      ]
    },
    {
      id: 3,
      title: "Accelerate Inner Growth Effectively",
      summary: "Accelerate Inner Growth Effectively rooted in self-control, commitment, and consistency for sustainable progress.",
      image: process.env.PUBLIC_URL + "/assets/bloom.gif",
      details: [
        "A High-Impact Program that accelerates your inner growth—faster, deeper, and more effectively.",
        "Transform your inner self through a high-impact, science-aligned growth program.",
        "An intensive inner growth program for faster, meaningful, and lasting transformation.",
        "High-Impact Inner Development for rapid, balanced, and conscious growth.",
        "Where inner growth accelerates—through structured, high-impact transformation."
      ]
    }
  ];

  return (
    <section 
      id="principles" 
      style={{ 
        padding: '100px 0',
        background: 'linear-gradient(135deg, #ffdb46 0%, #ffc107 100%)',
        position: 'relative'
      }}
    >
      <Container>
        {/* Header section based on provided design */}
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: '#ff5c2d', 
              fontWeight: '900', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              textTransform: 'uppercase' 
            }}
          >
            Three Guiding Principles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lead" 
            style={{ color: '#333', opacity: 0.9, fontWeight: '600' }}
          >
            A guided and structured journey to sustainable inner growth
          </motion.p>
        </div>

        <div className="d-flex flex-column gap-5">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="border-0 shadow-sm"
                style={{ 
                  borderRadius: '40px', 
                  overflow: 'hidden', 
                  backgroundColor: 'rgba(255, 255, 255, 0.4)', 
                  border: '4px solid #ff5c2d', 
                  boxShadow: '12px 12px 0px rgba(255, 92, 45, 0.1)'
                }}
              >
                <Row className="g-0 align-items-stretch">
                  {/* Left Column: Image Area */}
                  <Col md={5} style={{ minHeight: '350px' }}>
                    <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
                      <Card.Img 
                        src={principle.image} 
                        alt={principle.title}
                        style={{ 
                          height: '100%', 
                          width: '100%', 
                          objectFit: 'cover',
                          borderRight: '4px solid #ff5c2d'
                        }}
                      />
                    </div>
                  </Col>

                  {/* Right Column: Complete Content Area */}
                  <Col md={7}>
                    <Card.Body className="p-4 p-lg-5 d-flex flex-column h-100">
                      <h3 style={{ color: '#ff5c2d', fontWeight: '900', fontSize: '2rem', marginBottom: '1rem' }}>
                        {index + 1}. {principle.title}
                      </h3>
                      
                      <p style={{ 
                        color: '#333', 
                        fontWeight: '700', 
                        fontStyle: 'italic',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem'
                      }}>
                        {principle.summary}
                      </p>

                      <hr style={{ borderColor: 'rgba(255, 92, 45, 0.3)', margin: '0 0 1.5rem 0' }} />
                      
                      <ul className="list-unstyled mb-0">
                        {principle.details.map((detail, i) => (
                          <li key={i} className="mb-3 d-flex align-items-start">
                            <FaCheckCircle className="mt-1 me-3 flex-shrink-0" color="#ff5c2d" size={18} />
                            <span style={{ color: '#333', fontWeight: '600', fontSize: '1rem', lineHeight: '1.4' }}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GuidingPrinciples;