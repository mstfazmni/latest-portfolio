import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}  // Initial state (hidden)
      animate={{ opacity: 1 }}  // Final state (visible)
      exit={{ opacity: 0 }}     // Exit state (hidden)
      transition={{ duration: 0.5 }}  // Animation duration
    >
      <h1 className="text-center text-4xl">About Me</h1>
            {/* Add your about content here */}

    </motion.div>
  );
}

export default About;