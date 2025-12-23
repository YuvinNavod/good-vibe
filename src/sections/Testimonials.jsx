import React from 'react';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // --- Test Data ---
  const stories = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Corporate Leader",
      program: "Vibrant Economy & Skills",
      quote: "The GoodVibe corporate program completely shifted our team's energy. We moved from stress and burnout to clarity and purpose. The 'Vibrant Wisdom' tools helped us make decisions with much more confidence.",
      rating: 5
    },
    {
      id: 2,
      name: "David & Elena",
      role: "Couple",
      program: "Committed Life Partners",
      quote: "We were drifting apart in the noise of daily life. The 'Vibrant Connections' module gave us simple, meaningful practices to reconnect. Our home feels peaceful again.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
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
        position: 'relative'
      }}
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 style={{ color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8 }}>
            Success Stories
          </h5>
          <h2 className="display-5 fw-bold" style={{ color: 'var(--brand-yellow)' }}>
            Hear from Our Vibrant Community
          </h2>
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
                variant="white" 
                className="pb-5" 
              >
                {stories.map((story) => (
                  <Carousel.Item key={story.id}>
                    <Card 
                      className="text-center border-0 p-4 p-md-5 mx-3 glass-card"
                      style={{ 
                        // Using a semi-transparent white background so dark text is readable
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                        borderRadius: '20px',
                      }}
                    >
                      <Card.Body>
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <FaQuoteLeft size={40} color="var(--brand-orange)" style={{ opacity: 0.8 }} />
                        </div>

                        {/* The Quote - CHANGED TO DARK GREY */}
                        <Card.Text className="fs-4 fst-italic mb-4" style={{ color: '#333', lineHeight: '1.6' }}>
                          "{story.quote}"
                        </Card.Text>

                        {/* Stars */}
                        <div className="mb-4">
                          {[...Array(story.rating)].map((_, i) => (
                            <FaStar key={i} color="#FFD700" size={20} className="mx-1" />
                          ))}
                        </div>

                        {/* Author Details */}
                        <div>
                          {/* Name - CHANGED TO ORANGE/DARK */}
                          <h5 className="fw-bold mb-1" style={{ color: 'var(--brand-orange)' }}>{story.name}</h5>
                          
                          {/* Role - CHANGED TO GREY */}
                          <span className="d-block small" style={{ color: '#666' }}>{story.role}</span>
                          
                          {/* Badge - CHANGED TO LIGHT ORANGE BG with DARK TEXT */}
                          <span 
                            className="badge mt-3" 
                            style={{ 
                              backgroundColor: 'rgba(255, 95, 45, 0.1)', 
                              color: 'var(--brand-orange)',
                              fontWeight: 'bold',
                              border: '1px solid rgba(255, 95, 45, 0.2)',
                              padding: '8px 12px',
                              borderRadius: '20px'
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
    </section>
  );
};

export default Testimonials;