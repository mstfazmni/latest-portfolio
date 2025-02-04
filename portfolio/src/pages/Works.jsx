import React from "react";
import { motion } from "framer-motion";

function Works() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center text-4xl">My Projects</h1>
      {/* Add your projects content here */}
    </motion.div>
  );
}

export default Works;
