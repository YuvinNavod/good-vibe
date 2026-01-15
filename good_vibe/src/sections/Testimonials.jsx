import React from 'react';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // --- Test Data (Text Unchanged) ---
  const stories = [
    {
      id: 1,
      name: "Member of GoodVibe Circle",
      role: "Corporate Leader",
      program: "Vibrant Economy & Skills",
      quote: "The GoodVibe corporate program completely shifted our team's energy. We moved from stress and burnout to clarity and purpose. The 'Vibrant Wisdom' tools helped us make decisions with much more confidence.",
      rating: 5
    },
    {
      id: 2,
      name: "Member of GoodVibe Circle",
      role: "Couple",
      program: "Committed Life Partners",
      quote: "We were drifting apart in the noise of daily life. The 'Vibrant Connections' module gave us simple, meaningful practices to reconnect. Our home feels peaceful again.",
      rating: 5
    },
    {
      id: 3,
      name: "Member of GoodVibe Circle",
      role: "Software Engineer",
      program: "Vibrant Mind",
      quote: "I struggled with focus and anxiety. Learning to 'Power my mind with Vibrant Energies' wasn't just poetic—it was practical. My productivity and happiness have never been higher.",
      rating: 5
    }
  ];

  return (
    <section 
      id="testimonials" 
      style={{ 
        padding: '100px 0',
        position: 'relative',
        backgroundColor: '#ffdb46' // UPDATED BACKGROUND COLOR
      }}
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          {/* Changed color to Orange for visibility on Yellow BG */}
          <h5 style={{ color: '#ff5c2d', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
            Success Stories
          </h5>
          <h2 className="display-5 fw-bold" style={{ color: '#ff5c2d', fontWeight: '900', textTransform: 'uppercase' }}>
            Hear from Our Vibrant Community
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#ff5c2d', margin: '15px auto', borderRadius: '10px' }} />
        </div>

        {/* Testimonial Carousel */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Carousel 
                indicators={true} 
                controls={false} 
                interval={5000} 
                variant="dark" // Changed to dark indicators for yellow background
                className="pb-5" 
              >
                {stories.map((story) => (
                  <Carousel.Item key={story.id}>
                    <Card 
                      className="text-center border-0 p-4 p-md-5 mx-3"
                      style={{ 
                        backgroundColor: '#ffffff', 
                        borderRadius: '30px',
                        border: '4px solid #ff5c2d', // Shaded border style
                        boxShadow: '12px 12px 0px rgba(255, 92, 45, 0.15)',
                        margin: '0 12px 20px 0' // Compensation for shadow
                      }}
                    >
                      <Card.Body>
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <FaQuoteLeft size={40} color="#ff5c2d" style={{ opacity: 0.2 }} />
                        </div>

                        {/* The Quote */}
                        <Card.Text 
                          className="mb-4" 
                          style={{ 
                            color: '#333', 
                            lineHeight: '1.6', 
                            fontSize: '1.4rem', 
                            fontFamily: "'Playfair Display', serif", 
                            fontStyle: 'italic',
                            fontWeight: '500'
                          }}
                        >
                          "{story.quote}"
                        </Card.Text>

                        {/* Stars */}
                        <div className="mb-4">
                          {[...Array(story.rating)].map((_, i) => (
                            <FaStar key={i} color="#ff5c2d" size={20} className="mx-1" />
                          ))}
                        </div>

                        {/* Author Details */}
                        <div>
                          <h5 className="fw-bold mb-1" style={{ color: '#ff5c2d', fontSize: '1.5rem' }}>{story.name}</h5>
                          <span className="d-block mb-3" style={{ color: '#666', fontWeight: '600' }}>{story.role}</span>
                          
                          {/* Program Badge */}
                          <span 
                            style={{ 
                              backgroundColor: '#ff5c2d', 
                              color: '#fff',
                              fontWeight: 'bold',
                              padding: '8px 20px',
                              borderRadius: '50px',
                              fontSize: '0.85rem',
                              display: 'inline-block'
                            }}
                          >
                            {story.program}
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
          </Col>
        </Row>

      </Container>

      {/* Custom styles for carousel indicators to match brand orange */}
      <style>{`
        .carousel-indicators [data-bs-target] {
          background-color: #ff5c2d !important;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 5px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;