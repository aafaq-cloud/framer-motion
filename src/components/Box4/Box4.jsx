import React from 'react';
import { motion } from 'framer-motion';

// Keyframes
// Values in animate can also be set as a series of keyframes. This will animate through each value in sequence.

{
  /* <motion.div
  animate={{ x: [0, 100, 0] }}
/> */
}
const Box4 = () => {
  return (
    <div className="box-container">
      {/* <motion.div className="box" animate={{ scale: 1.3}}></motion.div> */}

      {/* Instead of defining a particular value we can actually define an array of values */}
      {/* <motion.div
        className="box"
        animate={{ scale: [1, 1.4, 0.4, 1, 3, 1] }}
        transition={{ duration: 10 }}
      ></motion.div> */}
      {/* Animate border radius */}
      {/* Powerful animation */}
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          rotate: [0, 0, 270, 270, 360],
        }}
        //   Dependent on duration
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default Box4;
