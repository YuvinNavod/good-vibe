import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { vibrantsData } from '../data/vibrantsData';

const Vibrants = () => {
  const containerRef = useRef(null);
  
  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const brandYellow = '#ffdb46'; // Unified Brand Yellow

  return (
    <section 
      id="vibrants" 
      ref={containerRef}
      style={{ 
        backgroundColor: '#ff6c2e', // Brand Orange
        position: 'relative', 
        paddingBottom: '100px',
        overflowX: 'hidden'
      }}
    >
      
      {/* ==============================================
          PART 1: INTRO (Text Left, Image Right)
          ============================================== */}
      <Container style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
        <Row className="align-items-center w-100">
          <Col lg={6} className="mb-5 mb-lg-0 text-start">
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
              <h5 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: '800', marginBottom: '1.5rem', opacity: 0.9 }}>
                The Vibrants
              </h5>
              <h1 className="display-3 fw-bold mb-4" style={{ color: brandYellow, lineHeight: '1.1', textTransform: 'uppercase' }}>
                Ignite your best self.
              </h1>
              <p className="lead mb-4" style={{ fontWeight: '600', color: '#fff', fontSize: '1.4rem' }}>
                A holistic framework of 12 dimensions.
              </p>
              <p style={{ color: '#fff', lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '90%', opacity: 0.9 }}>
                Unlock the 8 Core Vibrants and 4 Accelerator Vibrants to experience life fully, 
                joyfully, and with purpose. Our evidence-based approach helps you build resilient 
                wellbeing across every area of your life.
              </p>
            </motion.div>
          </Col>

          <Col lg={6} className="text-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }}
             >
                <img 
                  src={process.env.PUBLIC_URL + "/assets/good.gif"} 
                  alt="GoodVibe Framework" 
                  style={{ width: '100%', maxWidth: '600px', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))' }}
                />
             </motion.div>
          </Col>
        </Row>
      </Container>


      {/* ==============================================
          PART 2: THE ECOSYSTEM (Half Image, Half Vibrants List)
          ============================================== */}
      <div style={{ padding: '100px 0', backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Container fluid className="px-lg-5">
          <Row className="align-items-center">
            
            {/* LEFT SIDE: Half Image (The Ecosystem Circular Graphic) */}
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/assets/ecosystem_center.gif"} // Update with your center image path
                  alt="The GoodVibe Ecosystem" 
                  style={{ width: '100%', maxWidth: '700px', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))' }}
                />
              </motion.div>
            </Col>

            {/* RIGHT SIDE: Core + Accelerator Vibrants Lists */}
            <Col lg={6} className="ps-lg-5">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                variants={fadeInUp} 
                viewport={{ once: true }}
                className="p-4 p-md-5"
                style={{ 
                    borderRadius: '40px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '15px 15px 40px rgba(0,0,0,0.1)'
                }}
              >
                <h2 className="display-6 fw-bold mb-2" style={{ color: brandYellow, textTransform: 'uppercase' }}>
                  The GoodVibe Ecosystem
                </h2>
                <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                    A seamless integration of 12 dimensions.
                </p>

                <Row>
                  {/* Column 1: Core Vibrants */}
                  <Col md={6}>
                    <h5 className="mb-4" style={{ color: brandYellow, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Core Vibrants
                    </h5>
                    <ul className="list-unstyled">
                      {vibrantsData.filter(v => v.category === 'Core').map((v) => (
                        <motion.li 
                          key={v.id} 
                          whileHover={{ x: 8 }}
                          className="mb-3 d-flex align-items-center" 
                          style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '600' }}
                        >
                          <span className="me-3 d-flex align-items-center justify-content-center" 
                                style={{ color: brandYellow, fontWeight: '900', width: '28px', height: '28px', border: `2px solid ${brandYellow}`, borderRadius: '50%', fontSize: '0.8rem' }}>
                            {v.id}
                          </span>
                          {v.title}
                        </motion.li>
                      ))}
                    </ul>
                  </Col>

                  {/* Column 2: Accelerator Vibrants */}
                  <Col md={6} className="mt-4 mt-md-0">
                    <h5 className="mb-4" style={{ color: brandYellow, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Accelerator Vibrants
                    </h5>
                    <ul className="list-unstyled">
                      {vibrantsData.filter(v => v.category === 'Accelerator').map((v) => (
                        <motion.li 
                          key={v.id} 
                          whileHover={{ x: 8 }}
                          className="mb-3 d-flex align-items-center" 
                          style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '600' }}
                        >
                          {/* Accelerator now matches Core Color (Yellow) */}
                          <span className="me-3 d-flex align-items-center justify-content-center" 
                                style={{ color: brandYellow, fontWeight: '900', width: '28px', height: '28px', border: `2px solid ${brandYellow}`, borderRadius: '50%', fontSize: '0.8rem' }}>
                            {v.id}
                          </span>
                          {v.title}
                        </motion.li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ==============================================
          PART 3: DETAILS (Alternating Rows)
          ============================================== */}
      <div style={{ padding: '80px 0' }}>
        <Container>
          <div className="text-center mb-5">
             <h2 style={{ color: brandYellow, fontWeight: '900', fontSize: 'clamp(2.5rem, 5vw, 4rem)', textTransform: 'uppercase' }}>
               Explore the dimensions
             </h2>
          </div>

          {vibrantsData.map((vibrant, index) => {
            const isEven = index % 2 === 0;
            return (
              <Row 
                key={vibrant.id} 
                className={`align-items-center mb-5 py-5 ${!isEven ? 'flex-row-reverse' : ''}`}
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <Col md={6} className="px-lg-5">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.2)', lineHeight: 1, marginRight: '15px' }}>
                            {vibrant.id.toString().padStart(2, '0')}
                        </span>
                        <h2 className="display-5 fw-bold mb-0" style={{ color: brandYellow, letterSpacing: '-1px' }}>
                          {vibrant.title}
                        </h2>
                    </div>
                    
                    <h5 className="mb-4" style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.4rem' }}>
                      {vibrant.tagline}
                    </h5>
                    
                    <p style={{ fontSize: '1.1rem', color: '#fff', opacity: 0.9, lineHeight: '1.8', textAlign: 'justify' }}>
                      {vibrant.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                      {vibrant.items.map((item, i) => (
                        <span key={i} className="px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', fontSize: '0.85rem', color: brandYellow, border: `1px solid ${brandYellow}`, fontWeight: '700' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Col>

                <Col md={6} className="text-center mt-4 mt-md-0">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src={process.env.PUBLIC_URL + `/assets/${vibrant.id}.png`}
                      alt={vibrant.title}
                      style={{ width: '100%', maxWidth: '450px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
                    />
                  </motion.div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    </section>
  );
};

export default Vibrants;