import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll } from 'framer-motion';
import { vibrantsData } from '../data/vibrantsData';

const Vibrants = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="vibrants" 
      ref={containerRef}
      style={{ 
        // FIX: Removed 'overflowX: hidden' because it breaks position: sticky
        position: 'relative', 
        paddingBottom: '100px'
      }}
    >
      
      {/* ==============================================
          PART 1: INTRO (Text Left, Image Right)
          ============================================== */}
      <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '50px' }}>
        <Row className="align-items-center w-100">
          {/* LEFT: Text Content */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
              <h5 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', opacity: 0.9 }}>
                The Vibrants
              </h5>
              <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--brand-yellow)', lineHeight: '1.2' }}>
                Ignite your best self through our holistic framework.
              </h1>
              <p className="lead mb-4" style={{ fontWeight: '300', color: '#fff' }}>
                Unlock the 8 Core Vibrants and 3 Accelerator Vibrants.
              </p>
              <p style={{ color: '#fff', lineHeight: '2', fontSize: '1.05rem', maxWidth: '90%', opacity: 0.9 }}>
                Discover a holistic approach to wellbeing. From energizing your body and mind, expanding your intellect, 
                nurturing relationships, to creating financial abundance and deepening spirituality.
              </p>
            </motion.div>
          </Col>

          {/* RIGHT: Intro Image */}
          <Col lg={6} className="text-center position-relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
             >
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  <img 
                    src={process.env.PUBLIC_URL + "/assets/good.png"} 
                    alt="GoodVibe Introduction" 
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '800px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
                  />
                </motion.div>
             </motion.div>
          </Col>
        </Row>
      </Container>


      {/* ==============================================
          PART 2: TRANSFORMATION (Sticky Chart Left, Scrolling List Right)
          ============================================== */}
      <div style={{ position: 'relative' }}>
        <Container>
          {/* FIX: align-items-stretch ensures the Left Column is as tall as the Right Column */}
          <Row className="align-items-stretch">
            
            {/* LEFT: STICKY PIE CHART */}
            <Col lg={6} className="d-none d-lg-block">
              <div 
                style={{ 
                  position: 'sticky', 
                  top: 0, 
                  height: '100vh', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }} 
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <img 
                    src={process.env.PUBLIC_URL + "/assets/chart.png"} 
                    alt="11 Vibrants Chart"
                    style={{
                      width: '100%',
                      maxWidth: '550px',
                      height: 'auto',
                      filter: 'drop-shadow(0 20px 30px rgba(255,255,255,0.2))'
                    }}
                  />
                </motion.div>
              </div>
            </Col>

            {/* RIGHT: SCROLLING LIST CONTENT */}
            <Col lg={6} style={{ paddingTop: '50px', paddingBottom: '100px' }}>
              <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
                <h2 className="mb-4 display-6 fw-bold" style={{ color: 'var(--brand-yellow)' }}>The GoodVibe Ecosystem</h2>
                <p className="lead mb-5" style={{ color: '#fff' }}>A seamless integration of 11 dimensions.</p>
                
                {/* CORE VIBRANTS SECTION (Glass Card) */}
                <div 
                  className="mb-5 p-4 glass-card"
                  style={{ borderRadius: '16px' }}
                >
                  <h4 className="mb-4" style={{ color: 'var(--brand-yellow)', fontWeight: '700', letterSpacing: '0.5px' }}>
                    Core Vibrants
                  </h4>
                  <ul className="list-unstyled mb-0">
                    {vibrantsData.filter(v => v.category === 'Core').map((v) => (
                      <li key={v.id} className="mb-3 d-flex align-items-start" style={{ fontSize: '1.1rem' }}>
                        <span className="me-3" style={{ color: 'var(--brand-yellow)', fontWeight: 'bold', minWidth: '25px' }}>
                          {v.id}.
                        </span>
                        <span style={{ color: '#fff' }}>{v.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ACCELERATOR VIBRANTS SECTION (Glass Card) */}
                <div 
                  className="p-4 glass-card" 
                  style={{ borderRadius: '16px' }}
                >
                  <h4 className="mb-4" style={{ color: '#fff', fontWeight: '700', letterSpacing: '0.5px' }}>
                    Accelerator Vibrants
                  </h4>
                  <ul className="list-unstyled mb-0">
                    {vibrantsData.filter(v => v.category === 'Accelerator').map((v) => (
                      <li key={v.id} className="mb-3 d-flex align-items-start" style={{ fontSize: '1.1rem' }}>
                        <span className="me-3" style={{ color: 'var(--brand-yellow)', fontWeight: 'bold', minWidth: '25px' }}>
                          {v.id}.
                        </span>
                        <span style={{ color: '#fff' }}>{v.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ==============================================
          PART 3: DETAILS (Cards)
          ============================================== */}
      <div style={{ padding: '100px 0' }}>
        <Container>
          <div className="text-center mb-5">
             <h2 style={{color: 'var(--brand-yellow)', fontWeight: 'bold'}}>Explore the Vibrants</h2>
             <div style={{width: '60px', height: '3px', background: '#fff', margin: '15px auto', opacity: 0.5}}></div>
          </div>

          {vibrantsData.map((vibrant) => {
            const imagePath = process.env.PUBLIC_URL + `/assets/${vibrant.id}.png`;

            return (
              <Row 
                key={vibrant.id} 
                className="align-items-center mb-5 py-5" 
                style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                {/* LEFT: Text */}
                <Col md={7} className="order-2 order-md-1">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <h2 className="display-6 fw-bold mb-2" style={{ color: 'var(--brand-yellow)' }}>
                      {vibrant.title}
                    </h2>
                    
                    <h5 className="fst-italic mb-4" style={{ color: '#fff', fontFamily: 'serif', opacity: 0.9 }}>
                      {vibrant.tagline}
                    </h5>
                    
                    <p className="lead mb-4" style={{ fontSize: '1.05rem', color: '#fff', opacity: 0.9 }}>
                      {vibrant.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                      {vibrant.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1" 
                          style={{ 
                            backgroundColor: 'rgba(255,255,255,0.15)', 
                            borderRadius: '20px', 
                            fontSize: '0.85rem',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Col>

                {/* RIGHT: Image */}
                <Col md={5} className="text-center mt-4 mt-md-0 order-1 order-md-2">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src={imagePath}
                      alt={vibrant.title}
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))'
                      }}
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