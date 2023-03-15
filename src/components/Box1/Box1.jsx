import React, { useState } from 'react'; // Which element we want to animate
import { motion } from 'framer-motion';

/**
 *
 * motion.div
 * We can do anything like motion.a tag no matter which element it's
 * To animate an element
 * Define actual animation
 * Define a bunch of props
 * animate: The animate is going to take object and then object is goint to take a bunch of key value pairs
 * key defines which property we want to animate i.e color, opacity, position and the value is how we want to animate
 *
 * Move box to right in the x direction and define value e.g x:1000 or in a string x:"100vw"
 * Springy feature
 * Animate opacity
 * Opacity at the beginning is 0.5 and then at the end is 1
 */

// Note: Control the animation that we ultimately want to perform so we can have a useState hook and we can basically use that hook to control all these particular values
// Later on with another method
const Box1 = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  // Click on button toggle from true to false and vice-versa

  {
    /* Testing */
  }

  console.log('Is animate state:');
  console.log(isAnimate);

  return (
    // <div className="box-container">
    //   <div className="box">Box1</div>
    // </div>
    <div className="box-container">
      {/* <motion.div className="box" animate={{ x: '100vw' }}>
        Box1
      </motion.div> */}
      {/* <motion.div className="box" animate={{ x: '100px' }}>
        Box1
      </motion.div> */}
      {/* <motion.div className="box" animate={{ x: 1000 }}>
        Box1
      </motion.div> */}
      {/* <motion.div
        className="box"
        style={{ opacity: 0.2 }}
        animate={{ x: 1000, opacity: 1 }}
      >
        Box1
      </motion.div> */}
      {/* Initially opacity .2 and then 1 */}
      {/* Control speed  for example duration is 2s*/}
      {/* Springy effect */}
      {/* Default type of tweeen when we specify duration */}
      {/* The problem is that you can't use the spring with the duration so how do we go ahead and make things a little bit faster and slower what to do is we use stiffness
      Note: The stiffness if for spring type and the duration is for tween type
      Now the stiffness defines how stiff that spring is going to be default is 100
      You can make it higher
      */}
      {/* <motion.div
        className="box"
        animate={{ x: 1000, opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{
          //   type: 'tween',
          type: 'spring',
          duration: 2,
        }}
      >
        Box1
      </motion.div> */}
      {/* Knock back effect */}
      {/* <motion.div
        className="box"
        animate={{ x: 1000, opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{
          //   type: 'tween',
          type: 'spring',
          stiffness: 400,
        }}
      >
        Box1
      </motion.div> */}
      {/* Springy animation with stiffness so fast more stiff by making its duration slower*/}
      {/* Damping */}
      {/* Play aroud */}
      {/* <motion.div
        className="box"
        animate={{ x: 1000, opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{
          //   type: 'tween',
          type: 'spring',
          stiffness: 60,
          damping: 5,
        }}
      >
        Box1
      </motion.div> */}
      {/* <motion.div
        className="box"
        //   CSS Properties in camel case
        //   x is a spacial case
        animate={{ x: 1000, y: 200, opacity: 1, scale: 1.2 }}
        initial={{ opacity: 0.1 }}
        transition={{
          //   type: 'tween',
          type: 'spring',
          stiffness: 60,
          damping: 5,
        }}
      >
        Box1
      </motion.div> */}
      {/* Cool rolling effect i.e rotate: 360deg */}
      {/* <motion.div
        className="box"
        //   CSS Properties in camel case
        //   x is a spacial case
        animate={{ x: 1000, opacity: 1, scale: 1.2, rotate: 360 }}
        initial={{ opacity: 0.1 }}
        transition={{
          //   type: 'tween',
          type: 'spring',
          stiffness: 60,
          damping: 1,
        }}
      >
        Box1
      </motion.div> */}

      {/* Cool rolling animation */}
      {/* <motion.div
        className="box"
        //   CSS Properties in camel case
        //   x is a spacial case
        animate={{ x: 1000, opacity: 1, rotate: 360 }}
        initial={{ opacity: 0.1 }}
        transition={{
          //   type: 'tween',
          type: 'spring',
          stiffness: 100,
        }}
      >
        Box1
      </motion.div> */}

      <motion.div
        className="box"
        //   CSS Properties in camel case
        //   x is a spacial case
        // animate={{ x: 1000, opacity: 1, rotate: 360 }}
        //   React Way of doing is
        animate={{
          x: isAnimate ? 1000 : 0,
          opacity: isAnimate ? 1 : 0.5,
          rotate: isAnimate ? 360 : 0,
        }}
        // initial={{ opacity: 0.1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
        }}
        onClick={() => {
          setIsAnimate(!isAnimate);
        }}
      ></motion.div>
    </div>
  );
};

export default Box1;

/**
 * Summary:
 * Import object from framer-motion i.e motion
 * and then prepend this to whatever element we want to animate so we do motion.div and we basically get to a lot of different props and these are the main props that we're ultimately going to  using
 * 1. The animate prop just defines how we are going to be animating our element
 * 2. The initial props is going to be define the initial styles of our element before we animate it
 * 3. The transition is going to be define the type as well as the duration or in this case the stiffness
 */

/**
 * Second Animation:
 * Cool hover effect and we can also get this kind of cool tapping effect and we also have this dragging features
 */
