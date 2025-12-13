import React from 'react';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // --- Test Data based on your Programs ---
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
        backgroundColor: 'var(--bg-cream)', 
        padding: 'var(--section-padding) 0',
        position: 'relative'
      }}
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 style={{ color: 'var(--brand-orange)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Success Stories
          </h5>
          <h2 className="display-5 fw-bold" style={{ color: 'var(--text-dark)' }}>
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
                variant="dark"
                className="pb-5" // Padding bottom for indicators
              >
                {stories.map((story) => (
                  <Carousel.Item key={story.id}>
                    <Card 
                      className="text-center border-0 p-4 p-md-5 mx-3"
                      style={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '20px',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.05)'
                      }}
                    >
                      <Card.Body>
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <FaQuoteLeft size={40} color="var(--brand-yellow)" style={{ opacity: 0.5 }} />
                        </div>

                        {/* The Quote */}
                        <Card.Text className="fs-4 fst-italic mb-4" style={{ color: '#555', lineHeight: '1.6' }}>
                          "{story.quote}"
                        </Card.Text>

                        {/* Stars */}
                        <div className="mb-4">
                          {[...Array(story.rating)].map((_, i) => (
                            <FaStar key={i} color="var(--brand-orange)" size={20} className="mx-1" />
                          ))}
                        </div>

                        {/* Author Details */}
                        <div>
                          <h5 className="fw-bold mb-1">{story.name}</h5>
                          <span className="text-muted d-block small">{story.role}</span>
                          <span 
                            className="badge mt-2" 
                            style={{ 
                              backgroundColor: 'var(--bg-light-orange)', 
                              color: 'var(--brand-orange)',
                              fontWeight: 'normal'
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