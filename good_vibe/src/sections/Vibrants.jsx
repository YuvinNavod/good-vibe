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

  const brandYellow = '#ffdb46'; // Signature Brand Yellow

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
              {/* MAIN TOPIC: LARGE AND BOLD */}
              <h1 className="display-1 fw-black mb-3" style={{ color: brandYellow, fontWeight: '900', lineHeight: '1.0', textTransform: 'uppercase', letterSpacing: '-2px' }}>
                The Vibrants
              </h1>
              
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#fff', textTransform: 'uppercase', opacity: 0.95 }}>
                Ignite your best self.
              </h2>

              {/* FRAMEWORK TEXT: ITALICIZED */}
              <p className="lead mb-4" style={{ fontWeight: '600', color: '#fff', fontSize: '1.6rem', fontStyle: 'italic' }}>
                A holistic framework of 12 dimensions.
              </p>
              
              <p style={{ color: '#fff', lineHeight: '1.8', fontSize: '1.15rem', maxWidth: '90%', opacity: 0.9 }}>
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
          PART 2: THE ECOSYSTEM (Half Image, Half Lists)
          ============================================== */}
      <div style={{ padding: '100px 0', backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Container fluid className="px-lg-5">
          <Row className="align-items-center">
            
            {/* LEFT SIDE: Half Image */}
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/assets/ecosystem_center.gif"} 
                  alt="The GoodVibe Ecosystem" 
                  style={{ width: '100%', maxWidth: '750px', filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.2))' }}
                />
              </motion.div>
            </Col>

            {/* RIGHT SIDE: Core + Accelerator Vibrants */}
            <Col lg={6} className="ps-lg-5">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                variants={fadeInUp} 
                viewport={{ once: true }}
                className="p-4 p-md-5"
                style={{ 
                    borderRadius: '40px', 
                    background: 'rgba(255, 255, 255, 0.12)', 
                    backdropFilter: 'blur(15px)',
                    border: '2px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '20px 20px 60px rgba(0,0,0,0.1)'
                }}
              >
                {/* FONT UPDATED: Only "GoodVibe" uses El Messiri */}
                <h2 className="display-5 fw-bold mb-2" style={{ color: brandYellow, textTransform: 'uppercase' }}>
                  <span style={{ fontFamily: "'El Messiri', sans-serif", textTransform: 'none' }}>GoodVibe</span> Ecosystem
                </h2>
                <p style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95, fontStyle: 'italic' }}>
                    A seamless integration of 12 dimensions.
                </p>

                <Row>
                  {/* Core Vibrants */}
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
                          style={{ fontSize: '1.15rem', color: brandYellow, fontWeight: '700' }}
                        >
                          <span className="me-3 d-flex align-items-center justify-content-center" 
                                style={{ color: brandYellow, fontWeight: '900', width: '30px', height: '30px', border: `2px solid ${brandYellow}`, borderRadius: '50%', fontSize: '0.85rem' }}>
                            {v.id}
                          </span>
                          {v.title}
                        </motion.li>
                      ))}
                    </ul>
                  </Col>

                  {/* Accelerator Vibrants */}
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
                          style={{ fontSize: '1.15rem', color: brandYellow, fontWeight: '700' }}
                        >
                          <span className="me-3 d-flex align-items-center justify-content-center" 
                                style={{ color: brandYellow, fontWeight: '900', width: '30px', height: '30px', border: `2px solid ${brandYellow}`, borderRadius: '50%', fontSize: '0.85rem' }}>
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
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
              >
                <Col md={6} className="px-lg-5">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="d-flex align-items-center mb-3">
                        <span style={{ fontSize: '3.5rem', fontWeight: '900', color: 'rgba(255,255,255,0.25)', lineHeight: 1, marginRight: '20px' }}>
                            {vibrant.id.toString().padStart(2, '0')}
                        </span>
                        <h2 className="display-4 fw-bold mb-0" style={{ color: brandYellow, letterSpacing: '-1.5px' }}>
                          {vibrant.title}
                        </h2>
                    </div>
                    
                    <h5 className="mb-4" style={{ color: '#fff', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.5rem', fontWeight: '600' }}>
                      {vibrant.tagline}
                    </h5>
                    
                    <p style={{ fontSize: '1.2rem', color: '#fff', opacity: 0.95, lineHeight: '1.8', textAlign: 'justify' }}>
                      {vibrant.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                      {vibrant.items.map((item, i) => (
                        <span key={i} className="px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '0.9rem', color: brandYellow, border: `1px solid ${brandYellow}`, fontWeight: '700' }}>
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
                      style={{ width: '100%', maxWidth: '480px', filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.4))' }}
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