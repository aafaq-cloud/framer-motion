import React, { useState } from 'react';

import { motion } from 'framer-motion';

/**
 * Events and Drags
Event: Now the event is basically an event that we perform and once we perform this event we want to animate our element e.g hovering over
When hover animate its zoom level
Another event is actually clicking this so when we click on it, it gets a little bit smaller and get this kind of cool click event.
// When hover over
CSS
// Perform Styles
.box:hover { scale: 1.1 }
Much easier way in framer motion
props
whileDrag
whileFocus
whileHover
whileTap
we want ot peform animations
Read documentation
Events are also called gestures
 */

const Box2 = () => {
  return (
    <div className="box-container">
      {/* whileHover and in that object we define all the styles that we want ultimately change when we peform the hover event in this case increase the size e.g 10% larger */}
      {/* If we click on it I want to decrease the size */}
      {/*  Make it dragable drag prop */}
      {/* <motion.div
        className="box"
        drag
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Box2
      </motion.div> */}
      {/* Drag in the x direction only or y axis */}
      {/* Restrict the drag of the how much they can drag */}
      {/* Restrict location  */}
      {/* Define some drag constraints */}
      {/* <motion.div
        className="box"
        // drag="x"
        drag="y"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Box2
      </motion.div> */}
      {/* Drag constraints how much a particular element to drag to the left, right, top, bottom */}
      <motion.div
        className="box"
        drag
        dragConstraints={{ right: 20, left: -20, top: 5, bottom: 5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Box2
      </motion.div>
    </div>
  );
};

export default Box2;

/**
 * Animation on third box:
 * It moves in initially and then we have other elements that move in one at a time after the parent element was introduced
 * We have a parent element and chidren elements and these childrent elements are siblings to one another
 */
