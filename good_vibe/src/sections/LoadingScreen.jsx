import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Final 0.5s fade
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        // Signature GoodVibe Gradient
        background: 'linear-gradient(135deg, #ffdb46 0%, #ff5c2d 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Your GIF Image */}
        <img 
          src={process.env.PUBLIC_URL + "/assets/ecosystem_center.gif"} 
          alt="GoodVibe Loading" 
          style={{ width: '100%', maxWidth: '300px' }} 
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;