import React from 'react';
import { motion, useAnimation } from 'framer-motion';

// Control animation using useAnimation hook
const Box5 = () => {
  // It's going to be controlling an animation
  // It stops the previous animation and start new one
  const control = useAnimation();

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1500,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: '50%',
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};

export default Box5;
