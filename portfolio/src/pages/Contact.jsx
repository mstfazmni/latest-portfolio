import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center text-4xl">Contact Me</h1>
      {/* Add your contact content here */}
    </motion.div>
  );
}

export default Contact;
