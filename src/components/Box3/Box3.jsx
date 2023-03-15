import React, { useState } from 'react';

import { motion } from 'framer-motion';
/**
 * Implement Animation:
 * It's not present initially
 * Staggered the children: We want to animate it in a staggered way
 */
const Box3 = () => {
  // Key value pairs
  //   const boxVariant = {
  //     lion: {
  //       x: 100,
  //       scale: 1.5,
  //       backgroundColor: 'yellow',
  //     },
  //     elephant: {
  //       x: 1000,
  //       scale: 0.8,
  //       backgroundColor: 'green',
  //     },
  //   };

  // Create a box varaint
  const boxVariant = {
    // First state is hidden
    //   Note: We can also add transition
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        // delay: 0.5,
        //   The when keyword so remove delay in list variants
        //   We're basically saying we want to animate we want to complete this animation before the children begin to animate
        when: 'beforeChildren',
        //   We want to animate children in a staggered way so each child is going to have their own kind of unique animation
        //   The staggerChildren property and time i.e each child have a .2s animation and then the next child can go ahead and start animating and so on.
        staggerChildren: 0.2,
      },
    },
  };

  //   const listVariants = {
  //     //   Differnet styles
  //     hidden: {
  //       x: -10,
  //       opacity: 0,
  //     },
  //     visible: {
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         // delay: 1,
  //       },
  //     },
  //   };

  // Staggered animation:
  const listVariants = {
    //   Differnet styles
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      //   delay: 1,
      // When we want to animate these in a staggered way so each child is going to have their own kind of unique animation
      // Provide a time so we wanna basically have each child have a .2 second animation and then the next child can go ahead and start animating
    },
  };
  return (
    <div className="box-container">
      {/* <motion.div className="box" animate={{ x: 0 }} initial={{ x: -1000 }}>
        Box3
      </motion.div> */}

      {/* Note: You can see that it kind of gets a little bit messy every single time we have to put the animate and the inital and this gets really really messy. So a bettwe way of doing it is actually using the variant so the variant prop and basically with the variant prop essentially what we can do is to pre-define our styles and then we can say hey what variant we ultimately want to display  */}
      {/* <motion.div className="box" animate={{ x: 0 }} initial={{ x: -1000 }}>
        Box3
      </motion.div> */}
      {/* We want to animate boxVariant lion over here */}
      {/* <motion.div className="box" variants={boxVariant} animate="lion">
        Box3
      </motion.div> */}

      {/* <motion.div className="box" variants={boxVariant}
      animate="elephant">
        Box3
      </motion.div> */}

      {/* You can basically use the same principle */}
      {/* Variants are very powerful and they allow us to do multiple different things */}
      {/* <motion.div
        className="box"
        variants={boxVariant}
        initial="lion"
        animate="elephant"
      >
        Box3
      </motion.div> */}
      {/* Implement animation */}
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Loop through an array and return a list of elements */}
        {/* Animate children elements */}
        {/* {[1, 2, 3].map(box => (
          <li key={box} className="boxItem"></li>
        ))} */}
        {/* Inheritance initial and animate but variant is not going to be the exact same variant so we can define a new set of variants */}
        {[1, 2, 3].map(box => (
          <motion.li
            key={box}
            variants={listVariants}
            className="boxItem"
            // initial="hidden"
            // animate="visible"
          ></motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
