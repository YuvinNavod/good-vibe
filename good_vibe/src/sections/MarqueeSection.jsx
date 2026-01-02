import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSection = () => {
  return (
    <section 
      style={{
        width: '200%',
        padding: '60px 0',
        display: 'flex',
        overflow: 'hidden',
        // Top to Bottom Gradient
        background: 'linear-gradient(to bottom, #ffdb46 0%, #ff5c2d 100%)',
        position: 'relative'
      }}
    >
      <motion.div
        style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}
        animate={{ x: ["-50%", "0%"] }} 
        transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 80 
        }}
      >
        {/* Loop of icons */}
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={process.env.PUBLIC_URL + "/assets/vibrants-strip.png"}
            alt="Vibrants Strip"
            className="vibrant-icon-strip"
            style={{ 
                height: '100px', 
                marginRight: '60px',
                // Optional: Force icons to be dark/contrasted against gradient
                
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
